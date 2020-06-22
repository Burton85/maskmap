<template>
  <div id="app">
    <div class="row no-gutters">
      <label class="btn" for="ckb">=</label>
      <input type="checkbox" class="checkbox" id="ckb" />
      <div class="sidebar">
        <div class="toolbox">
          <div class="sticky-top shadow-sm">
            <div class="form-group d-flex">
              <label for="cityName" class="mr-2 col-form-label text-right">縣市</label>
              <div class="flex-fill">
                <select
                  id="cityName"
                  class="form-control"
                  v-model="select.city"
                  @change="updateSelect();removeMarker();updateMap();"
                >
                  <option value style="background-color:#888;color:#aaa" selected>{{select.city}}</option>
                  <option :value="c.CityName" v-for="c in cityName" :key="c.CityName">{{c.CityName}}</option>
                </select>
              </div>
            </div>
            <div class="form-group d-flex">
              <label for="area" class="mr-2 col-form-label text-right">地區</label>
              <div class="flex-fill">
                <select
                  id="area"
                  class="form-control"
                  v-model="select.area"
                  @change="removeMarker();updateMap()"
                >
                  <option style="background-color:#888;color:#aaa" selected>{{select.area}}</option>
                  <option
                    :value="a.AreaName"
                    v-for="a in AreaList"
                    :key="a.AreaName"
                  >{{ a.AreaName }}</option>
                </select>
              </div>
            </div>
            <!-- <p class="mb-0 small text-muted text-right">請先選擇區域查看（綠色表示還有口罩）</p> -->
          </div>
          <ul class="list-group">
            <template v-for="(pharmacy,index) in pharmacies">
              <a class="list-group-item text-left" :key="index" @click="penTo(pharmacy)">
                <h3>{{pharmacy.properties.name}}</h3>
                <p
                  class="mb-0"
                >成人口罩：{{pharmacy.properties.mask_adult}} | 兒童口罩：{{pharmacy.properties.mask_child}}</p>
                <p class="mb-0">
                  地址：
                  <a
                    :href="`https://www.google.com.tw/maps/place/${pharmacy.properties.address}`"
                    target="_blank"
                    title="Google Map"
                  >{{pharmacy.properties.address}}</a>
                </p>
              </a>
            </template>
          </ul>
        </div>
      </div>
      <div class="map-zone">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import L from "leaflet";

let osmMap = {};
const iconsConfig = {
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
};
const icons = {
  green: new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    ...iconsConfig
  }),
  grey: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
    ...iconsConfig
  })
};

const osm = {
  addMapMarker(x, y, item) {
    const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
    L.marker([y, x], {
      icon
    }).addTo(osmMap).bindPopup(`<strong>${item.name}<br/>
                口罩:成人--${item.mask_adult} /兒童--${item.mask_child}<br/>
                地址:<a href="https://www.google.com.tw/maps/place/${item.name}/@${y},${x},20z" target="_blank">${item.address}</a></br>
                電話:${item.phone}</br>
                </strong>
                <small>更新時間:${item.updated}</small>`);
  },
  removeMapMarker() {
    osmMap.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        osmMap.removeLayer(layer);
      }
    });
  },
  penTo(x, y, item) {
    const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
    osmMap.panTo(new L.LatLng(y, x));
    L.marker([y, x], {
      icon
    })
      .addTo(osmMap)
      .bindPopup(
        `<strong>${item.name}<br/>
                口罩:成人--${item.mask_adult} /兒童--${item.mask_child}<br/>
                地址:<a href="https://www.google.com.tw/maps/place/${item.name}/@${y},${x},20z" target="_blank">${item.address}</a></br>
                電話:${item.phone}</br>
                </strong>
                <small>更新時間:${item.updated}</small>`
      )
      .openPopup();
  }
};

export default {
  name: "App",
  data: () => {
    return {
      data: {},
      cityName: [],
      AreaList: [],
      select: {
        city: "臺北市",
        area: "大安區"
      },
      pharmacies: {}
    };
  },
  mounted() {
    axios //抓取县市资料
      .get(
        "https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json"
      )
      .then(res => {
        this.cityName = res.data;
        this.AreaList = this.cityName.find(
          city => city.CityName === this.select.city
        ).AreaList;
      });

    axios //抓取药局资料
      .get(
        "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
      )
      .then(res => {
        this.data = res.data.features;
        this.updateMap();
      });

    //建立地图图层
    osmMap = L.map("map", { center: [25.03, 121.55], zoom: 15 });

    // var marker=new L.MarkerClusterGroup().addTo(osmMap)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "your.mapbox.access.token"
    }).addTo(osmMap);
  },
  methods: {
    removeMarker: () => {
      osm.removeMapMarker();
    },
    updateMap() {
      this.pharmacies = this.data.filter(pharmacy => {
        if (!this.select.area) {
          return pharmacy.properties.county === this.select.city;
        }
        return pharmacy.properties.town === this.select.area;
      });
      this.pharmacies.forEach(pharmacy => {
        const { properties, geometry } = pharmacy;
        osm.addMapMarker(
          geometry.coordinates[0],
          geometry.coordinates[1],
          properties
        );
      });
      this.penTo(this.pharmacies[0]);
    },
    updateSelect() {
      this.select.area = "";
      this.AreaList = this.cityName.find(
        city => city.CityName === this.select.city
      ).AreaList;
    },
    penTo(pharmacy) {
      const { properties, geometry } = pharmacy;
      osm.penTo(geometry.coordinates[0], geometry.coordinates[1], properties);
    }
  }
};
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

* {
  margin: 0;
  padding: 0;
  font-family: 微軟正黑體;
  outline: none;
}

$color-green: #055;
$color-blue: #09f;
$color-green-light: #088;
$bcc: #a88;
$bcc2: rgba(255, 153, 153, 0.431);

@mixin linkstyle {
  text-decoration: none;
  color: $color-blue;
}

::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 5px;
}

.map-zone {
  width: 100%;
  #map {
    height: 100vh;
  }
  .leaflet-control-container {
    display: none;
  }
}

.highlight {
  background: #ecfce8;
}
.btn {
  z-index: 9999;
  position: fixed;
  padding: 1% 5%;
  top: 0;
  right: 0;
  font-size: 50px;
  font-weight: thin;
  color: #555;
}
.checkbox {
  position: absolute;
  opacity: 0;
  transform-origin: 50%;
  &:checked + .sidebar {
    left: -600px;
  }
}
.sidebar {
  width: 25%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  transition: 3s;
  box-shadow: 8px 0 10px hsla(240, 30%, 10%, 0.8);
  .toolbox {
    height: 100vh;
    overflow-y: auto;
    .list-group {
      .list-group-item {
        margin: 1px 2px;
        cursor: pointer;
        background-color: $bcc2;
        h3 {
          font-weight: bold;
          font-size: 22px;
          color: $color-green;
        }
        p {
          font-size: 16px;
          color: $color-green-light;
        }
        a {
          @include linkstyle;
          cursor: pointer;
        }
      }
    }
    .sticky-top {
      padding: 20px;
      padding-top: 5%;
      background-color: $bcc;
      label {
        color: $color-green;
      }
      p {
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .checkbox {
    &:checked + .sidebar {
      top: -20vh;
      left: 0;
    }
  }
  .sidebar {
    transition: 1s;
    width: 100%;
    .list-group {
      display: none;
    }
    .toolbox {
      height: auto;
      overflow: hidden;
    }
  }
}
</style>

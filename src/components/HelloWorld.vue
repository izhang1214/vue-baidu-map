<template>
  <div>
    <table>
      <tr>
        <td>
          经度:
          <input type="text" v-model="center.lng" />
        </td>
        <td>
          纬度:
          <input type="text" v-model="center.lat" />
        </td>
        <td>
          缩放比例:
          <input type="text" v-model="zoom" />
        </td>
      </tr>
    </table>
    <baidu-map
      mapType="BMAP_SATELLITE_MAP"
      class="bm-view"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      @ready="handler"
    ></baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    }
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 100%;
  margin-top: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 90px;
  left: 0;
}
</style>
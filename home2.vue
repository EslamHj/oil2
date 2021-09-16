<template>
<div>
          <appheader2 v-on:close="close"   v-on:open="open" :width_vue="width_vue" :left_vue="left_vue"/>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       
            <video src="https://www.adnoc.ae/ar//-/media/adnoc-v2/videos/home/carousel-3-energy-for-unity.ashx" autoplay="" loop="" muted="" preload="auto" playsinline=""></video>    </div>


    <!-- <div class="carousel-item">
<video src="https://www.adnoc.ae/ar//-/media/adnoc-v2/videos/home/carousel1.ashx" autoplay="" loop="" muted="" preload="auto" playsinline=""></video>    </div>
    <div class="carousel-item">
<video src="https://www.adnoc.ae/ar//-/media/adnoc-v2/videos/home/carousel-2.ashx" autoplay="" loop="" muted="" preload="auto" playsinline=""></video>    </div> -->
  </div>
</div>


</div>
<appfooter2/>
</template>

<script>
import appheader2 from '../components/header2.vue'
import appfooter2 from '../components/footer2.vue'

export default {
 data: function() {
    return {
      bransh:false,
      width_vue: "0",
      left_vue: "-20rem",
      value: "",
    }
 },

 components:{
   appheader2,
   appfooter2,
 },
methods: {
   open() {
      this.width_vue = "20rem";
      this.left_vue = "0";
    },

    close() {
      this.width_vue = "0";
      this.left_vue = "-20rem";
    },
}
 
}
</script>



<style scoped>
.carousel-item video {
    min-height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
</style>
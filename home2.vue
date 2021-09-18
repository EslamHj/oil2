<template>
<div>
          <appheader2  :scrollPosition="scrollPosition" v-on:close="close"   v-on:open="open" :width_vue="width_vue" :left_vue="left_vue"/>
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

<!-- news -->


 <div class="container" style="max-width: 123rem;   padding-bottom: 30px; ">
                <div style="text-align: -webkit-center;"> 
                <h1  class="about_h1" style="padding-top: 70px;">آخر الأخبار</h1>
                  </div>
         <div class="all_card">
            <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>

      <div class="card">
                      <img src="Hima.jpeg" alt="">

         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>

       <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>

      <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>

    <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>


    <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>


    <div class="card">
              <img src="Hima.jpeg" alt="">
         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>


    <div class="card">
                    <img src="Hima.jpeg" alt="">

         <div class="news-card__content-inner"><time datetime="2021-09-07" class="news-card__date">
                                سبتمبر 07, 2021
                            </time> <h3 class="news-card__title"><a >انهاء الاعتصام بميناء الحريقة النفطي وعودة عمليات تصدير الخام الى طبيعتها</a></h3> <!----></div>

    </div>

   

    
         </div>

            </div>
            <div  class="container" style="max-width: 119rem;text-align: end">
                       <button class="btn btn-primary" style="font-size: 13px;
    margin-bottom: 85px;" >عرض الكل</button>

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
       scrollPosition: null,
    }
 },

 components:{
   appheader2,
   appfooter2,
 },
methods: {


  
    updateScroll() {
       this.scrollPosition = window.scrollY
    },

   open() {
      this.width_vue = "20rem";
      this.left_vue = "0";
    },

    close() {
      this.width_vue = "0";
      this.left_vue = "-20rem";
    },
},

mounted() {
    window.addEventListener('scroll', this.updateScroll);
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


/* news */

.about_h1 {
   color: var(--three);
   font-family: var(--cairo);
   font-weight: bold;
   font-size: 2.3rem;
   text-align: center;
   padding-bottom: 30px;
   padding-top: 70px;
    padding-bottom: 48px;
    width: 200px;
    position: relative;
}

.about_h1::after {

 width: 29px;
    height: .3125rem;
    content: "";
    display: block;
    background: #3a9068;
    position: absolute;
    top: 109px;
    left: 83px;
}

.about_p {
    color: var(--one);
  font-family: var(--cairo);
  text-align: center;
    padding-bottom: 30px;
  font-size: 1.7rem;
  direction: rtl;
  }

  .card {
     border: none !important;

}

.all_card {
 display: grid;
 grid-template-columns:repeat(auto-fit,minmax(20rem,1fr)) ;
 gap: 4.5rem;
 padding-right: 20px;
 padding-left: 20px;
 direction: rtl;
}

.card-text {
    font-size: 1.7rem;
    color: var(--tow);
    background-color: var(--one);
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.8rem 3rem;
    font-family: var(--cairo);
}



.news-card__title {
padding: 5px 0px 20px 20px;
color: #4a9e77;
font-size: 17px;
}

.news-card__data {
font-size: 14px;
}

.news-card__content-inner {
  margin-top: 17px;
}

.btn-primary {
padding: 10px 20px 10px 20px !important;
background-color:  #3a9068;
 border: none;

}

.btn-primary:hover {
  background-color:  #fff;
 border: 2px solid #3a9068 ;
 color: #3a9068;
 font-weight: bold;


}


</style>
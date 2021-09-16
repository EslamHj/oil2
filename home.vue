<template>

    <div>
          <appheader v-on:close="close"   v-on:open="open" :width_vue="width_vue" :left_vue="left_vue"/>

   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/111.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style="font-size: 25px;">لمحة عن المؤسسة</h5>
        <p>أنشئت المؤسسة الوطنية للنفط بموجب القانون رقم 24 لعام 1970 لتحل محل المؤسسة الليبية العامة للبترول والتى انشئت بموجب القانون رقم 13 لسنة 1968 ، حيث أنيط بها مسئولية إدارة قطاع النفط ، وقد أعيد تنظيمها فيما بعد بموجب قرار الأمانة العامة لمؤتمر الشعب العام( سابقاً ) رقم 10 لسنة 1979 لتعمل على تحقيق أهداف خطة التحول في المجالات النفطية ، والقيام بدعم الاقتصاد القومي عن طريق تنمية وتطوير الاحتياطيات النفطية واستغلالها الاستغلال الأمثل وإدارتها واستثمارها لتحقيق أفضل العوائد ، ويجوز لها في ذلك أن تشترك مع الهيئات والمؤسسات والجهات الأخرى التي تزاول أعمالا شبيهة بأعمالها ..</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/111.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style="font-size: 25px;">لمحة عن المؤسسة</h5>
        <p>أنشئت المؤسسة الوطنية للنفط بموجب القانون رقم 24 لعام 1970 لتحل محل المؤسسة الليبية العامة للبترول والتى انشئت بموجب القانون رقم 13 لسنة 1968 ، حيث أنيط بها مسئولية إدارة قطاع النفط ، وقد أعيد تنظيمها فيما بعد بموجب قرار الأمانة العامة لمؤتمر الشعب العام( سابقاً ) رقم 10 لسنة 1979 لتعمل على تحقيق أهداف خطة التحول في المجالات النفطية ، والقيام بدعم الاقتصاد القومي عن طريق تنمية وتطوير الاحتياطيات النفطية واستغلالها الاستغلال الأمثل وإدارتها واستثمارها لتحقيق أفضل العوائد ، ويجوز لها في ذلك أن تشترك مع الهيئات والمؤسسات والجهات الأخرى التي تزاول أعمالا شبيهة بأعمالها ..</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/111.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style="font-size: 25px;">لمحة عن المؤسسة</h5>
        <p>أنشئت المؤسسة الوطنية للنفط بموجب القانون رقم 24 لعام 1970 لتحل محل المؤسسة الليبية العامة للبترول والتى انشئت بموجب القانون رقم 13 لسنة 1968 ، حيث أنيط بها مسئولية إدارة قطاع النفط ، وقد أعيد تنظيمها فيما بعد بموجب قرار الأمانة العامة لمؤتمر الشعب العام( سابقاً ) رقم 10 لسنة 1979 لتعمل على تحقيق أهداف خطة التحول في المجالات النفطية ، والقيام بدعم الاقتصاد القومي عن طريق تنمية وتطوير الاحتياطيات النفطية واستغلالها الاستغلال الأمثل وإدارتها واستثمارها لتحقيق أفضل العوائد ، ويجوز لها في ذلك أن تشترك مع الهيئات والمؤسسات والجهات الأخرى التي تزاول أعمالا شبيهة بأعمالها ..</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              <appfooter/>

    </div>

    
</template>


<script>
import appheader from '../components/header.vue'
import appfooter from '../components/footer.vue'

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
   appheader,
   appfooter
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
.carousel-item {
  padding-top: 70px;

}
.carousel-caption{
margin-bottom: 80px;

}
</style>
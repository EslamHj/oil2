<template>
  <footer class="footer">
    <div class="footer_color">
      <h3>            <img  src="/logo_oil.png" alt="" >
</h3>
      <div class="box-container" style="padding-top: 50px;">
        <div class="box">
          <a 
            ><p class="card-text" style="font-weight: bold;
    font-size: 16px;">
              اتصل بنا
            </p></a
          >
          <a
            ><p class="card-text">
             	0214446181  <i class="fas fa-phone"></i>
            </p></a
          >
          <a 
            ><p class="card-text">
              	0214446181<i class="fas fa-phone"></i>
            </p></a
          >
        </div>

        <div class="box">
          <a 
            ><p class="card-text" style="font-weight: bold;
    font-size: 16px;">
                موقعنا
            </p></a
          >
          <a >
            <p class="card-text">
					طريق السكة - طرابلس - ليبيا</p></a
          
          
          >
        </div>

         <div class="box">
          <a 
            ><p class="card-text" style="font-weight: bold;
    font-size: 16px;">
                روابط مهمة

            </p></a
          >
          <a >
            <p class="card-text">
					المكتبة</p></a
          
          
          >

           <a >
            <p class="card-text">
					غرفة المعلومات الالكترونية</p></a
          
          
          >


           <a >
            <p class="card-text">
					منظومة الموارد البشرية</p></a
          
          
          >


        
        </div>


         <div class="box">
          <a 
            ><p class="card-text" style="font-weight: bold;
    font-size: 16px;">
                المواقع الاكثر زيارة
            </p></a
          >
          <a >
            <p class="card-text">
				 منظمة الدول المصدرة للنفط </p></a
          
          
          >

           <a >
            <p class="card-text">
				 منظمة الأقطار العربية المصدرة للبترول </p></a
          
          
          >

           <a >
            <p class="card-text">
				    صفحة المؤسسة الوطنية للنفط على موقع فيس بوك </p></a
          
          
          >
        </div>
        <!-- <div class="box">
          <a 
            ><p class="card-text">تواصل معنا</p></a
          >
          <a 
            ><p class="card-text">
              <i class="fas fa-phone"></i> <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-youtube"></i>
            </p></a
          >
        
        </div> -->
        <!-- <div class="box">
                 <h3>صفحتنا على الفيس</h3>
               <a class="a_face" href="https://www.facebook.com/%D9%83%D9%88%D9%8A%D9%83-%D8%AF%D9%8A%D9%84%D9%81%D9%8A%D8%B1%D9%8AQuick-delivery-160957531211914">كويك ديلفيري <i style="color: var(--one);" class="fab fa-facebook"></i></a>
                </div>  

                <div class="box">
                 <h3> <i class="fas fa-chevron-down"></i>البريـد الإلكتروني</h3>
                 <a href="">qdlibya@gmail.com <i style="color: var(--one);" class="far fa-envelope"></i></a>
                </div>                    -->
      </div>
      <div class="soshial">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-google-plus-g"></i>
      </div>
    </div>
    <div class="credit">
      جميع الحقوق محفوظة لدى المؤسسة الوطنية للنفط  ©
    </div>
  </footer >
</template>

<style scoped>
.soshial{
text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
    color: black;
    letter-spacing: 20px;}
.box {
    direction: initial;
}

.footer_color {
  background-color: #3a9068;
  font-size: 13px;
  font-family: var(--cairo);
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: end;
  padding-right: 30px;
  color: black;
  margin-top: -6px;
}
.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
  direction: rtl;
  padding-left: 50px;
}

.footer h3 {
  font-size: 20px;
  color: var(--tow);
}

.card-text {
  font-size: 13px;
color: WHITE;
  background-color: #3a9068;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.6rem 3rem;
  font-family: var(--cairo);
  font-weight: 500;
}

.card-text i {
  padding-left: 7px;
}
.credit {
  text-align: center;
  border-top: 0.1rem sold var(--tow);
  font-size: 16px;
  color: white;
  padding: 0.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-family: var(--cairo);
  background-color:#1c4a35;
}

@media (max-width: 874px) {
    .box{
    direction: revert;
}
  .credit {
    font-size: 14px;
  }
}

@media (max-width: 444px) {
  .credit {
    font-size: 8px;
  }

  .footer .box-container {
    gap: 0;
    text-align: start;
    margin-top: 18px;
    padding-left: 0px;
  }
}

@media (max-width: 495px) {
  .footer .box-container {
    padding-left: 0px;
  }
}
</style>
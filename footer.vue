<template>
  <footer class="footer">
    <div class="footer_color">
      <h3>            <img  src="/logo_oil.png" alt="" >
</h3>
      <div class="box-container">
        <div class="box">
          <a 
            ><p class="card-text">
              اتصل بنا
            </p></a
          >
          <a
            ><p class="card-text">
              <i class="fas fa-phone"></i>	0214446181
            </p></a
          >
          <a 
            ><p class="card-text">
              <i class="fas fa-phone"></i>	0214446181
            </p></a
          >
        </div>

        <div class="box">
          <a 
            ><p class="card-text">
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
            ><p class="card-text">تواصل معنا</p></a
          >
          <a 
            ><p class="card-text">
              <i class="fas fa-phone"></i> <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-youtube"></i>
            </p></a
          >
        
        </div>
        <!-- <div class="box">
                 <h3>صفحتنا على الفيس</h3>
               <a class="a_face" href="https://www.facebook.com/%D9%83%D9%88%D9%8A%D9%83-%D8%AF%D9%8A%D9%84%D9%81%D9%8A%D8%B1%D9%8AQuick-delivery-160957531211914">كويك ديلفيري <i style="color: var(--one);" class="fab fa-facebook"></i></a>
                </div>  

                <div class="box">
                 <h3> <i class="fas fa-chevron-down"></i>البريـد الإلكتروني</h3>
                 <a href="">qdlibya@gmail.com <i style="color: var(--one);" class="far fa-envelope"></i></a>
                </div>                    -->
      </div>
    </div>
    <div class="credit">
      جميع الحقوق محفوظة لدى المؤسسة الوطنية للنفط  ©
    </div>
  </footer >
</template>

<style scoped>
.footer_color {
  background-color: #CED4DA;
  font-size: 13px;
  font-family: var(--cairo);
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: end;
  padding-right: 30px;
  color: black;
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
  color: black;
  background-color: #CED4DA;
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
  background-color:#6f6a6a;
}

@media (max-width: 874px) {
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

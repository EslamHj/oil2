<template>
              <appheader3  :scrollPosition="scrollPosition" v-on:close="close"   v-on:open="open" :width_vue="width_vue" :left_vue="left_vue"/>

              <section class="home container" id="home">
      <div class="home-slider">
        <div class="wrapper">
          <div  class="slide">
            <div class="content">
              <h3>لمحة عن المؤسسة</h3>
              <p>
أنشئت المؤسسة الوطنية للنفط بموجب القانون رقم 24 لعام 1970 لتحل محل المؤسسة الليبية العامة للبترول والتى انشئت بموجب القانون رقم 13 لسنة 1968 
              </p>
              <div class="login_create_account">
                <!-- <router-link class="btn login" to="/login">تسجيل الدخول</router-link> -->

                <router-link class="btn create_account" to="/createAccount"> المزيد
                </router-link>
              </div>
            </div>

            <div class="image">
              <img src="/home.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <appfooter3/>

</template>


<script>
import appheader3 from '../components/header3.vue'
import appfooter3 from '../components/footer3.vue'
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
   appheader3,
   appfooter3,
   
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


.home .home-slider .slide {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 14rem 2rem;
}

.home .home-slider .slide .content {
  flex: 1 1 45rem;
}

.home .home-slider .slide .image {
  flex: 1 1 45rem;
}

.home .home-slider .slide .image img {
  width: 100%;
}

.home .home-slider .slide .content h3 {
  font-family: "Kaushan Script", cursive;
  color: #41210a;
  font-size: 4rem;
}

.home .home-slider .slide .content p {
  color: #41210a;
  font-size: 2.2rem;
  padding: 2.5rem 0;
  line-height: 1.5;
  font-family: var(--cairo);
}

.create_account {
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.7rem;
  color: var(--tow);
  background-color: #41210a;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.8rem 3rem;
  font-family: var(--cairo);
}

.login {
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.7rem;
  color: var(--tow);
  background-color: #41210a;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.8rem 3rem;
  font-family: var(--cairo);
  margin-right: 30px;
}

.btn:hover {
  background-color: var(--tow);
  color: var(--one);
  border: 2px solid #41210a;
  font-weight: bold;
}
.home .home-slider .paddingadd {
  padding: 3rem 2rem 5rem !important;
  }
  .home .home-slider .paddingmove {
  padding: 0rem 2rem 5rem !important;
  }

@media (max-width: 540px) {
  .home .home-slider .slide .content h3 {
    font-size: 3rem;
  }

  .home .home-slider .slide .content p {
    font-size: 1.7rem;
    padding: 2.1rem 0;
  }
  .home .home-slider .slide {
    padding: 10rem 2rem;
  }
  .font_size {
    font-size: 1.6rem !important;
  }
}

@media (max-width: 390px) {
  .login {
    margin-right: 0px;
    margin-top: 0px;
  }

  .login_create_account {
    display: flex;
    flex-direction: column;
  }


  .home .home-slider .slide {

    gap: 0;
  }
}

@media (max-width:1199px) {
    .home .home-slider .slide {
      padding: 11rem 2rem;
    }

}


</style>
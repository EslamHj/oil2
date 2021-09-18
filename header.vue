<template>
      <div></div>

  <header id="header" class="header">
    <div id="app" class="navigation">
      <div class="container" style="max-width: 127rem;">
        <div class="menu" :style="{ width: width_vue, right: right_vue }" >
          <div class="menu__top">
            <a v-show=" !bransh"  @click="close()" class="close__toggle ">
              <i class="close__to fas fa-times" ></i>
            </a>

             <a v-show=" bransh" href="#" @click="close_bransh()" class="back" style="position: absolute;
    left: 25px;
    z-index: 100;
    top: 33px;
}">
              <i class="fas fa-arrow-left" style="color:var(--one)"></i>
            </a>
          </div>
        <nav >
          <ul v-show=" !bransh" class=" nav__list"  >
   
              
<li class="nav-item" >
          <a class="link_nano nav-link active" aria-current="page" style="color: var(--tow);font-size: 15px; font-weight: bold;" >الرئيسية</a>
        </li>




      <li class="mb-1">
        <button   style="color: var(--tow);font-size: 15px; font-weight: bold;" class="btn d-inline-flex align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#list-collapse" aria-expanded="true" aria-current="true">
                            نبذه عن المؤسسة 

        </button>
        <div class="collapse " id="list-collapse">
          <ul class="list-unstyled fw-normal pb-1 small">
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >كلمة رئيس مجلس الإدارة </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >لمحة عن المؤسسة </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >مجلس الإدارة </a></li>
          </ul>
        </div>
      </li>



      <li class="mb-1">
        <button   style="color: var(--tow);font-size: 15px; font-weight: bold;" class="btn d-inline-flex align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#change-collapse" aria-expanded="true" aria-current="true">
               شركاتنا
        </button>
        <div class="collapse " id="change-collapse">
          <ul class="list-unstyled fw-normal pb-1 small">
                        <li><a class="dropdown-item" href="#" style="color: var(--tow);" >شركات مملوكة </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >شركات مشاركة </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >شركات مقاسمة </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >شركات إمتياز </a></li>
            <li><a class="dropdown-item" href="#" style="color: var(--tow);" >مراكز ومعاهد </a></li>

          </ul>
        </div>
      </li>
      <li class="nav-item" >
          <a class="link_nano nav-link active" aria-current="page" href="#" style="color: var(--tow);font-size: 15px; font-weight: bold;">أعمالنا </a>
        </li>


    <li class="nav-item" >
          <a class="link_nano nav-link active" aria-current="page" href="#" style="color: var(--tow);font-size: 15px; font-weight: bold;">الأخبار </a>
        </li>

         <li class="nav-item">
          <a class="link_nano nav-link active" aria-current="page" href="#" style="color: var(--tow);font-size: 15px; font-weight: bold;">اتصل بنا </a>
        </li>









      
           
         
          </ul>

</nav>

 

        </div>
        <div  class="nav__hamburger logo_nano">
            <!-- <i class=" fas fa-bars" style="color:var(--white)"></i> -->
            <img  src="/logo_oil.png" alt="" >
          </div>
        <nav class="nav">
          <div class="nav__logo">
            <a    class="scroll-link">
         
            </a>
          </div>

            <div @click="open()" class="nav__hamburger logo_nano_phone">
            <!-- <i class=" fas fa-bars" style="color:var(--white)"></i> -->
            <img  src="/logo_oil.png" alt="" >
          </div>
          <!-- <div @click="open()" class="nav__hamburger">
            <i class=" fas fa-bars" style="color:var(--white)"></i>
          </div> -->
          <div class="nav__icons ">
                         <!-- <p class="logo_right" style="padding-top: 10px;
    color: var(--one);"> نظام الموارد البشرية</p>
            <img class="logo_right" src="/img/ns.png" alt=""  style="width: 35px; margin-left: 15px;"> -->
                <div class="top_nav_all">

            


       

<li class="nav-item">
          <a class="lk nav-link active" aria-current="page" href="#">الرئيسية</a>
        </li>

        <li class="nav-item dropdown ">
          <a class=" lk nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              نبذه عن المؤسسة 
          </a>
          <ul class="dropdown-menu list" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#" >كلمة رئيس مجلس الإدارة </a></li>
            <li><a class="dropdown-item" href="#" >لمحة عن المؤسسة </a></li>
            <li><a class="dropdown-item" href="#" >مجلس الإدارة </a></li>


          </ul>
          
          

        </li>


 <li class="nav-item dropdown">
          <a class=" lk nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
شركاتنا 

          </a>
          <ul class="dropdown-menu admin" aria-labelledby="navbarDropdownMenuLink"  >
            <li><a class="dropdown-item" href="#" >شركات مملوكة </a></li>
            <li><a class="dropdown-item" href="#" >شركات مشاركة </a></li>
            <li><a class="dropdown-item" href="#" >شركات مقاسمة </a></li>
            <li><a class="dropdown-item" href="#">شركات إمتياز </a></li>
            <li><a class="dropdown-item" href="#" >مراكز ومعاهد </a></li>


          </ul>
          
          

        </li>


<li class="nav-item">
          <a class=" lk nav-link active" aria-current="page" href="#">أعمالنا </a>
        </li>


    <li class="nav-item">
          <a class="lk nav-link active" aria-current="page" href="#">الأخبار </a>
        </li>

         <li class="nav-item">
          <a class="lk nav-link active" aria-current="page" href="#">اتصل بنا </a>
        </li>



       



                   
         </div>


          
          </div>
            <div class="icon_left">
                <i class="fas fa-sign-in-alt" style="position: absolute;
    left: 123px;
    top: 23px;
    color: var(--one);
    font-size: 25px;"></i> 
    <a style="color: var(--four);
    font-weight: bold;">عربي</a>
              
                <!-- <i class="fas fa-search"></i> -->
              </div>
        </nav>
            

      </div>
       
           

    </div>

  


  </header>
  
</template>

<script>
export default {

  props:['width_vue','right_vue','dis'],
  data: function() {
    return {
     
      Home:true,
      order:false,
      movement:false,
      City:false,
      account:false,
    };
  },

  

  methods: {

     
    open() {
      this.$emit('open');
    },

    close() {
      this.$emit('close');
       console.log('mm');
       
    },
    close_bransh(){
      this.bransh =false;
    },
      open_bransh(){
      this.bransh =true;
    },

   
  },

  
  name: "headerApp",
};
</script>

<style scoped>

/*  ======================
        Header
    ======================
*/

.header {
  position: relative;
}

.container {
  max-width: 81rem;
  margin: 0 auto;
  padding: 0 1.6rem;
}

/*
======================
   Navigation
======================
 */

.navigation {
 
  height: 7rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  background-color:var(--tow);
  position: fixed;
    z-index: 400;
    width: -webkit-fill-available;
    direction: rtl;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  height: 7rem;
  padding: 0 1rem;
}
.nav__list {
text-align: end;
    line-height: 30px;
    border-radius: 50px 50px 0px 0px;
    margin-top: 75px;
    font-size: 14px;
    padding-right: 10px;
    padding-bottom: 30px;
    direction: ltr;
}

.nav__list_dis {
  text-align: end;
    line-height: 30px;
    border-radius: 50px 50px 0px 0px;
    margin-top: 75px;
    font-size: 14px;
    padding-right: 10px;
    padding-bottom: 30px;
    direction: ltr;
    display: none;
}

.fix__nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color:var(--tow);
  z-index: 1200;
}

.menu {
 background-color: var(--one);
  height: 103%;
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: 2;
margin-top: -14px;
overflow-y: auto;
}

.menu_open {
  width: 27rem;
  left: 0;
}

.nav__hamburger {
  position: absolute;
  color: var(--one);
    font-size: 22px;
    display: block;
}

.nav__link {
  color: var(--tow);
  font-weight: bold;
}

.menu .nav__item {
  text-align: right;
  line-height: 50px;
  /*  border-bottom: 1px solid var(--black);*/
  padding-right: 21px;
}

.menu__top {
  text-align: right;
  margin: 20px 20px 0 0;
  font-size: 23px;
}

.nav__logo a {
  font-size: 2.5rem;
  color: var(--tow);
  padding-left: 3.6rem;
  font-weight: 700;
}

.nav__menu {
  width: 50%;
}

.nav__icons {
  display: flex;
  position: relative;
}
.login{
  padding: 9px 15px 9px 15px;
    font-size: 13px;
    background-color: var(--one);
    border: var(--one);
    margin-left: 18px;
    font-family: var(--cairo);
}


.create_account{
  padding: 5px 15px 5px 15px;
    font-size: 13px;
    background-color: var(--tow);
    border: 2px solid var(--one);
    margin-left: 18px;
    color: var(--one);
    font-family: var(--cairo);
    font-weight: bold;
}
.create_account:hover{
 padding: 5px 15px 5px 15px;
    font-size: 13px;
    background-color: var(--one);
    border: 2px solid var(--tow);
    margin-left: 18px;
    color: var(--tow);
    font-family: var(--cairo);
    font-weight: bold;
    border-radius: 3px;
   
}

.logo_right{
  display: none;
}

.li_s{
  color: var(--tow);
    padding-right: 25px;
    font-family: var(--cairo);
}

.li_s:hover{
    color: var(--one);
    background-color: var(--tow);
    font-weight: bold;
    
}



.name , .code  {
   color: var(--one);
}


.code {
  position: absolute;
    right: 45px;
    top: 11px;
}

.name {
position: absolute;
    right: 45px;
    top: -11px;
}

ul{
  padding-left: 0 !important;
}

.li_s span {
 position: absolute;
    left: 26px;
    font-size: 20px;
}

.close__to {
  position: absolute;
    z-index: 100;
    color: var(--tow);
    top: 39px;
right: 160px;
}

@media(max-width:800px){
  
  .login {
    display: none;
  }

  .create_account {
    display: none;
  }

  .logo_right{
  display: block;
}

.logo_left{
  display: none;
}

}

.top_nav {
  color: var(--one);
    margin-left: 17px;
    font-size: 14px;
    padding: 4px 5px 4px 5px;
}
.top_nav_all {

display: flex;
        font-family: var(--cairo) ;
}

@media (max-width:923px) {
  .top_nav_all {
    display: none;
  }

  .nav__hamburger {
        display: block;
  }
}
.top_nav_activ {
    color: var(--tow);
    background-color: var(--one);
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 4px 10px 4px 10px;
    transition: 0.5s;
    font-size: 14px;

}

.dropdown-toggle::after {
   vertical-align: 0.200em !important;
}

.nav-link{
  direction: ltr;
    color: var(--one) ;

}


.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
    right: 5px;
}

.dropdown-item {
    display: flex;
    direction: rtl;
    }
.dropdown-menu.show
{
   font-size: 12px;
}   
    .main.show{
    transform: translate(22px, 36px) !important;
    
    }
  .list.show{
    transform: translate(0px, 36px) !important;
  }

  .admin.show{
transform: translate(-27px, 36px) !important;  }

  
  .leave.show{
transform: translate(93px, 36px) !important;  }

  .change.show{
    transform: translate(13px, 36px) !important;
  }

  .price.show{
    transform: translate(-20px, 36px) !important;
  }
  button:focus {
     border: none;
     box-shadow: none;

  }
  .dropdown-item:focus {
       border: none;
     box-shadow: none;
     background-color: var(--four) !important;
     color: var(--tow) !important;
     
  }

  .dropdown-item:hover {
       border: none;
     box-shadow: none;
     background-color: var(--four) !important;
     color: var(--tow) !important;
  }

.mb-1 button {
      padding-bottom: 20px;
        border: none;
     box-shadow: none;
     margin-top: 20px;
}

.logo_nano img {
  max-width: 80% !important;
  display: flex;
    direction: ltr;
    font-size: 17px;
    padding-top: 10px;
    padding-right: 10px;

}

.logo_nano_phone img {
  max-width: 60% !important;

}

.list-unstyled li {
  padding-left: 10px;
}
  
  tbody, td, tfoot, th, thead, tr {
    text-align: start;
    padding-right: 20px !important;
}

.lk:hover {
  color: var(--four) !important;
}

.lk:focus {
  color: var(--four) !important;
}
.link_nano:hover {
  background-color: var(--four) !important;
    color: var(--tow) !important;
    margin-left: 9px;
}

.logo_nano_phone{
  display: none;
}

@media(max-width:800px){
  
.icon_left {
  display: none;
}

.logo_nano_phone{
  display: block;
}
.logo_nano{
  display: none;
}

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x,0rem) !important;
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
}




}
</style>

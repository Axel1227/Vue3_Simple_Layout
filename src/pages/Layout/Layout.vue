<template>
  <div class="wrap">
    <!-- Side bar Start-->
      <div class="sidebar" v-show="showSide">
          <div class="sidebar-header">
              <div>
                
                <router-link to="/" class="sidebar-header-text"><span>Axel Layout Vue3</span></router-link>
              </div>
          </div>
          <div class="sidebar-main">
              <div class="sidebar-item-content">
                  <router-link to="/home" class="sidebar-item-block">
                      Home
                  </router-link>
                  <router-link to="/About" class="sidebar-item-block">
                      About
                  </router-link>
                  <router-link to="/Messages" class="sidebar-item-block">
                      Messages
                  </router-link>
              </div>
          </div>
      </div>
    <!-- Side bar End-->

    <div class="content">
      <!-- nav Start -->
      <div class="nav">
        <div class="nav-hamburger" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="hamburger-svg">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
      </div>
      <!-- nav End -->
      
      <!-- Main的框框 -->
      <div class="main">
        <div class="main-content">
        <router-view></router-view>
        </div>
      </div>
      <!-- Main  -->


    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue';
  const showSide = ref(true);

  // hide show side bar
  const toggleSideBar = () => {
  showSide.value = !showSide.value;
  };

</script>


<style>
/* 最外層Page Container */
.wrap{
  display: flex; 
}

/* Sidebar Container */
.sidebar {
  width: 250px;
  height: 100%;
}

/* Sidebar Header */
.sidebar-header {
  height: 50px;
  background-color: #727579;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 15%;
}

/* Sidebar Header Text */
.sidebar-header-text{
  color: white;
  text-decoration:none; /* 取消超連結底線 */
}

/* Sidebar Main Content */
.sidebar-main{
  height: calc(100vh - 50px); /* 100vh - Header 50px */ 
  background-color: #343a42;
}

/* Sidebar Item Content */
.sidebar-item-content{
  display: flex;
  flex-direction: column;
  padding: 10px;
}

/* Sidebar 每個Item設置 */
.sidebar-item-block{
  display: inline-flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  color: white;
  text-decoration:none; /* 取消超連結底線 */
}

/* Item的滑鼠移過效果 */
.sidebar-item-block:hover{
  background-color: #ccc;
  color: #333;
  /* transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;   */ 
}

/* main */
.content{
  width: 100%;
  height: 100%;
}

/* nav */
.nav{
  display: flex;
  height: 50px;
  /* background-color: #cbd5e0; */
  background-color: #5e6369;

}
.nav-hamburger{
  display: flex;
  background-color: #5e6369;
  align-items: center;
  justify-content: center;
  cursor: pointer;  /* 滑鼠移過去改變游標 */
  width: 50px;
}
.hamburger-svg{
  width: 25px;
  height: 25px;
  fill: rgb(255, 255, 255);
}

.main{
  height: calc(100vh - 50px);
  background-color: #b8babd;
}

.main-content{
  padding: 20px;
  background-color: #b8babd;
}

</style>
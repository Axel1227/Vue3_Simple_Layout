<template>
  <div>
    <RouterView  />  <!-- 渲染與當前路由對應的組件 -->
    
  </div>
</template>

<script setup>


</script>


<style>
#app{
  font-family: Avenir, Arial, Helvetica, sans-serif;  /* 字形 */
  /* 通常都會加這兩個到 CSS 樣式中，改善字體 */
  -webkit-font-smoothing: antialiased; /* Chrome 平滑字體 (限定特定瀏覽器) */
  -moz-osx-font-smoothing: grayscale; /* 改善字體顯示、字體灰階 */
  /* color: #2c3e50; */
}
html,body{
  margin: 0;
}

</style>

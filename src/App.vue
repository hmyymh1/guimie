<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> 
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped> 
/* 
  scoped 作用域 只影响当前组件 
  lang="scss" 支持scss  
*/


</style>
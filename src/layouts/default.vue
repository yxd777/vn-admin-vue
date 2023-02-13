<!--
 * @Author: yxd
 * @Date: 2023-02-13 22:34:08
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 23:59:22
 * @Description: 
-->
<template> 
  <div>
    <div class="row">
      <div class="col-3">
        <SidebarNav :menus="store.menus"/>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="container-fluid">
            <HeaderNav/>
            <router-view></router-view>
          </div>
        </div> 
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import SidebarNav from '@/components/SidebarNav.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import { defineComponent } from 'vue'
import { useMenusStore } from '@/store/menu'

export default defineComponent({
  components:{SidebarNav,HeaderNav},
  setup () {
    const store= useMenusStore()

    return {
      store
    }
  }
})
</script>

<style scoped>

</style>
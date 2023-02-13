<template>
  <div>
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item  in menus " :key="item.id">
        <router-link class="nav-link active" :to="item.routeName?{name:item.routeName}:item.path"  >{{ item.name }}</router-link>
      </li> 
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MenuItem } from './types/SidebarNav';


export default defineComponent({
  props:{
    menus:{
      type:Array as PropType<Array<MenuItem>>,
      default:()=>[] as MenuItem[]
    },
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
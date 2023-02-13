<!--
 * @Author: yxd
 * @Date: 2023-02-13 12:42:18
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 18:30:34
 * @Description: 
-->
<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-11 col-sm-8 col-lg-6 col-xl-4  col-xxl-4">
      <!-- <div class="col-4"> -->
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">用户名</label>
          <input type="email" :class="['form-control', { 'is-invalid': loginInfo.usernameMsg }]" id="exampleInputEmail1"
            aria-describedby="emailHelp" v-model="loginInfo.username">
          <div class="invalid-feedback">
            {{ loginInfo.usernameMsg }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <input type="password" :class="['form-control', { 'is-invalid': loginInfo.passwordMsg }]"
            id="exampleInputPassword1" v-model="loginInfo.password">
          <div class="invalid-feedback">
            {{ loginInfo.passwordMsg }}
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 mb-2 text-light" @click="submit()">登录</button>
          <router-link to="/reg" class="border rounded w-100 text-center ">
            <button type="submit" class="btn ">注册</button>
          </router-link>
        </div>

      </form>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
  setup() {
    const loginInfo = reactive({
      username: "",
      usernameMsg: computed(() => {
        if (
          loginInfo.username !== '' &&
          (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(loginInfo.username) &&
            !/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(loginInfo.username))
        ) {
          return "请输入正确账号"
        }
        return ""
      }),
      password: "",
      passwordMsg: computed(() => {
        if (loginInfo.password !== '' && loginInfo.password.length < 6) {
          console.log("===");

          return "不能小于六位"
        }
        return ""
      })
    })

    const submit = () => {
      axios.post('/auth/login', loginInfo).then(res => {
        console.log(res);
      })

    }
    return {
      loginInfo,
      submit
    }
  }
})
</script>

<style scoped>

</style>
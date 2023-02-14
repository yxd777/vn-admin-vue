<template>
  <div>
    <div class="mb-3">
      <button type="button" class="btn btn-primary px-3" @click="openModal('add')">
        <i class="fas fa-plus"></i>新增
      </button>
    </div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">用户名</th>
          <th scope="col">角色</th>
          <th scope="col">性别</th>
          <th scope="col">头像</th>
          <th scope="col">地址</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in lists" :key="item.id">
          <th scope="row">{{(index+1)}}</th>
          <td>{{item.username}}</td>
          <td>{{item.roles.map(o=>o.name).join(',')}}</td>
          <td>{{item.profile && item.profile.gender}}</td>
          <td>{{item.profile && item.profile.photo}}</td>
          <td>{{item.profile && item.profile.address}}</td>
          <td>
            <button type="button" class="btn btn-secondary px-3" @click="openModal('edit', item)">
              <i class="far fa-edit me-2"></i>编辑</button>
            <button type="button" class="btn btn-danger px-3 ms-3" @click="openModal('delete', item)">
              <i class="far fa-trash-alt me-2"></i>删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>

    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#DeleteModal">
      Launch demo modal
    </button> -->

    <!-- Edit/Add Model -->
    <div class="modal fade" ref="editRef" tabindex="-1" aria-labelledby="EditAndAddModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="EditAndAddModalLabel">{{msg}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- username input -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">用户名</label>
              <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="请输入用户名" v-model="formValue.username">
            </div>
            <!-- password input -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">密码</label>
              <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="请输入登录密码" v-model="formValue.password">
            </div>
            <!-- role checkbox -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">角色</label>
              <div class="form-control border-0">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" :value="2" id="flexCheckDefault" v-model="formValue.roles">
                  <label class="form-check-label" for="flexCheckDefault">
                    普通用户
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" :value="1" id="flexCheckChecked" v-model="formValue.roles">
                  <label class="form-check-label" for="flexCheckChecked">
                    管理员
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" :value="3" id="flexCheckChecked" v-model="formValue.roles">
                  <label class="form-check-label" for="flexCheckChecked">
                    测试用户
                  </label>
                </div>
              </div>
            </div>
            <!-- gender radio -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">性别</label>
              <div class="form-control border-0">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" :value="1" v-model="formValue.profile.gender">
                  <label class="form-check-label" for="flexRadioDefault1">
                    男
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" :value="2" v-model="formValue.profile.gender">
                  <label class="form-check-label" for="flexRadioDefault2">
                    女
                  </label>
                </div>
              </div>
            </div>

            <!-- avatar input/upload button -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">用户头像</label>
              <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="请粘贴头像路径" v-model="formValue.profile.photo">
            </div>
            <!-- address input -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">地址</label>
              <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="请输入地址" v-model="formValue.profile.address">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="editSubmit()">确定</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" ref="deleteRef" tabindex="-1" aria-labelledby="DeleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="DeleteModalLabel">删除</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            确定删除该记录吗？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="deleteSubmit()">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import axios from "@/utils/axios";
import * as bootstrap from "bootstrap";
interface Profile {
  gender: number;
  address: string;
  photo: string;
}

interface RoleItem {
  id: number;
  name: string;
}

interface UserItem {
  id: number;
  username: string;
  password?: string;
  profile: Profile;
  roles: RoleItem[];
}

export default defineComponent({
  setup() {
    const lists = ref([] as UserItem[]);
    const tmpItem = ref({} as UserItem);

    const formValue = reactive({
      username: "",
      password: "",
      profile: {
        gender: 0,
        address: "",
        photo: "",
      } as Profile,
      roles: [] as RoleItem[],
    } as UserItem);

    let localType: string = "";

    // dom绑定
    const deleteRef = ref();
    const editRef = ref();

    // 模态框的控制handler
    const deleteModal = ref();
    const editAndAddModel = ref();
    const msg = ref("新增");

    // 获取数据
    const getData = async () => {
      const res = (await axios.get("/user")) as UserItem[];
      if (res && res.length > 0) {
        lists.value = res;
      }
    };

    onMounted(async () => {
      // 初始化
      await getData();

      // deleteModal.value = new bootstrap.Modal(
      //   document.getElementById("DeleteModal")!,
      //   { backdrop: true }
      // );
      // 模态框创建
      deleteModal.value = new bootstrap.Modal(deleteRef.value, {
        backdrop: true,
      });
      editAndAddModel.value = new bootstrap.Modal(editRef.value, {
        backdrop: true,
      });
    });

    // 控制模态框
    const openModal = (type: string, item?: UserItem) => {
      localType = type;
      tmpItem.value = item || ({} as UserItem);
      // console.log(item);
      if (type === "delete") {
        deleteModal.value.show();
      } else if (type === "edit") {
        msg.value = "编辑";
        editAndAddModel.value.show();
      } else if (type === "add") {
        msg.value = "新增";
        editAndAddModel.value.show();
      }
    };

    const editSubmit = async () => {
      console.log(formValue);
      // 判断用户是新增，还是编辑
      if (localType === "add") {
        // 发送对应的数据到接口
        const res = await axios.post("/user", formValue);
        console.log("🚀 ~ file: index.vue ~ line 238 ~ editSubmit ~ res", res);
        // 清空form表单
        Object.assign(formValue, {
          username: "",
          password: "",
          profile: {
            gender: 0,
            address: "",
            photo: "",
          } as Profile,
          roles: [] as RoleItem[],
        });
        // 关闭模态框
        editAndAddModel.value.hide();
      }
      // todo作业 编辑
      // 编辑的时候 —> 保存id信息 -> 传参把id代上
      // 编辑之前，填充数据到form表单上 -> formValue -> mapper -> roles id
    };

    // 删除该条数据
    const deleteSubmit = async () => {
      // 1.获取用户删除的item -> id
      const id = tmpItem.value.id;
      // 2.发送删除请求
      const res = (await axios.delete("/user/" + id)) as UserItem;
      // 3.请求成功之后关闭模态框
      console.log("🚀 ~ file: index.vue ~ line 272 ~ deleteSubmit ~ res", res);
      if (res.username === tmpItem.value.username) {
        deleteModal.value.hide();
      }
      // 获取新的列表数据并更新
      await getData();
    };

    return {
      formValue,
      deleteRef,
      editRef,
      lists,
      openModal,
      msg,
      editSubmit,
      deleteSubmit,
    };
  },
});
</script>

<style scoped>
</style>
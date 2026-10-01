<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

      <h1 class="text-3xl font-bold text-center mb-2">
        HRsystem
      </h1>

      <p class="text-center text-gray-500 mb-8">
        ระบบประเมินบุคลากร
      </p>


      <!-- Username -->
      <div class="mb-4">

        <label class="block mb-2 font-medium">
          Username
        </label>

        <input
          v-model="form.username"
          type="text"
          placeholder="กรอก Username"
          class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <!-- Password -->
      <div class="mb-6">
        <label class="block mb-2 font-medium">
          Password
        </label>

        <input
          v-model="form.password"
          type="password"
          placeholder="กรอก Password"
          class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="login"
        />
      </div>


      <!-- Error -->
      <div
        v-if="error"
        class="bg-red-100 text-red-600 p-3 rounded-lg mb-4"
      >
        {{ error }}
      </div>


      <!-- Login -->
      <button
        @click="login"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        {{ loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ" }}
      </button>


      <!-- Signup -->
      <div class="text-center mt-6">
        <span class="text-gray-500">
          ยังไม่มีบัญชี?
        </span>

        <router-link
          to="/signup"
          class="text-blue-600 font-medium ml-2"
        >
          สมัครสมาชิก
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRounded } from "vue-router";
import { useAuthStore} from "../stores/auth.js";

const router = useRounded();
const auth = useAuthStore();

const form = ref({
  username: "",
  password: ""
});

const error = ref("");
const loading = ref(false);


const login = async () => {
  error.value = "";

  if(
    !form.value.username ||
    !form.value.password
  ) {

    error.value = 
      "กรุณากรอก ชื่อผู้ใช้ และ รหัสผ่าน"
    return;
  }

  try {
    loading.value = true

    const respose = await axios.post(
      "http://localhost:3000/login",
      {
        username: form.value.username,
        password: form.value.password
      }
    );

    const data = respose.data;

    if (
      !data.token ||
      !data.user
    ) {
      error.value = 
        "ข้อมูล Login จาก Server ไม่ถูกต้อง";

      return;
    }

    auth.login(
      data.user,
      data.token
    );

    switch (data.user.role) {
      case "personnel":
        await router.push("/personel");
        break;
      case "evaluatee":
        await router.push("/evaluatee");
        break;
      case "evaluator":
        await router.push("/evaluator");
        break;
      default:
        error.value = 
          "ไม่พบสิทธิ์การใช้งาน";
        auth.logout();
        return;
    }
  } catch (err) {
    console.error(
      "LOGIN ERROR:",
    );

    if (err.respose) {
      error.value =
        err.respose.data?.message ||
        `เข้าสู่ระบบไม่สำเร็จ (${err.respose.status})`;
    }
    else if (err.respose) {
      error.value = 
        "ไม่สามารถเชื่อมต่อ backend ได้";
    }
    else {
      error.value = 
        "เกิดข้อผิดพลาดในการเข้าสู่ระบบ";
    }
  } finally {
    loading.value = false;
  }
};
</script>
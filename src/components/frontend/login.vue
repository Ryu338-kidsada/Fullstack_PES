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
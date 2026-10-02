<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow">
    <nav class="max-w-7xl mx-auto px-6">
      <div class="flex h-16 items-center justify-between">
        <router-link to="/" class="flex items-center gap-3">
          <!-- <img src="" class="h-9 w-9" /> -->
          <span class="text-xl font-bold text-blue-700 tracking-tight">ระบบประเมินบุคลากร</span>
        </router-link>

        <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">

          <!-- <template v-if="auth.role === 'personnal'">
            <li>
              <router-link to="/personnal" class="hover:text-blue-700">งานบุคลากร</router-link>
            </li>

            <li>
              <router-link to="/reports" class="hover:text-blue-700">รายงาน</router-link>
            </li>
          </template>

          <template v-if="auth.role === 'evaluator'">
            <li>
              <router-link to="/evaluator" class="hover:text-blue-700">รายการประเมิน</router-link>
            </li>

            <li>
              <router-link to="/reports" class="hover:text-blue-700">รายงาน</router-link>
            </li>
          </template>

          <template v-if="auth.role === 'evaluatee'">
            <li>
              <router-link to="/evaluatee" class="hover:text-blue-700">แบบประเมินของฉัน</router-link>
            </li>

            <li>
              <router-link to="/reports" class="hover:text-blue-700">รายงาน</router-link>
            </li>
          </template> -->
        </ul>

        <!-- <div class="hidden md:flex items-center gap-4">
          <template v-if="!auth.isLogin">
            <router-link to="/login" class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100">Login</router-link>

            <router-link to="/signup" class="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700">Sign Up</router-link>
          </template>

          <template v-else>
            <div class="relative group flex items-center gap-3 cursor-pointer">
              <img :src="avatarUrl" alt="avatar" class="h-9 w-9 rounded-full border object-cover" @error="handleAvatarError" />
              <span class="text-sm font-semibold text-slate-800">{{ auth.user?.username }}</span>
              <ul class="absolute right-0 top-12 w-48 bg-white rounded-x1 shadow-lg opacity-0 invidible group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all">
                <li>
                  <router-link to="/profile" class="block px-4 py-3 hover:bg-slate-100">โปรไฟล์</router-link>
                </li>

                <li class="px-4 py-2 text-xs text-gray-400 border-t">{{ roleName }}</li>

                <li>
                  <button @click="logout" class="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50">ออกจากระบบ</button>
                </li>
              </ul>
            </div>
          </template>
        </div> -->
      </div>
    </nav>
  </header>
</template>

<!-- <script setup>
import { computed } from 'vue';
import { useAuthStore } from "../stores/auth.js";

const auth = useAuthStore();

const avatarUrl = computed(() => {
  if (!auth.user || !auth.user.avatar) {
    return "/uploads/avatar.png";
  }
  return `http://localhost:3000/uploads/${auth.user.avatar}`;
});

const roleName = computed(() => {
  switch (auth.role) {
    case "personnal":
      return "งานบุคลากร";
    
    case "evaluatee":
      return "ผู้รับการประเมิน";

    case "evaluator":
      return "กรรมการ";

    default:
      return "ผู้ใช้งาน";
  }
});

const handleAvatarError = (event) => {
  event.traget.src = "/uploads/avatar.png";
};

const logout = () => {
  auth.logout();
};
</script> -->


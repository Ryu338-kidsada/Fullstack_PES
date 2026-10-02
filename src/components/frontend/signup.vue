<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div class="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg">
            <h1 class="text-center text-gray-500 mb-2">สมัครสมาชิก</h1>
            <p class="text-center text-gray-500 mb-8">เลือกประเภทผู้ใช้งาน</p>

            <div class="grid grid-color-3 gap-3 mb-8">
                <!-- <button v-for="tab in tabs" :key="tab.role" @click="activeTab = tab.role" class="bodder rounded-x1 p-4 text-center transition" :class="activeTab === tab.role ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'">
                    <div class="font-bold">{{ tab.title }}</div>
                    <div class="text-xs mt-1">{{ tab.description }}</div>
                </button> -->
            </div>

            <!-- <form @submit.prevent="signup">
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block mb-2 font-medium">ชื่อ</label>
                        <input v-model="form.fname" type="text" placeholder="ชื่อ" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label class="block mb-2 font-medium">นามสกุล</label>
                        <input v-model="form.lname" type="text" placeholder="นามสกุล" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block mb-2 font-medium">Username</label>
                    <input v-model="form.username" type="text" placeholder="Username" class="w-full border rounded0lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block mb-2 font-medium">Password</label>
                    <input v-model="form.password" type="password" placeholder="Password" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-6">
                    <label class="block mb-2 font-medium">Confirm Password</label>
                    <input v-model="form.confirmPassword" type="password" placeholder="ยืนยัน Password" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div v-if="error" class="bg-red-100 text-red-600 p-3 rounded-lg mb-4">{{ error }}</div>

                <div v-if="success" class="bg-green-100 text-green-600 p-3 rounded-lg mb-4">{{ success }}</div>

                <button type="submit" :disabled="loading" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"> {{ loading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก" }}</button>
            </form> -->

            <div class="text-center mt-6">
                <span class="text-gray-500">มีบัญชีแล้ว?</span>
                <router-link to="/login" class="text-blue-600 font-medium ml-2">เข้าสู่ระบบ</router-link>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref("evaluatee");

const tab = [
    {
        role: "personnal",
        title: "งานบุคลากร",
        description: "เจ้าหน้าที่"
    },
    {
        role: "evaluatee",
        title: "ผู้รับการประเมิน",
        description: "บุคลากร"
    },
    {
        role: "evaluator",
        title: "กรรมการ",
        description: "ผู้ประเมิน"
    }
];

const form = ref({
    fname: "",
    lname: "",
    username: "",
    password: "",
    confirmPassword: ""
});

const error = ref("");
const success = ref("");
const loading = ref(false);

const signup = async () => {
    error.value = "";
    success.value = ""

    if (
        !form.value.fname ||
        !form.value.lname ||
        !form.value.username ||
        !form.value.password ||
        !form.value.confirmPassword
    ) {
        error.value = "กรุณากรอกข้อมูลให้ครบ"
        return;
    }

    if (
        form.value.password !== from.value.confirmPassword
    ) {
        error.value = "Password ไม่ตรงกัน"
        return;
    }

    try {
        loading.value = true;
        await axios.post(
            "http://localhost:3000/signup",
            {
                fname: form.value.fname,
                lname: form.value.lname,
                username: form.value.username,
                password: form.value.password,
                role: activeTab.value
            }
        );

        success.value = "สมัครสมาชิกสำเร็จ"

        form.value = {
            fname: "",
            lname: "",
            username: "",
            password: "",
            confirmPassword: ""
        };

        setTimeout(() => {
            router.push("/login");
        }, 100);
    } catch (err) {
        error.value = err.response?.data?.message || "สมัครสมาชิกไม่สำเร๋็จ"
    } finally {
        loading.value = false;
    }
 };
</script> -->
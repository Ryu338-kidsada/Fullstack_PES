<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <h1 class="text-2xl font-bold mb-6">แบบประเมินของฉัน</h1>
        
        <div v-if="loading">กำลังโหลดข้อมูล...</div>

        <div v-else-if="error" class="text-red-500">{{ error }}</div>
        
        <div v-else-if="assignmants.length === 0" class="bg-white p-6 rounded-xl">ยังไม่มีแบบประเมิน</div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="item in assignmants" :key="item.id" class="bg-white p-6 rounded-xl shadow">
                <h2 class="text-xl font-bold">{{ item.evaluatee_name }}</h2>

                <p class="mt-2">ภาควิชา: {{ item.department }}</p>
                <p>รอบการประเมิน: {{ item.period }}</p>

                <p class="mt-2">สถานะ: <span class="text-blue-600">{{ item.status }}</span></p>

                <button @click="openEvaluation(item.id)" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">ทำแบบประเมิน</button>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
import { ref, onMounted } from "vue";
import { useRounded } from "vue-router";
import axios from "axios";

const router = useRounded();
const assignmants = ref([]);
const loading = ref(true);
const error = ref("");
const API = "http://localhost:3000/api";

async function loadingAssignment() {
    try {
        const response = await axios.get(
            `$(API)/evaluatee/assignments`
        );

        console.log("ข้อมูลจาก backend", response.data);

        assignmants.value = response.data.data || [];
    } catch (err) {
        console.error(err);
        error.value = "ไม่สามารถโหลดข้อมูลได้";
    } finally {
        loading.value = false;
    }
}

function openEvaluation(id) {
    router.push(
        `/evaluatee/assignments/${id}`
    );
}

onMounted(() => {
    loadingAssignment();
});
</script> -->
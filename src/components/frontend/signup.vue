<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div class="bg-white w-full max-w-2x1 p-8 rounded-2x1 shadow-lg">
            <h1 class="text-center text-gray-500 mb-2">สมัครสมาชิก</h1>
            <p class="text-center text-gray-500 mb-8">เลือกประเภทผู้ใช้งาน</p>

            <div class="grid grid-color-3 gap-3 mb-8">
                <button v-for="tab in tabs" :key="tab.role" @click="activeTab = tab.role" class="bodder rounded-x1 p-4 text-center transition" :class="activeTab === tab.role ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'">
                    <div class="font-bold">{{ tab.title }}</div>
                    <div class="text-xs mt-1">{{ tab.description }}</div>
                </button>
            </div>

            <!-- <form @submit.prevent="signup">
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block mb-2 font-medium">ชื่อ</label>
                        <input v-model="form.fname" type="text" placeholder="ชื่อ" class="w-full border rounded-lg px-4 py-3" />
                    </div>

                    <div>
                        <label class="block mb-2 font-medium">นามสกุล</label>
                        <input v-model="form.lname" type="text" placeholder="นามสกุล" class="w-full boder rounded-lg px-4 py-3" />
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block mb-2 font-medium">Username</label>
                    <input v-model="form.username" type="text" placeholder="Username" class="w-full border rounded0lg px-4 py-3" />
                </div>

                <div class="mb-4">
                    <label class="block mb-2 font-medium">Password</label>
                    <input v-model="form.password" type="password" placeholder="Password" class="w-full border rounded-lg px-4 py-3" />
                </div>

                <div class="mb-6">
                    <label class="block mb-2 font-medium">ยืนยันร Password</label>
                    <input v-model="form.confirmPassword" type="password" placeholder="ยืนยัน Password" class="w-full border rounded-lg px-4 py-3" />
                </div>

                <div v-if="error" class="bg-red-100 text-red-600 p-3 rounded-lg mb-4">{{ error }}</div>

                <div v-if="success" class="bg-green-100 text-green-600 p-3 rounded-lg mb-4">{{ success }}</div>

                <button></button>
            </form> -->
        </div>
    </div>
</template>
<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow"
    style="font-family: 'Prompt', sans-serif;">
    <nav class="max-w-7xl mx-auto px-6">
      <div class="flex h-16 items-center justify-between">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
   
          <span class="text-xl font-bold text-blue-700 tracking-tight">
            ระบบประเมินบุคลากร
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">

          <li>
            <router-link to="/" class="hover:text-blue-700">
              หน้าแรก
            </router-link>
          </li>
          <li>
            <router-link to="#" class="hover:text-blue-700">
              รายงาน
            </router-link>
          </li>

          <li>
            <router-link to="#" class="hover:text-blue-700">
              Dashboard
            </router-link>
          </li>
        </ul>

      

         
    </div>
     
    </nav>

   
  </header>
</template>


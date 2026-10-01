import { createRouter, createWebHistory } from "vue-router";

import Main from "../src/components/frontend/main.vue";

const routes = [
    {
        path: '/',
        components: Main
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
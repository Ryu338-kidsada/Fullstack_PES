import { createRouter, createWebHistory } from "vue-router";

import Main from "../src/components/frontend/main.vue";
import Login from "../src/components/frontend/login.vue";
import Signup from "../src/components/frontend/signup.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.onError((error) => {
    console.error('Router navigation error:', error);
});

export default router;

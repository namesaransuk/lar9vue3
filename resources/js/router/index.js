import { createWebHistory, createRouter } from "vue-router";

// Auth
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

import Home from "../pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
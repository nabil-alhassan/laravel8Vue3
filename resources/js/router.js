import { createRouter, createWebHistory } from "vue-router";
import Help from "./pages/Help";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AllPosts from "./pages/AllPosts.vue";
import AddPost from "./pages/AddPost.vue";
import EditPost from "./pages/EditPost.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: AllPosts,
    },
    {
        name: "add",
        path: "/add",
        component: AddPost,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditPost,
    },
    {
        path: "/Help",
        name: "Help",
        component: Help,
        meta: {
            title: "Help",
        },
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "About",
        },
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        meta: {
            title: "Blog",
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: "Contact",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});
export default router;

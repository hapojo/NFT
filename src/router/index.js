import { createWebHistory, createRouter } from "vue-router";
import Fullcontent from "@/views/Fullcontent.vue";
// import About from "@/views/About.vue";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Fullcontent,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/components/Dashboard.vue')
            },
            //   {
            //     path: '/settings/branch',
            //     name: 'branch',
            //     component: () => import('../components/Sidebar/Settings/Branch.vue')
            //   },
            //   {
            //     path: '/feeds',
            //     name: 'feeds',
            //     component: () => import('../components/Sidebar/Feeds.vue')
            //   },
            //   {
            //     path: '/feeds/general',
            //     name: 'feeds',
            //     component: () => import('../components/Sidebar/Feeds/General.vue')
            //   }, {
            //     path: '/feeds/deparment',
            //     name: 'feeds',
            //     component: () => import('../components/Sidebar/Feeds/Department.vue')
            //   },
        ],
        //     path: "/",
        //     name: "dashboard",
        //     component: Fullcontent,
        // },
        // {
        //     path: "/about",
        //     name: "About",
        //     component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
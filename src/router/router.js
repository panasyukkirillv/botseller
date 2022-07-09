import { createRouter, createWebHashHistory } from "vue-router"

import Notifications from '@/pages/Notifications'
import Messages from '@/pages/Messages'
import Catalog from '@/pages/Catalog'
import NewOrders from '@/pages/NewOrders'
import OldOrders from '@/pages/OldOrders'
import Data from '@/pages/Data'
import Settings from '@/pages/Settings'

const routes = [
    {
        path: "/",
        component: Notifications,
    },
    {
        path: "/messages",
        component: Messages,
    },
    {
        path: "/catalog",
        component: Catalog,
        props: true,
    },
    {
        path: "/new-orders",
        component: NewOrders,
    },
    {
        path: "/old-orders",
        component: OldOrders,
    },
    {
        path: "/data",
        component: Data,
    },
    {
        path: "/settings",
        component: Settings,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;
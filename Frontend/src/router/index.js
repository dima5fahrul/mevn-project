import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/create",
      name: "user.create",
      component: () => import("../views/user/Create.vue"),
    },
    {
      path: "/edit/:id",
      name: "user.edit",
      component: () => import("../views/user/Edit.vue"),
    },
    {
      path: "/index",
      name: "user.index",
      component: () => import("../views/user/index.vue"),
    },
    {
      path: "/kos-index",
      name: "kos.index",
      component: () => import("../views/kos/index.vue"),
    },
    {
      path: "/kos-create",
      name: "kos.create",
      component: () => import("../views/kos/create.vue"),
    },
    {
      path: "/kos-edit:id",
      name: "kos.edit",
      component: () => import("../views/kos/edit.vue"),
    },
    {
      path: "/order:id",
      name: "order.order",
      component: () => import("../views/order/order.vue"),
    },
    {
      path: "/checkout:id",
      name: "order.checkout",
      component: () => import("../views/order/checkout.vue"),
    },
    {
      path: "/receipt:id",
      name: "receipt.checkout",
      component: () => import("../views/order/receipt.vue"),
    },
    {
      path: "/receipt-index",
      name: "receipt.index",
      component: () => import("../views/order/index.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/authentication/login.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/authentication/signin.vue"),
    },
  ],
});

export default router;

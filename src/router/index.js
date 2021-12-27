import Vue from "vue";
import VueRouter from "vue-router";
import StakingLimitForLP from "../views/staking/StakingLimitForLP.vue";
import StakingLimitForLPHistory from "../views/staking/StakingLimitForLPHistory.vue";
import StakingLimitForSingle from "../views/staking/StakingLimitForSingle.vue";
import StakingLimitForSingleHistory from "../views/staking/StakingLimitForSingleHistory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/home/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        redirect: "/staking",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "/staking",
        name: "StakingLimitForLP",
        redirect: "/staking/lp/latest",
        component: () => import("@/layouts/home/ViewBlank.vue"),
        children: [
          {
            path: "/staking/lp",
            name: "StakingLimitForLP",
            redirect: "/staking/lp/latest",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/lp/latest",
                name: "StakingLimitForLP",
                component: StakingLimitForLP
              },
              {
                path: "/staking/lp/latest/history",
                name: "StakingLimitForLPHistory",
                component: StakingLimitForLPHistory
              }
            ]
          },
          {
            path: "/staking/single",
            name: "StakingLimitForSingle",
            redirect: "/staking/single/latest",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/single/latest",
                name: "StakingLimitForSingle",
                component: StakingLimitForSingle
              },
              {
                path: "/staking/single/latest/history",
                name: "StakingLimitForSingleHistory",
                component: StakingLimitForSingleHistory
              }
            ]
          }
        ]
      },
      {
        path: "*",
        redirect: "/"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});

export default router;

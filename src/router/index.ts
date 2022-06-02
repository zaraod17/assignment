import { createRouter, createWebHistory } from "vue-router";
import UsersList from "../views/UsersList.vue";
import UserDetail from "../views/UserDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/users" },
    { path: "/users", component: UsersList },
    { path: "/users/:uid", component: UserDetail },
  ],
});

export default router;

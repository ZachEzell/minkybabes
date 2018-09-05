import Vue from "vue";
import Router from "vue-router";
import Navigation from "../components/Navigation.vue";
import Inventory from "../components/InventoryDashboard.vue";
import Customers from "../components/CustomerDashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Navigation",
      component: Navigation
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory
    },
    {
      path: "/customers",
      name: "Customers",
      component: Customers
    }
  ]
});

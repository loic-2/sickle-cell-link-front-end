<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/dashboard" v-if="store.state.role === 'doctor'">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/doctors" v-if="store.state.role === 'patient'">
        <i class="fa-solid fa-user-doctor fa-2xs" style="color: #a5a1a1"></i>
        <p>Doctors</p>
      </sidebar-link>
      <sidebar-link to="/event">
        <md-icon>bubble_chart</md-icon>
        <p>Events</p>
      </sidebar-link>
      <sidebar-link to="/planning" v-if="store.state.role === 'doctor'">
        <md-icon>calendar_today</md-icon>
        <p>My planning</p>
      </sidebar-link>
      <sidebar-link to="/educationnal-information">
        <md-icon>info</md-icon>
        <p>Educational Informations</p>
      </sidebar-link>
      <sidebar-link to="/forum">
        <md-icon>forum</md-icon>
        <p>Forum</p>
      </sidebar-link>
      <sidebar-link to="/conference">
        <i class="fa-solid fa-video fa-2xs" style="color: #ffffff"></i>
        <p>Video Conference</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { store, toastOptions } from "../../data/UserStore";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "red",
      sidebarBackgroundImage: require("@/assets/img/sickle-cell-5.jpg"),
      store,
    };
  },
  mounted() {
    this.$toast("Welcome on Sickle Cell Link", toastOptions);
  },
};
</script>

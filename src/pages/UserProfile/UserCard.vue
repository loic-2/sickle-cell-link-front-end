<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">CEO / Co-Founders</h6>
      <h4 class="card-title">SCL Team</h4>
      <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is...
      </p>
      <md-button class="md-round md-danger" @click="logout"
        ><i
          class="fa-solid fa-arrow-right-from-bracket fa-bounce"
          style="color: #ffffff"
        ></i
        >&nbsp;&nbsp; Log out</md-button
      >
    </md-card-content>
  </md-card>
</template>
<script>
import { store } from "../../data/UserStore";

export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/logo.jpeg"),
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("accessToken");
      store.state.token = "";
      store.commit("setAuthorisation", false);
      this.$router.push({ name: "autenticate" });
    },
  },
};
</script>
<style></style>

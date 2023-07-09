<template>
  <div class="container-fluid">
    <div class="row login-box px-lg-5 align-items-center">
      <div class="logo text-center mt-5 mb-4">
        <md-avatar class="md-large">
          <img :src="require('@/assets/img/logo.jpeg')" alt="People" />
        </md-avatar>
      </div>
      <h3 class="text-center mb-4">Choose your role</h3>
      <div>
        <div class="mt-4 mb-4 text-center">
          <button
            class="btn btn-danger w-100"
            style="height: 50px; border-radius: 15px"
            @click="setChoice('doctor')"
          >
            I'm a Doctor&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-user-doctor"></i>
          </button>
        </div>
        <div class="mb-5 text-center">
          <button
            class="btn btn-danger w-100"
            style="height: 50px; border-radius: 15px"
            @click="setChoice('patient')"
          >
            I'm a patient &nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-head-side-virus"></i>
          </button>
        </div>
        <div class="text-center">
          <span
            >Do you already have an account ?
            <router-link to="/login" style="color: rgb(241, 129, 129)"
              >Sign in</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/UserStore";
export default {
  data() {
    return {};
  },
  methods: {
    setChoice(val) {
      console.log(val);
      store.state.signChoose = val;
      this.$router.push({ name: "Sign up" });
    },
  },
};
</script>

<style>
div input {
  width: 100%;
  border: none;
  border-radius: 13px;
  height: 40px;
  padding-left: 5px;
}
</style>

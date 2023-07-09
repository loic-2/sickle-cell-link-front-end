<template>
  <div class="container-fluid">
    <div class="row login-box px-lg-5 align-items-center">
      <div class="logo text-center mt-2 mb-3">
        <md-avatar class="md-large">
          <img :src="require('@/assets/img/logo.jpeg')" alt="People" />
        </md-avatar>
        <h3 class="text-center mt-3">Sign In</h3>
      </div>
      <div>
        <div class="mb-3">
          <div><label for="login">Email</label></div>
          <input
            type="text"
            name=""
            v-model="login"
            id="login"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <div><label for="password">Password</label></div>
          <input
            type="password"
            name=""
            id="password"
            v-model="password"
            placeholder="Enter your Password"
          />
        </div>
        <div class="mb-3">
          <b-form-checkbox v-model="remember" name="check-button" switch>
            Remember me
          </b-form-checkbox>
        </div>
        <div class="mb-3 text-center">
          <button
            class="btn btn-danger"
            style="height: 40px; border-radius: 10px"
            @click="signIn"
          >
            Sign in
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </button>
        </div>
        <div class="mb-3 text-center">
          <router-link to="/recover-password" style="color: rgb(241, 129, 129)"
            >Forgot Your password</router-link
          >
        </div>
        <div class="text-center">
          <span
            >You don't have an account ?
            <router-link to="/sign-up-choose" style="color: rgb(241, 129, 129)"
              >Sign up</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store, toastOptions } from "../data/UserStore";
import { POSITION } from "vue-toastification";
export default {
  created() {
    this.axiosInst = axios.create({});
    this.toast = useToast();
  },
  data() {
    return {
      axiosInst: null,
      toast: null,
      login: "",
      password: "",
      remember: {
        type: Boolean,
        default: true,
      },
    };
  },
  methods: {
    signIn() {
      this.authenticate();
      if (store.state.authorized) {
        this.$router.push({ name: "Autenticate" });
      }
    },
    authenticate() {
      this.axiosInst
        .post("http://localhost:8082/api/v1/login", {
          email: this.login,
          password: this.password,
        })
        .then((res) => {
          if (res.data.accessToken) {
            localStorage.accessToken = res.data.accessToken;
            store.state.token = res.data.accessToken;
            if (res.data.role === "doctor") {
              store.state.doctorLink = "/api/v1/doctors/" + res.data.id;
            } else {
              store.state.doctorLink = "/api/v1/patients/" + res.data.id;
            }
            store.commit("setRole", res.data.role);
            store.commit("setAuthorisation", true);
          }
        })
        .catch((err) => {
          this.$toast.error("Identifiants incorrects", toastOptions);
          console.log(err);
        });
    },
  },
};
</script>

<style>
div.mb-3 input {
  width: 100%;
  border-radius: 11px !important;
  border: solid 1px rgb(202, 200, 200);
  height: 40px;
  padding-left: 5px;
}
div.login-box {
  padding: 20px !important;
  margin: 0 !important;
}
</style>

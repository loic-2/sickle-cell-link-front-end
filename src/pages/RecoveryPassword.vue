<template>
  <div class="container-fluid">
    <div class="row login-box px-lg-5 align-items-center">
      <div class="logo text-center mt-5 mb-4">
        <md-avatar class="md-large">
          <img :src="require('@/assets/img/logo.jpeg')" alt="People" />
        </md-avatar>
      </div>
      <h3 class="text-center mb-4">Recover your password</h3>
      <div>
        <div class="mb-3">
          <div><label for="login">Email</label></div>
          <input
            type="email"
            name=""
            id="login"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3 text-center">
          <router-link to="/autenticate"
            ><button
              class="btn btn-danger"
              style="height: 40px; border-radius: 10px"
            >
              Recover
              <i class="fa-solid fa-lock-open"></i></button
          ></router-link>
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
export default {};
</script>

<style>
div input {
  width: 100%;
  border: none;
  border-radius: 13px;
  height: 40px;
  padding-left: 5px;
}
div.login-box {
}
</style>

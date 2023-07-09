<template>
  <div class="container-fluid p-0 m-0" style="overflow: hidden; height: 100vh">
    <div
      class="row autenticate m-0 m p-0"
      style="background-color: rgb(224, 181, 179)"
    >
      <div
        class="col-12 col-md-6 col-lg-6 form-interact m-0 p-0 align-self-center"
        style="height: 100vh"
      >
        <div class="row">
          <div class="col-12 p-0 align-self-center" style="height: 80vh">
            <router-view></router-view>
          </div>
          <div class="col" style="height: 20vh">
            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
          </div>
        </div>
      </div>
      <div
        class="row col-0 col-md-6 col-lg-6 banner-sickle-cell text-center m-0 p-0"
      >
        <div
          class="row image m-0"
          :style="`background-image: url('${imagePath}');`"
        >
          <div
            style="font-weight: bold; font-size: 55px; color: white"
            class="message col align-self-center justify-content-center"
          >
            <h3 class="">Welcome to Sickle cell link</h3>
            <h5 class="" style="">
              Let's invest on improving the life of sickle cell patients
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentFooter from "./Layout/ContentFooter.vue";
export default {
  components: { ContentFooter },
  data() {
    return {
      imagePath: require("@/assets/img/sickle-cell-5.jpg"),
    };
  },
};
</script>

<style>
div.autenticate {
  height: 100vh;
  overflow: hidden;
}
div.image {
  background-size: cover;
}
div.form-interact {
  margin: 0 !important;
  padding: 30px 70px 0px 70px !important;
}
@media screen and (max-width: 768px) {
  div.form-interact {
    margin: 0 !important;
    padding: 30px 20px 0px 20px !important;
  }
}
@media screen and (max-width: 480px) {
  div.banner-sickle-cell {
    display: none;
  }
  div.form-interact {
    margin: 0 !important;
    padding: 30px 20px 0px 20px !important;
  }
}
</style>

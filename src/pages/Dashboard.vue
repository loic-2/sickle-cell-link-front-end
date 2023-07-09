<template>
  <div class="container-fluid mb-4">
    <b-row>
      <b-col cols="12" md="6" lg="3">
        <b-card
          class="mb-4"
          style="
            border-radius: 10px;
            border-width: 0px;
            border-left: 3px rgb(0, 153, 255) solid;
          "
        >
          <b-row>
            <b-col cols="12" lg="9" md="9">
              <h4 class="card-title mb-2">70</h4>
              <b-card-text class="mb-1">Total Events</b-card-text>
            </b-col>
            <b-col cols="12" lg="=3" md="3">
              <i
                class="fa-solid fa-handshake fa-2xl"
                style="color: #d6dae1"
              ></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card
          class="mb-4"
          style="
            border-radius: 10px;
            border-width: 0px;
            border-left: 3px rgb(231, 71, 71) solid;
          "
        >
          <b-row>
            <b-col cols="12" lg="9" md="9">
              <h4 class="card-title mb-2">40</h4>
              <b-card-text class="mb-1">Medical Informations</b-card-text>
            </b-col>
            <b-col cols="12" lg="=3" md="3">
              <i
                class="fa-solid fa-circle-info fa-2xl"
                style="color: #d6dae1"
              ></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card
          class="mb-4"
          style="
            border-radius: 10px;
            border-width: 0px;
            border-left: 3px rgb(61, 233, 104) solid;
          "
        >
          <b-row>
            <b-col cols="12" lg="9" md="9">
              <h4 class="card-title mb-2">40</h4>
              <b-card-text class="mb-1">Icoming Events</b-card-text>
            </b-col>
            <b-col cols="12" lg="=3" md="3">
              <i
                class="fa-solid fa-handshake fa-2xl"
                style="color: #d6dae1"
              ></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card
          class="mb-4"
          style="
            border-radius: 10px;
            border-width: 0px;
            border-left: 3px rgb(245, 242, 69) solid;
          "
        >
          <b-row>
            <b-col cols="12" lg="9" md="9">
              <h4 class="card-title mb-2">30</h4>
              <b-card-text class="mb-1">Planning views</b-card-text>
            </b-col>
            <b-col cols="12" lg="=3" md="3">
              <i
                class="fa-regular fa-calendar-days fa-2xl"
                style="color: #d6dae1"
              ></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <div class="col-12 col-md-8 col-lg-8 m-0 p-0 px-3">
        <div class="row m-0">
          <div
            class="embed-responsive embed-responsive-16by9"
            style="border-radius: 15px"
          >
            <iframe
              width="560"
              height="315"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/yCOvkOCaaSk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4 m-0 p-0 px-3 text-end">
        <b-calendar v-model="currentDate" locale="en-US"></b-calendar>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style>
.icon {
  height: 150px;
}
</style>

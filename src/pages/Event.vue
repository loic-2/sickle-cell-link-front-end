<template>
  <div>
    <div class="row">
      <div class="col-8 col-md-7 col-lg-6">
        <b-button
          id="show-btn"
          v-if="store.state.role === 'doctor'"
          style="background-color: red; border-width: 0px"
          class="mb-3"
          @click="showModalEvent"
          >Add a new event</b-button
        >
      </div>
      <div class="col-4 col-md-5 col-lg-6 text-end">
        <b-button-group class="mb-2">
          <b-button style="background-color: red; border-color: red"
            >Up Coming</b-button
          >
          <b-button
            style="
              background-color: red;
              border-color: red;
              border-left: solid 1px white;
            "
            >All</b-button
          >
        </b-button-group>
      </div>
    </div>
    <b-row>
      <b-col
        cols="12"
        lg="6"
        class="d-flex align-items-stretch"
        @mouseover="showBtns(number)"
        v-for="(item, index) in events"
        :key="index"
      >
        <b-card
          :img-src="image"
          img-alt="Card image"
          img-left
          class="mb-4 flex-column flex-md-row card-b"
          :title="item.title"
          style="border-radius: 10px; border-width: 0px"
        >
          <b-card-text>
            <div class="mb-4">
              {{ item.description }}
            </div>
            <div class="row text-right px-3">
              <strong
                style="background-color: red; color: white; width: fit-content"
                >{{ item.startDate }}</strong
              >
            </div>
            <b-button
              variant="outline-danger"
              class="mt-3 mr-4"
              style="border-color: red"
              >More About</b-button
            >
            <b-button
              variant="outline-primary"
              class="mt-3 mr-2"
              @click="updateEvent(item)"
              style="border-color: #1656c5"
              v-if="show === number && store.state.role === 'doctor'"
              ><i class="fa-solid fa-pen fa-beat" style="color: #1656c5"></i
            ></b-button>
            <b-button
              variant="outline-danger"
              class="mt-3"
              style="border-color: red"
              v-if="show === number && store.state.role === 'doctor'"
              @click="showModal(item.id)"
              ><i class="fa-solid fa-trash fa-beat" style="color: #e50b21"></i
            ></b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      ref="my-modal"
      hide-footer
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <template #modal-header="{ close }">
        <p style="font-size: large"><b>Attention</b></p>
        <i
          class="fa-solid fa-xmark"
          style="color: #ffffff"
          @click="close()"
        ></i>
      </template>
      <div class="d-block text-center">
        <h5>Do you want to delete this event ?</h5>
      </div>
      <div class="text-center">
        <b-button class="mr-3" variant="outline-secondary" @click="hideModal"
          >Cancel</b-button
        >
        <b-button class="" variant="outline-danger" @click="deleteEvent"
          >Delete</b-button
        >
      </div>
    </b-modal>

    <b-modal
      ref="my-modal-event"
      hide-footer
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <template #modal-header="{ close }">
        <p style="font-size: large">
          <b>{{ displayText }} event</b>
        </p>
        <i
          class="fa-solid fa-xmark"
          style="color: #ffffff"
          @click="close()"
        ></i>
      </template>
      <div class="d-block text-center">
        <div class="">
          <div class="md-size-100 md-size-33">
            <md-field>
              <label>Title</label>
              <md-input v-model="event.title"></md-input>
            </md-field>
          </div>
          <div class="">
            <md-field>
              <label>Date</label>
              <md-input
                v-model="event.startDate"
                @focus="showPickDate = true"
              ></md-input>
            </md-field>
            <transition name="calendar-fade">
              <date-picker
                @close="showPickDate = false"
                v-if="showPickDate"
                color="red"
                v-model="event.startDate"
              ></date-picker>
            </transition>
          </div>
          <div class="md-size-100">
            <md-field maxlength="5">
              <label>Description</label>
              <md-textarea v-model="event.description"></md-textarea>
            </md-field>
          </div>
        </div>
      </div>
      <div class="text-center">
        <b-button
          class="mr-3"
          variant="outline-secondary"
          @click="hideModalEvent"
          >Cancel</b-button
        >
        <b-button
          class=""
          variant="outline-danger"
          @click="addEvent(operationType)"
          >Save</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { store, toastOptions, getHeaders } from "../data/UserStore";
import DatePicker from "vue-md-date-picker";
export default {
  name: "CardImgPosition",

  data: () => ({
    store,
    id: null,
    minDate: new Date(),
    showPickDate: false,
    image: require("@/assets/img/sickle-cell-3.jpeg"),
    show: null,
    operationType: "save",
    displayText: "Add an",
    event: {
      title: "",
      description: "",
      startDate: null,
      doctor: store.state.doctorLink,
    },
    events: [],
    numbers: Array.from({ length: 10 }, (_, index) => index + 1),
  }),
  components: {
    DatePicker,
  },
  methods: {
    showModal(id) {
      this.id = id;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    showModalEvent() {
      this.displayText = "Add an";
      this.operationType = "save";
      this.event.title = "";
      this.event.description = "";
      this.event.startDate = "";
      this.$refs["my-modal-event"].show();
    },
    hideModalEvent() {
      this.$refs["my-modal-event"].hide();
    },
    showBtns(id) {
      this.show = id;
    },
    hideBtns(id) {
      this.show = null;
    },
    addEvent(operation) {
      if (operation === "save") {
        this.saveEvent();
      } else {
        this.updateEventFromApi(this.id);
      }
      this.hideModalEvent();
    },
    deleteEvent() {
      axios
        .delete("http://localhost:8082/api/v1/events/" + this.id, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Successfully deleted", toastOptions);
          this.getEventFromApi();
          this.hideModal();
        })
        .catch((err) => {
          this.$toast.error(
            "Une erreur est survenue, veillez reesayer",
            toastOptions
          );
        });
    },
    updateEvent(item) {
      this.displayText = "Update the";
      this.operationType = "update";
      this.event.title = item.title;
      this.event.description = item.description;
      this.event.startDate = item.startDate;
      this.id = item.id;
      this.$refs["my-modal-event"].show();
    },
    getEventFromApi() {
      axios
        .get("http://localhost:8082/api/v1/events", {
          headers: getHeaders(store.state.token),
        })
        .then((res) => (this.events = res.data._embedded.events))
        .catch((err) => {
          this.$toast.error(
            "Une erreur est survenue, veillez reesayer",
            toastOptions
          );
        });
    },
    saveEvent() {
      axios
        .post("http://localhost:8082/api/v1/events", this.event, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Succesfully created", toastOptions);
          this.getEventFromApi();
        })
        .catch((err) => {
          this.$toast.error(
            "Une erreur est survenue, veillez reesayer",
            toastOptions
          );
        });
    },
    updateEventFromApi(id) {
      axios
        .put("http://localhost:8082/api/v1/events/" + id, this.event, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Succesfully modified", toastOptions);
          this.getEventFromApi();
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(
            "Une erreur est survenue, veillez reesayer",
            toastOptions
          );
        });
    },
  },
  mounted() {
    this.getEventFromApi();
  },
};
</script>
<style scoped>
.card-b {
  background-color: white;
}
.md-datepicker-calendar-pane {
  z-index: 1200;
}
.card-title {
  font-size: 20px;
}
</style>

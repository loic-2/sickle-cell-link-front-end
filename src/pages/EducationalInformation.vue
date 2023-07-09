<template>
  <div class="container-fluid mb-5">
    <b-button
      id="show-btn"
      v-if="store.state.role === 'doctor'"
      style="background-color: red; border-width: 0px"
      class="mb-2"
      @click="showModal"
      >Add an Information</b-button
    >
    <b-media
      class="mt-2"
      tag="li"
      v-for="(information, index) in informations"
      :key="index"
      style="background-color: white; padding: 10px; border-radius: 15px"
    >
      <template #aside>
        <b-img
          rounded
          blank
          :blank-color="information.pertinence"
          width="64"
          alt="placeholder"
        ></b-img>
      </template>
      <div class="row">
        <div class="col">
          <h5 class="mt-0 mb-1">{{ information.title }}</h5>
        </div>
        <div class="col-4 text-right">
          <span style="font-size: 9px">{{
            formatDate(information.created_at)
          }}</span>
        </div>
      </div>
      <div class="row">
        <p class="mb-0">
          {{ information.description }}
        </p>
      </div>
      <div class="row text-right">
        <span style="font-size: 12px">by Dr. {{ information.author }}</span>
      </div>
      <div class="row mt-2">
        <div class="col-8 col-md-4 col-lg-3 col-xl-2">
          <b-button variant="outline-danger" class="btn">More about</b-button>
        </div>
        <div
          class="col-md-2 col-4 mx-0 px-0 text-left"
          v-if="store.state.role === 'doctor'"
        >
          <b-button
            variant="outline-primary"
            class="mr-1 mr-sm-2"
            @click="update(information)"
            style="border-color: #1656c5"
            v-if="show === number"
            ><i class="fa-solid fa-pen fa-beat" style="color: #1656c5"></i
          ></b-button>
          <b-button
            variant="outline-danger"
            class=""
            style="border-color: red"
            v-if="show === number"
            @click="showModalEvent(information.id)"
            ><i class="fa-solid fa-trash fa-beat" style="color: #e50b21"></i
          ></b-button>
        </div>
      </div>
    </b-media>
    <b-modal
      ref="my-modal-information"
      hide-footer
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <template #modal-header="{ close }">
        <p style="font-size: large">
          <b>{{ displayText }} information</b>
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
              <md-input v-model="information.title"></md-input>
            </md-field>
          </div>
          <div class="md-size-100">
            <md-field maxlength="5">
              <label>Decsription</label>
              <md-textarea v-model="information.description"></md-textarea>
            </md-field>
          </div>
          <div class="md-size-10">
            <md-field>
              <label>External Ressources (Link)</label>
              <md-input v-model="information.link"></md-input>
            </md-field>
          </div>
          <div class="md-size-10">
            <md-field>
              <label>Document</label>
              <md-file v-model="information.document" />
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
          @click="addInfo(operationType)"
          >Save</b-button
        >
      </div>
    </b-modal>
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
        <h5>Do you want to delete this informations ?</h5>
      </div>
      <div class="text-center">
        <b-button class="mr-3" variant="outline-secondary" @click="hideModal"
          >Cancel</b-button
        >
        <b-button class="" variant="outline-danger" @click="deleteInformation"
          >Delete</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { getHeaders, store, toastOptions } from "../data/UserStore";

export default {
  data() {
    return {
      store,
      id: null,
      informations: [],
      information: {
        title: "",
        description: "",
        link: "",
        document: "",
        doctor: store.state.doctorLink,
      },
      operationType: "",
      displayText: "Add an",
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    showModal() {
      this.operationType = "save";
      this.displayText = "Add an";
      this.information.description = "";
      this.information.title = "";
      this.information.link = "";
      this.information.document = null;
      this.$refs["my-modal-information"].show();
    },
    hideModalEvent() {
      this.$refs["my-modal-information"].hide();
    },
    showModalEvent(id) {
      this.id = id;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    update(item) {
      this.operationType = "update";
      this.displayText = "Update the";
      this.information.description = item.description;
      this.information.title = item.title;
      this.information.link = item.link;
      this.information.document = item.document;
      this.id = item.id;
      this.$refs["my-modal-information"].show();
    },
    addInfo(type) {
      if (type === "save") {
        this.saveInformation();
      } else {
        this.updateInformation();
      }
      this.hideModalEvent();
    },
    saveInformation() {
      axios
        .post(
          "http://localhost:8082/api/v1/eduInformations",
          this.information,
          {
            headers: getHeaders(store.state.token),
          }
        )
        .then((res) => {
          this.$toast.success("Successfully created", toastOptions);
          this.getInformations();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when creating information, retry",
            toastOptions
          );
        });
    },
    updateInformation() {
      axios
        .put(
          "http://localhost:8082/api/v1/eduInformations/" + this.id,
          this.information,
          {
            headers: getHeaders(store.state.token),
          }
        )
        .then((res) => {
          this.$toast.success("Successfully modified", toastOptions);
          this.getInformations();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when modifiying information, retry",
            toastOptions
          );
        });
    },
    deleteInformation() {
      axios
        .delete("http://localhost:8082/api/v1/eduInformations/" + this.id, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Successfully deleted", toastOptions);
          this.hideModal();
          this.getInformations();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when deleting information, retry",
            toastOptions
          );
        });
    },
    getInformations() {
      axios
        .get("http://localhost:8082/api/v1/eduInformations", {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.informations = res.data._embedded.eduInformations;
        })
        .catch((err) => {
          this.$toast("Error when fecthing informations", toastOptions);
        });
    },
  },
  mounted() {
    this.getInformations();
  },
};
</script>

<style></style>

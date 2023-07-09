<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div
            class="md-layout-item md-small-size-100 md-size-33"
            v-if="store.state.role === 'doctor'"
          >
            <md-field>
              <label>Hospital</label>
              <md-input v-model="person.hospital"></md-input>
            </md-field>
          </div>
          <div
            class="md-layout-item md-small-size-100"
            :class="store.state.role === 'doctor' ? 'md-size-33' : 'md-size-50'"
          >
            <md-field>
              <label>User Name</label>
              <md-input v-model="person.login" type="text"></md-input>
            </md-field>
          </div>
          <div
            class="md-layout-item md-small-size-100"
            :class="store.state.role === 'doctor' ? 'md-size-33' : 'md-size-50'"
          >
            <md-field>
              <label>Email Address</label>
              <md-input v-model="person.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="person.firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="person.lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="person.address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>ID Card Number</label>
              <md-input v-model="person.idNumber" type="text"></md-input>
            </md-field>
          </div>
          <div
            class="md-layout-item md-small-size-100 md-size-33"
            v-if="store.state.role === 'doctor'"
          >
            <md-field>
              <label>Matricule</label>
              <md-input v-model="person.matricule" type="text"></md-input>
            </md-field>
          </div>
          <div
            class="md-layout-item md-small-size-100"
            :class="store.state.role === 'doctor' ? 'md-size-33' : 'md-size-50'"
          >
            <md-field>
              <label>Phone number</label>
              <md-input v-model="person.phone" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="person.aboutMe"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-danger" @click="setUserDetails()"
              >Update Profile</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
import { getHeaders, store, toastOptions } from "../../data/UserStore";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      store,
      person: {
        login: null,
        hospital: null,
        email: null,
        lastname: null,
        firstname: null,
        address: null,
        idNumber: null,
        matricule: null,
        phone: null,
        aboutMe: "",
      },
    };
  },
  methods: {
    getUserDetails() {
      axios
        .get("http://localhost:8082" + store.state.doctorLink, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.person = res.data;
        });
    },
    setUserDetails() {
      axios
        .put("http://localhost:8082" + store.state.doctorLink, this.person, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Successfully Modified", toastOptions);
          this.getUserDetails();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when updating your informations, retry",
            toastOptions
          );
        });
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>
<style></style>

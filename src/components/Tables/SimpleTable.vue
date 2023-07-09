<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="firstname"
          ><md-avatar> <img :src="avatar" alt="Avatar" /> </md-avatar
          >&nbsp;&nbsp;&nbsp;{{ item.firstname + " " + item.lastname }}
        </md-table-cell>
        <md-table-cell md-label="Type">{{ item.doctorType }}</md-table-cell>
        <md-table-cell md-label="Permanent Hospital">{{
          item.hospital
        }}</md-table-cell>
        <md-table-cell md-label="Phone Number">{{ item.phone }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { getHeaders, store, toastOptions } from "../../data/UserStore";
export default {
  firstname: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      avatar: require("@/assets/img/faces/marc.jpg"),
      selected: [],
      users: [],
    };
  },
  methods: {
    getDoctors() {
      axios
        .get("http://localhost:8082/api/v1/doctors", {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.users = res.data._embedded.doctors;
        })
        .catch((err) => {
          this.$toast("Error when fetching doctors", toastOptions);
        });
    },
  },
  mounted() {
    this.getDoctors();
  },
};
</script>

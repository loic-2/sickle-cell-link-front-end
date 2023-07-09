<template>
  <div class="container-fluid">
    <FullCalendar :options="calendarOptions" style="color: red" />
    <b-modal
      ref="my-modal"
      hide-footer
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <template #modal-header="{ close }">
        <p style="font-size: large">
          <b>{{ firstWord }} period</b>
        </p>
        <i
          class="fa-solid fa-xmark"
          style="color: #ffffff"
          @click="close()"
        ></i>
      </template>
      <div class="d-block text-center">
        <div class="md-size-100 md-size-33">
          <md-field>
            <label>Title</label>
            <md-input v-model="planing.title"></md-input>
          </md-field>
        </div>
        <div class="text-left">
          <md-field>
            <label style="font-size: 11px; color: gray">Begin date</label>
            <md-input
              v-model="planing.start"
              @focus="showPickStartDate = true"
            ></md-input>
          </md-field>
          <transition name="calendar-fade">
            <date-picker
              @close="showPickStartDate = false"
              v-if="showPickStartDate"
              color="red"
              v-model="planing.start"
            ></date-picker>
          </transition>
        </div>
        <div class="text-left">
          <md-field>
            <label style="font-size: 11px; color: gray">End date</label>
            <md-input
              v-model="planing.end"
              @focus="showPickEndDate = true"
            ></md-input>
          </md-field>
          <transition name="calendar-fade">
            <date-picker
              @close="showPickEndDate = false"
              v-if="showPickEndDate"
              color="red"
              v-model="planing.end"
            ></date-picker>
          </transition>
        </div>
      </div>
      <div class="text-center">
        <b-button class="mr-3" variant="outline-secondary" @click="hideModal"
          >Cancel</b-button
        >
        <b-button class="" variant="outline-danger" @click="save()"
          >Save</b-button
        >
      </div>
    </b-modal>
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "vue-md-date-picker";
import { getHeaders, store, toastOptions } from "../data/UserStore";
import axios from "axios";
export default {
  components: {
    FullCalendar,
    DatePicker,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        },
        dateClick: this.showModal,
        eventClick: this.showEvent,
        selectable: true,
        themeSystem: "bootstrap5",
        events: [],
      },
      type: "",
      id: "",
      firstWord: "Add a new",
      planing: {
        end: "",
        start: "",
        title: "",
        color: "",
        hospital: "",
        doctor: store.state.doctorLink,
      },
      showPickStartDate: false,
      showPickEndDate: false,
    };
  },
  methods: {
    showAddAvailibility(arg) {},
    showModal(arg) {
      if (new Date() <= new Date(arg.dateStr)) {
        this.firstWord = "Add a new";
        this.planing.start = arg.dateStr;
        this.planing.title = "";
        this.type = "save";
        this.planing.endDate = "";
        this.$refs["my-modal"].show();
      }
    },
    showEvent(arg) {
      this.firstWord = "Update the";
      this.type = "update";
      this.id = arg.event.id;
      this.planing.start = arg.event.start;
      this.planing.title = arg.event.title;
      this.planing.end = arg.event.end;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    save() {
      if (this.type === "save") {
        this.savePlanning();
      } else {
        this.updatePlanning();
      }
      this.hideModal();
    },
    getPlannings() {
      axios
        .get("http://localhost:8082/api/v1/plannings", {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.calendarOptions.events = res.data._embedded.plannings;
        })
        .catch((err) => {});
    },
    savePlanning() {
      axios
        .post("http://localhost:8082/api/v1/plannings", this.planing, {
          headers: getHeaders(store.state.token),
        })
        .then((res) => {
          this.$toast.success("Successfully created", toastOptions);
          this.getPlannings();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when creating planning, retry",
            toastOptions
          );
        });
    },
    updatePlanning() {
      axios
        .put(
          "http://localhost:8082/api/v1/plannings/" + this.id,
          this.planing,
          {
            headers: getHeaders(store.state.token),
          }
        )
        .then((res) => {
          this.$toast.success("Successfully updated", toastOptions);
          this.getPlannings();
        })
        .catch((err) => {
          this.$toast.error(
            "Error when updating planning, retry",
            toastOptions
          );
        });
    },
  },
  mounted() {
    this.getPlannings();
  },
};
</script>
<style>
th div.fc-scrollgrid-sync-inner {
  background-color: rgb(221, 13, 41);
}
th div.fc-scrollgrid-sync-inner a.fc-col-header-cell-cushion {
  color: white;
  text-decoration-line: none;
  font-weight: normal;
}
.fc-h-event .fc-event-main {
  cursor: pointer;
}
</style>

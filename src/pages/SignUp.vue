<template>
  <div class="container-fluid">
    <div class="row login-box px-lg-3 align-items-center">
      <div class="logo text-center mt-2 mt-md-1 mb-2 mb-md-1">
        <md-avatar class="md-large">
          <img :src="require('@/assets/img/logo.jpeg')" alt="People" />
        </md-avatar>
      </div>
      <h3 class="text-center mb-4 mb-md-2 md-md-2">Sign Up</h3>
      <div>
        <div class="mb-3 mb-md-2">
          <div class="row">
            <div class="col p-0">
              <div class="row m-0">
                <div class="col-2 p-sm-0 m-0 align-self-center text-center">
                  <span :class="level >= 1 ? 'level' : 'no-level'">1</span>
                </div>
                <div class="col p-sm-0 align-self-center">
                  <hr :class="level >= 2 ? 'line' : 'no-line'" />
                </div>
              </div>
            </div>
            <div class="col p-0">
              <div class="row m-0">
                <div class="col-2 p-sm-0 m-0 align-self-center text-center">
                  <span :class="level >= 2 ? 'level' : 'no-level'">2</span>
                </div>
                <div class="col p-sm-0 align-self-center">
                  <hr :class="level >= 3 ? 'line' : 'no-line'" />
                </div>
              </div>
            </div>
            <div
              class="col p-0"
              :class="
                isDoctor ? 'col' : 'col-2 col-md-1 pl-md-2 align-self-center'
              "
            >
              <div class="row m-0">
                <div class="col-2 p-sm-0 m-0 align-self-center text-center">
                  <span :class="level >= 3 ? 'level' : 'no-level'">3</span>
                </div>
                <div class="col p-sm-0 align-self-center" v-if="isDoctor">
                  <hr :class="level >= 4 ? 'line' : 'no-line'" />
                </div>
              </div>
            </div>
            <div class="col-1 align-self-center p-0" v-if="isDoctor">
              <div class="row m-0">
                <div class="col p-sm-0 m-0 text-center">
                  <span :class="level >= 4 ? 'level' : 'no-level'">4</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row form1 mt-2" v-if="level == 1">
            <div class="mb-3 mb-md-2">
              <div>
                <label for="firstname"
                  >Firstname <span style="color: red">*</span></label
                >
              </div>
              <input
                type="text"
                name=""
                v-model="firstname"
                id="firstname"
                placeholder="Enter your Firstname"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="lastname"
                  >LastName <span style="color: red">*</span></label
                >
              </div>
              <input
                type="text"
                name=""
                v-model="lastname"
                id="lastname"
                placeholder="Enter your Lastname"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="idnumber"
                  >ID Number <span style="color: red">*</span></label
                >
              </div>
              <input
                type="text"
                name=""
                v-model="idNumber"
                id="idnumber"
                placeholder="Enter your ID number"
              />
            </div>
            <div class="text-right">
              <button
                class="btn btn-danger"
                @click="gotoNext"
                style="height: 40px; border-radius: 10px"
              >
                Next&nbsp;&nbsp;
                <i class="fa-solid fa-forward"></i>
              </button>
            </div>
          </div>
          <div class="row form2 mt-2" v-if="level == 2">
            <div class="mb-3 mb-md-2">
              <div>
                <label for="email"
                  >Email <span style="color: red">*</span></label
                >
              </div>
              <input
                type="email"
                name=""
                v-model="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="phone"
                  >Phone <span style="color: red">*</span></label
                >
              </div>
              <input
                type="number"
                name=""
                v-model="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div><label for="address">Address</label></div>
              <input
                type="text"
                v-model="address"
                name=""
                id="address"
                placeholder="Enter your Adress"
              />
            </div>
            <div class="row m-0 mt-1">
              <div class="col p-0">
                <button
                  class="btn btn-danger"
                  @click="back"
                  style="height: 40px; border-radius: 10px"
                >
                  <i class="fa-solid fa-forward fa-rotate-180"></i
                  >&nbsp;&nbsp;Prev
                </button>
              </div>
              <div class="col text-right p-0">
                <button
                  class="btn btn-danger"
                  @click="gotoNext"
                  style="height: 40px; border-radius: 10px"
                >
                  Next&nbsp;&nbsp;
                  <i class="fa-solid fa-forward"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="row form3 mt-2" v-if="level == 3">
            <div class="mb-3 mb-md-2">
              <div>
                <label for="matricule"
                  >Matricule <span style="color: red">*</span></label
                >
              </div>
              <input
                type="text"
                name=""
                v-model="matricule"
                id="matricule"
                placeholder="Enter your Matricule"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="hospital"
                  >Permanent Hospital Name <span style="color: red">*</span>
                </label>
              </div>
              <input
                type="text"
                name=""
                v-model="hospital"
                id="hospital"
                placeholder="Enter your Hospital name"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="specialitie">Are you a Hematologist ?</label>
              </div>
              <select
                class="form-select form-select-md"
                aria-label=".form-select-md"
                v-model="doctorType"
                style="border-radius: 11px"
              >
                <option value="Specialist">Yes</option>
                <option value="Generalist">No</option>
              </select>
            </div>
            <div class="row m-0 mt-1">
              <div class="col p-0">
                <button
                  class="btn btn-danger"
                  @click="back"
                  style="height: 40px; border-radius: 10px"
                >
                  <i class="fa-solid fa-forward fa-rotate-180"></i
                  >&nbsp;&nbsp;Prev
                </button>
              </div>
              <div class="col text-right p-0">
                <button
                  class="btn btn-danger"
                  @click="gotoNext"
                  style="height: 40px; border-radius: 10px"
                >
                  Next&nbsp;&nbsp;
                  <i class="fa-solid fa-forward"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="row form1 mt-2" v-if="level == 4">
            <div class="mb-3 mb-md-2">
              <div>
                <label for="login"
                  >Login <span style="color: red">*</span></label
                >
              </div>
              <input
                type="text"
                name=""
                id="login"
                v-model="login"
                placeholder="Enter your Login name"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="password"
                  >Password <span style="color: red">*</span></label
                >
              </div>
              <input
                type="password"
                name=""
                v-model="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="mb-3 mb-md-2">
              <div>
                <label for="passwordconfirmation"
                  >Confirm Password <span style="color: red">*</span></label
                >
              </div>
              <input
                type="password"
                name=""
                v-model="confirmPassword"
                id="passwordconfirmation"
                placeholder="Enter your password"
              />
            </div>
            <div class="row m-0 mt-1">
              <div class="col p-0">
                <button
                  class="btn btn-danger"
                  @click="back"
                  style="height: 40px; border-radius: 10px"
                >
                  <i class="fa-solid fa-forward fa-rotate-180"></i
                  >&nbsp;&nbsp;Prev
                </button>
              </div>
              <div class="col text-right p-0">
                <button
                  class="btn btn-danger"
                  @click="register"
                  style="height: 40px; border-radius: 10px"
                >
                  Done&nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </button>
              </div>
            </div>
          </div>
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
import axios from "axios";
import { store, toastOptions } from "../data/UserStore";
export default {
  data() {
    return {
      isDoctor: false,
      level: 1,
      registerSucces: false,
      login: "",
      firstname: "",
      lastname: "",
      idNumber: "",
      email: "",
      phone: "",
      address: "",
      matricule: "",
      hospital: "",
      password: "",
      confirmPassword: "",
      doctorType: "",
    };
  },
  methods: {
    back() {
      if (this.level == 4 && !this.isDoctor) {
        this.level -= 2;
      } else {
        this.level -= 1;
      }
    },
    gotoNext() {
      this.controlData();
      if (this.registerSucces) {
        if (this.level == 2 && !this.isDoctor) {
          this.level += 2;
        } else {
          this.level += 1;
        }
      }
      this.registerSucces = false;
    },
    register() {
      this.controlData();
      if (this.registerSucces) {
        if (store.state.signChoose === "doctor") {
          this.registerUser();
        } else {
          this.registerUserPatient();
        }
      }
    },
    controlData() {
      switch (this.level) {
        case 1:
          if (
            this.firstname == "" ||
            this.lastname == "" ||
            this.idNumber == ""
          ) {
            this.registerSucces = false;
          } else {
            this.registerSucces = true;
          }
          break;
        case 2:
          if (this.email == "" || this.address == "" || this.phone == "") {
            this.registerSucces = false;
          } else {
            this.registerSucces = true;
          }
          break;
        case 3:
          if (
            this.matricule == "" ||
            this.hospital == "" ||
            this.doctorType == ""
          ) {
            this.registerSucces = false;
          } else {
            this.registerSucces = true;
          }
          break;
        case 4:
          if (
            this.login == "" ||
            this.password == "" ||
            this.confirmPassword == "" ||
            this.password != this.confirmPassword
          ) {
            this.registerSucces = false;
          } else {
            this.registerSucces = true;
          }
          break;
        default:
          break;
      }
    },
    registerUser() {
      axios
        .post("http://localhost:8082/api/v1/register", {
          login: this.login,
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          phone: this.phone,
          matricule: this.matricule,
          idNumber: this.idNumber,
          password: this.password,
          email: this.email,
          doctorType: this.doctorType,
          hospital: this.hospital,
          subscription: "Premium",
          role: "First Class",
        })
        .then((res) => {
          this.$toast.success("Successfully registered", toastOptions);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          this.$toast.error(
            "Error when register your informations, retry",
            toastOptions
          );
          console.log(err);
        });
    },
    registerUserPatient() {
      axios
        .post("http://localhost:8082/api/v1/register", {
          login: this.login,
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          phone: this.phone,
          idNumber: this.idNumber,
          password: this.password,
          email: this.email,
          hospital: this.hospital,
          subscription: "Premium",
          role: "First Class",
        })
        .then((res) => {
          this.$toast.success("Successfully registered", toastOptions);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          this.$toast.error(
            "Error when register your informations, retry",
            toastOptions
          );
          console.log(err);
        });
    },
  },
  mounted() {
    if (store.state.signChoose == "doctor") {
      this.isDoctor = true;
    } else {
      this.isDoctor = false;
    }
    console.log(this.isDoctor);
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
div.login-box {
  background-color: white;
  border-radius: 20px;
}
div .line {
  border: 0;
  border-top: solid 1px rgb(243, 61, 85);
  color: rgb(243, 61, 85);
}
div .no-line {
  border: 0;
  border-top: solid 1px gray;
  color: rgb(192, 188, 188);
}
div .level {
  background-color: rgb(235, 68, 90);
  color: white;
  padding: 2px 5px 2px 5px;
  font-size: smaller;
  font-weight: bold;
  border-radius: 800px;
}
div .no-level {
  background-color: rgb(192, 188, 188);
  color: rgb(85, 84, 84);
  padding: 2px 5px 2px 5px;
  font-size: smaller;
  font-weight: bold;
  border-radius: 800px;
}
input {
  width: 100%;
  border: solid 1px darkgray;
  border-radius: 13px;
  height: 40px;
  padding-left: 5px;
}
</style>

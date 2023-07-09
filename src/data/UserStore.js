/* eslint-disable prettier/prettier */
import {
    createStore
} from "vuex";
import Vuex from 'vuex'
import Vue from "vue";
import User from "./User";

Vue.use(Vuex);


export function getHeaders(val) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + val,
    };
    return headers;
}

export const toastOptions = {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false
}

//
export const store = new Vuex.Store({
    state: {
        user: User,
        doctorLink: "/api/v1/doctors/",
        token: "",
        signChoose: null,
        server_adress: "",
        authorized: false,
        role: ""
    },
    mutations: {
        modifyUser(state, user) {
            state.user.setUser(user);
        },
        setChoice(state, value) {
            state.signChoose = value;
        },
        setAuthorisation(state, value) {
            state.authorized = value;
        },
        setRole(state, value) {
            state.role = value;
        },
        setToken(state, value) {
            state.token = value;
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getSignUpChoose(state) {
            return state.signChoose;
        },
        getServerAddress(state) {
            return state.server_adress;
        },
        getAuthorized(state) {
            return state.authorized;
        },
        getRole(state) {
            return state.role;
        }
    },
});
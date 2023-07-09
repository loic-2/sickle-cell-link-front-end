/* eslint-disable prettier/prettier */
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Planning from "@/pages/Planning.vue";
import Login from "@/pages/Login.vue";
import Autenticate from "@/pages/Autenticate.vue";
import Forum from "@/pages/Forum.vue";
import Event from "@/pages/Event.vue";
import Doctor from "@/pages/Doctor.vue";
import SignUp from "@/pages/SignUp.vue";
import SignUpChoose from "@/pages/SignUpChoose.vue";
import RecoveryPassword from "@/pages/RecoveryPassword.vue"
import EducationalInformation from "@/pages/EducationalInformation.vue";
import {
    store
} from "../data/UserStore";

const routes = [{
        path: "/autenticate",
        component: DashboardLayout,
        name: 'Autenticate',
        redirect: store.state.role === "doctor" ? "/dashboard" : "/doctors",
        children: [{
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/user",
                name: "User Profile",
                component: UserProfile,
            },
            {
                path: "/table",
                name: "Table List",
                component: TableList,
            },
            {
                path: "/planning",
                name: "Planning",
                component: Planning,
            },
            {
                path: "/forum",
                name: "Forum",
                meta: {
                    hideFooter: true,
                },
                component: Forum,
            },
            {
                path: "/event",
                name: "Event",
                component: Event,
            },
            {
                path: "/doctors",
                name: "Doctors",
                component: Doctor,
            },
            {
                path: "/educationnal-information",
                name: "Educationnal Informations",
                component: EducationalInformation,
            },
        ],
    },
    {
        path: "/",
        name: "autenticate",
        component: Autenticate,
        redirect: "login",
        children: [{
                path: "login",
                name: "Login",
                component: Login,
            },
            {
                path: "sign-up",
                name: "Sign up",
                component: SignUp,
            },
            {
                path: "sign-up-choose",
                name: "Sign up choose",
                component: SignUpChoose,
            },
            {
                path: "recover-password",
                name: "Password Recovery",
                component: RecoveryPassword,
            },
        ],
    },
];

export default routes;
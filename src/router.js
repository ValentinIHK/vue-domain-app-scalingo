<<<<<<< HEAD
import Vue from "vue"import Router from 'vue-router'// Componentsimport Login from "./components/Login"import Dashboard from "./components/Dashboard"// Viewsimport Apps from "./views/Apps"import AppsSettings from "./views/AppsSettings"import store from "./store"Vue.use(Router);export default new Router({    mode: "history",    routes: [        {            path: "/login",            component: Login,            beforeEnter: (to, from, next) => {                if (store.state.token)                    next({path: "/"});                next();            }        },        {            path: "/",            component: Dashboard,            beforeEnter: (to, from, next) => {                if (!store.state.token)                    next({path: "/login"});                next();            },            children: [                {                    path: '',                    component: Apps                },                {                    path: ":name",                    component: AppsSettings,                }            ]        },        {            path: "/logout",            beforeEnter: (to, from, next) => {                store.dispatch('logout');                next({path: "/login"});            }        }    ]});
=======
import Vue from "vue"import Router from 'vue-router'// Componentsimport Login from "./components/Login"import Dashboard from "./components/Dashboard"// Viewsimport Apps from "./views/Apps"import AppsSettings from "./views/AppsSettings"import store from "./store"Vue.use(Router);export default new Router({    mode: "history",    routes: [        {            path: "/login",            component: Login,            beforeEnter: (to, from, next) => {                if (store.state.token)                    next({path: "/"});                next();            }        },        {            path: "/",            component: Dashboard,            beforeEnter: (to, from, next) => {                if (!store.state.token)                    next({path: "/login"});                next();            },            children: [                {                    path: '',                    component: Apps                },                {                    path: ":name",                    component: AppsSettings                }            ]        },        {            path: "/logout",            beforeEnter: (to, from, next) => {                store.dispatch('logout');                next({path: "/login"});            }        }    ]});
>>>>>>> 4558f5e... Add children routes for dashboard: Apps and Domains. Add Settings for Specific app.

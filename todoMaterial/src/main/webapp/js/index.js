import Vue from 'vue';
import VueRouter from 'vue-router';

import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '../css/todo.css';
import '../../../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../../../node_modules/ag-grid/dist/styles/ag-theme-material.css';
import {AgGridVue} from 'ag-grid-vue';

Vue.use(VueRouter);

Vue.use(Vuetify, {
    options: {
        themeVariations: ["primary", "secondary"],
    },
    theme: {
        accent: colors.shades.black,
        error: colors.red.accent3,
        primary: colors.indigo.darken1,
        secondary: colors.deepOrange.darken2,
    }
});
Vue.component("AgGridVue", AgGridVue);

window.Vue = Vue;
window.VueRouter = VueRouter;
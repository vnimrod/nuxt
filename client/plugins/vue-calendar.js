import Vue from 'vue';
import VCalendar from 'v-calendar';

//web https://vcalendar.io/installation.html
// we in install it with npm, then created a vue-calendar file on plugins folder
// then on nuxt.config.js file we added {src: './plugins/vue-calendar.js', mode: 'client'}
Vue.use(VCalendar, {
  componentPrefix: 'vc', 
});
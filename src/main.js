import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';


Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/users'},
	{ path: '/users', name: 'userList', component: UserList },
	{ path: '/users/:id', name: 'userDetails', component: UserDetails	}
];

const router = new VueRouter({ routes: routes });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
import Vue from 'vue'
import VueRouter from 'vue-router'
import BookHome from '../book.vue'
import BookCreate from '../BookCreate.vue'
import BookEdit from '../BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'BookHome', component: BookHome },
  {path: '/create', name: 'BookCreate', component: BookCreate },
  {path: '/edit/:id', name: 'BookEdit', component: BookEdit },
];

export default new VueRouter({ routes });
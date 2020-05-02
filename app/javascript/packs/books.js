import Vue from 'vue'
import Book from '../book.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(Book)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
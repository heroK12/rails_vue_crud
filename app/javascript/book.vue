<template>
  <div id="bookid">
    <div class="accordion" id="accordion_design">
      <div class="card" v-for="book in books">
        <div class="card-header" id="heading">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" :data-target="'#collapse' + book.id" aria-expanded="false" :aria-controls="'collapse' + book.id" v-on:click="setBookInfo(book.id)">
              {{ book.title }}
            </button>
          </h2>
        </div>

        <div :id="'collapse' + book.id" class="collapse" :aria-labelledby="'heading' + book.id" data-parent="#accordion_design">
          <div class="card-body" v-show="bookInfoBool">
            <h1>{{ bookInfo.title }}</h1>
            <h4>作者</h4>
            <p>{{ bookInfo.author }}</p>
            <h4>出版社</h4>
            <p>{{ bookInfo.publisher }}</p>
            <h4>ジャンル</h4>
            <p>{{ bookInfo.genre }}</p>
            <router-link :to="{ path: `/edit/${bookInfo.id}` }" class="btn btn-primary">本の編集</router-link>
            <button class="btn btn-danger" v-on:click="deleteBook(bookInfo.id)">削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'BookHome',
    data: function(){
      return{
        bookInfo: {},
        bookInfoBool: false,
        books: [],
      }
    },
    mounted: function(){
      this.fetchBooks();
    },
    methods: {
      fetchBooks(){
        axios.get('../api/books').then((res) => {
          for(var i = 0; i < res.data.books.length; i++){
            this.books.push(res.data.books[i]);
          }
        },(error) => {
          console.log(error);
        });
      },
      setBookInfo(id){
        axios.get(`../api/books/${id}.json`).then(res => {
          this.bookInfo = res.data;
          this.bookInfoBool = true;
        });
      },
      deleteBook(id){
        axios.delete(`/api/books/${id}`).then(res => {
          this.book = [];
          this.bookInfo = '';
          this.bookInfoBool = false;
          this.fetchBooks();
        })
      }
    }
  }
</script>

<style scoped></style>
<template>
  <div class="container text-center">
    <h1>本の編集</h1>
    <form class="col">
      <div class="row">
        <div class="input-field mx-auto">
          <label for="title">タイトル：</label>
          <input placeholder="Title" type="text" class="validate" v-model="book.title" required="required"></br>
        </div>
      </div>
      <div class="row">
        <div class="input-field mx-auto">
          <label for="title">作者：</label>
          <input placeholder="Author" type="text" class="validate" v-model="book.author" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field mx-auto">
          <label for="title">出版社：</label>
          <input placeholder="Publisher" type="text" class="validate" v-model="book.publisher" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field mx-auto">
          <label for="title">ジャンル：</label>
          <input placeholder="Genre" type="text" class="validate" v-model="book.genre" required="required">
        </div>
      </div>
      <div class="btn btn-primary" v-on:click="updateBook(book.id)">本の情報を変更</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'BookEdit',
    data: function(){
      return{
        id: this.$route.params.id,
        book: {
          id: '',
          title: '',
          author: '',
          publisher: '',
          genre: ''
        },
      }
    },
    mounted: function(){
      this.setbookEdit(this.id);
    },
    methods: {
      setbookEdit(id){
        axios.get(`../api/books/${id}.json`).then(res => {
          this.book.id = res.data.id;
          this.book.title = res.data.title;
          this.book.author = res.data.author;
          this.book.publisher = res.data.publisher;
          this.book.genre = res.data.genre;
        });
      },
      updateBook(id){
        if(!this.book.title) return;
        axios.put(`../api/books/${id}`, {book: this.book }).then((res) => {
          this.$router.push({ path: '/' });
        },(error) => {
          console.log(error);
        });
      },
    }
  }
</script>

<style scoped>
  label {
    margin-right: 10px;
    width:100px;
    float: left;
    }
</style>
<template>
  <div class="container text-center">
    <h1>本の登録</h1>
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
      <div class="btn btn-primary" v-on:click="createBook">本を登録</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: function(){
      return{
        book: {
          title: '',
          author: '',
          publisher: '',
          genre: ''
        }
      }
    },
    methods: {
      createBook: function(){
        if(!this.book.title) return;
        axios.post('../api/books', {book: this.book}).then((res) => {
          this.$router.push({ path: '/' });
        },(error) => {
          console.log(error);
        });
      }
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
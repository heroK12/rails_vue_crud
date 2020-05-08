<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">BookChart</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Header/>
    </nav>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    },
  }
</script>

<style scoped></style>


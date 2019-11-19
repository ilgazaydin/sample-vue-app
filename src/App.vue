<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/base";
</style>

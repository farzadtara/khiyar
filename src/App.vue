<template>
  <div id="main-app">
    <Navbar />
    <ActionBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import ActionBar from "@/components/ActionBar.vue";


@Component({ name: "App", components: { Navbar, ActionBar } })
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#main-app{
  background-color: #4a4a4a;
  // width: 100%;
  height: 100vh;
  // overflow: hidden;
  padding: 0.2rem;
  border: 1px solid black
}
</style>

<template>
  <div id="main-app">
    <Navbar />
    <ActionBar />
    <router-view />
    <DetailSideBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import ActionBar from "@/components/ActionBar.vue";
import DetailSideBar from "./components/DetailSideBar.vue";


@Component({ name: "App", components: { Navbar, ActionBar, DetailSideBar } })
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#main-app {
  position: relative;
  background-color: #4a4a4a;
  height: 100vh;
  padding: 0.2rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>

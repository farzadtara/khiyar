<template>
  <div id="main-app" class="bg-gray-300 relative h-screen p-0.5 flex flex-col justify-center content-center">
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

<style lang="scss" scoped></style>

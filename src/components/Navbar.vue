<template>
  <div id="navbar">
    <div>this is logo </div>
    <div>this is dark mode </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "Navbar" })
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
#navbar{
    background: rgb(222, 223, 210);
    border-bottom: 1px black solid;
}
</style>

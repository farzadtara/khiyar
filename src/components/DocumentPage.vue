<template>
  <div id="document-page">
    <div id="current-page"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "DocumentPage" })
export default class DocumentPage extends Vue {}
</script>

<style scoped lang="scss">
#document-page {
  #current-page {
    width: calc(37.79527559px * 21);
    height: calc(37.79527559px * 29.7);
    background-color: aliceblue;
  }
}
</style>

<template>
  <div id="home" > 
    <DocumentPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DocumentPage from "@/components/DocumentPage.vue";

@Component({ name: "Home", components: { DocumentPage } })
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#home{
  display: flex;
  justify-content: center;
  align-content: center;
  #document-page{

  }
}
</style>


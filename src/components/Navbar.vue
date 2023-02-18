<template>
  <div id="navbar" class="bg-gray-50 h-16 px-5 flex flex-row-reverse align-center items-center" >
    <div class="mx-4">
      <span class="text-blue-500 gg-file-document doc-icon"></span>
    </div>
    <div class="doc-name"><p class="text-lg" contenteditable="true">Este texto</p></div>
    <div class="mr-auto"><span class="gg-sun"></span></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "Navbar" })
export default class Navbar extends Vue {
  ///css.gg
}
</script>

<style scoped lang="scss">
#navbar {
  // border-bottom: 1px black solid;
  .doc-name {
    direction: rtl;
    [contenteditable]:focus {
      outline: 1px solid rgb(211, 211, 211);
      padding: 0.25rem;
      border-radius: 5px;
    }
  }
  .doc-icon {
    transform: scale(1.5);
  }
}
</style>

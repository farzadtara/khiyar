<template>
  <div id="navbar">
    <div> <span class="gg-file-document"></span> </div>
    <div> <span class="gg-sun"></span> </div>
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
#navbar{
    background: rgb(222, 223, 210);
    border-bottom: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
}
</style>

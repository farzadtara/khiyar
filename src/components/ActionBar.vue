<template>
  <div id="action-bar">
    <div>this is logo</div>
    <div>this is dark mode</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "ActionBar" })
export default class ActionBar extends Vue {}
</script>

<style scoped lang="scss">
#action-bar {
  background: rgb(222, 223, 210);
  border-bottom: 1px black solid;
}
</style>

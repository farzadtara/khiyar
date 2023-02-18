<template>
  <div
    id="dtaile-side-bar"
    class="bg-gray-50 absolute right-0 top-36 w-25 h-5/6 px-3"
  >
    <div
      id="dtaile-side-bar-header"
      class="border-b border-1 border-black py-2 px-1"
    >
      <h2>this is header</h2>
    </div>
    <div v-if="selectElementId">
      <h1>Current template</h1>
    </div>
    <div v-else>
        <CreateTemplate/>
    </div>
  </div>
</template>

<script lang="ts">
import { ApplicationDSModule } from "@/store";
import { Component, Vue } from "vue-property-decorator";
import CreateTemplate from "./CreateTemplate.vue";
@Component({ name: "DetailSideBar", components: {CreateTemplate} })
export default class DetailSideBar extends Vue {
  get selectElementId() {
    return ApplicationDSModule.selectedElementId;
  }
}
</script>

<style scoped lang="scss">
#dtaile-side-bar {
  direction: rtl;
}
</style>

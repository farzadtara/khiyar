<template>
  <div id="document-page" class="">
    <div id="current-page" class="position-relative h-100 w-100">
      <CorePdfGenerator :contentData="elements" />
      <!-- <corePdfCreator :contentData="elements" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";
import CorePdfGenerator from "./core/CorePdfGenerator.vue";
import corePdfCreator from "@/components/core/corePdfCreator.vue"

@Component({
  name: "DocumentPage",
  components: { CorePdfGenerator, corePdfCreator },
})
export default class DocumentPage extends Vue {
  elements: { type: string; x: number; y: number }[] = [
    { type: "text", x: 560, y: 900 },
  ];

  mounted() {
    EventBus.$on(EVENT_BUS.CREAT_TEXT_AREA, () => {
      // console.log("object");
      this.elements.push({ type: "text", x: 10, y: 0 });
    });
  }
}
</script>

<style scoped lang="scss">
#document-page {
  width: 8.27in;
  height: 11.69in;
  transform: scale(0.8);
  #current-page {

    background-color: aliceblue;
  }
}
</style>

<template>
  <div id="document-page">
    <div id="current-page" class="position-relative">
      <CorePdfGenerator>
        <div v-for="(element, index) in elements" :key="index">
          <CoreElement
            :type="element.type"
            :positionX="element.x"
            :positionY="element.y"
          />
        </div>
      </CorePdfGenerator>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";
import CoreElement from "./core/CoreElement.vue";
import CorePdfGenerator from "./core/CorePdfGenerator.vue";

@Component({
  name: "DocumentPage",
  components: { CoreElement, CorePdfGenerator },
})
export default class DocumentPage extends Vue {
  elements: { type: string; x: number; y: number }[] = [
    { type: "text", x: 0, y: 0 },
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
  #current-page {
    width: calc(37.79527559px * 21);
    height: calc(37.79527559px * 29.7);
    background-color: aliceblue;
  }
}
</style>

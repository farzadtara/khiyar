<template>
  <div class="w-100 h-100" ref="document">
    <div class="tara position-absolute">this is nice</div>
    <div v-for="(element, index) in contentData" :key="index">
      <CoreElement
        :ref="`element-${index}`"
        :content="element.content"
        :type="element.type"
        :positionX="element.x"
        :positionY="element.y"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from "vue-property-decorator";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CoreElement from "@/components/core/CoreElement.vue";
import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";

@Component({ name: "CorePdfFactory", components: { CoreElement } })
export default class CorePdfFactory extends Vue {
  @Ref("document") element!: HTMLElement;
  @Prop({ required: true, default: [], type: Array }) contentData!: any[];

  generatePDF() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
    });
    html2canvas(this.element,{ scale: 3 }).then((canvas) => {
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();

      doc.addImage(canvas, "JPEG", 0, 0, width, height);

      doc.save("sample_.pdf");
    });
  }

  mounted() {
    EventBus.$on(EVENT_BUS.PRINT_DOCUMENT, () => {
      console.log("print");
      this.generatePDF();
    });
  }
}
</script>

<style scoped>
.tara {
  top: 10px;
  right: 130px;
}
</style>

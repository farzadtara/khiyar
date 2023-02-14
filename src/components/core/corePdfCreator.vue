<template>
  <div id="core-pdf-creator" class="w-100 h-100 border border-primary" ref="document">
    <div v-for="(element, index) in contentData" :key="index">
        . <br/>
        <h1 class="fixed-bottom">fixed-bottom</h1>

      <CoreElement
        :ref="`element-${index}`"
        :type="element.type"
        :positionX="element.x"
        :positionY="element.y"
      />
    </div>
    <div class="border-bottom border-white fixed-bottom"></div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import CoreElement from "@/components/core/CoreElement.vue";

import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";

export default {
  name: "corePdfCreator",
  components: {
    CoreElement,
  },

  props: {
    contentData: {
      require: false,
      default: [],
    },
  },

  methods: {
    exportToPDF() {
      const element = this.$refs.document;
      
      console.log(this.$el.getClientRects());
      const h = this.$el.getClientRects().height;
      const w = this.$el.getClientRects().width
      const options = {
        margin: 0.25,
        filename: "document.pdf",
        pagesplit: true,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "in", format:'a4', orientation: "portrait" },
      };

      html2pdf(element, options);
    },
  },

  mounted() {
    EventBus.$on(EVENT_BUS.PRINT_DOCUMENT, () => {
      console.log("print");
    //   this.exportToPDF();
    });
  },
};
</script>


<style scoped>
#core-pdf-creator::before{
    content: "sdsdsd";
    /* height: fit-content;
    width: fit-content; */
}
#core-pdf-creator::after{
    content: "555555555555555";
    /* height: fit-content;
    width: fit-content; */
}
</style>

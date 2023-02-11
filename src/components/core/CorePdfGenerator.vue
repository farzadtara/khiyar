<template>
  <div id="core-pdf-generator">
    <vue-html2pdf
      :show-layout="true"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <div slot="pdf-content" class="position-relative">
        <slot></slot>
      </div>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";

export default {
  name: "CorePdfGenerator",
  components: {
    VueHtml2pdf,
  },

  methods: {
    generateReport() {
      console.log(this.$refs.html2Pdf);
      this.$refs.html2Pdf.generatePdf();
    },
  },

  mounted() {
    EventBus.$on(EVENT_BUS.PRINT_DOCUMENT, () => {
      console.log("print");
      this.generateReport();
    });
  },
};
</script>

<style lang="scss" scoped>
#core-pdf-generator {
  width: inherit;
  height: inherit;
}
::v-deep.vue-html2pdf {
  // width: inherit !important;
  // height: inherit !important;
  .layout-container {
    // position: relative !important;
    // width: inherit !important;
    // height: inherit !important;
    // top: auto !important;
    // left: auto !important;
    // z-index: unset !important;
    // background: transparent !important;
    .content-wrapper {
      // width: inherit !important;
      height: 150px !important;
      > div {
        // width: inherit !important;
        // height: inherit !important;
        > div {
          // width: inherit !important;
          // height: inherit !important;
        }
      }
    }
  }
}
</style>

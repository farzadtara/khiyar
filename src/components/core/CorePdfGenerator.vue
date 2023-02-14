<template>
  <div id="core-pdf-generator">
    <vue-html2pdf
      :show-layout="false"
      :float-layout="false"
      :enable-download="false"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination=" true"
      pdf-format="a4"
      pdf-orientation="portrait"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <div slot="pdf-content" class="h-100 w-100">
        <div>masdasdasd</div>

        <div
          id="for"
          class="h-100 w-100"
          v-for="(element, index) in contentData"
          :key="index"
        >
          <CoreElement
            :type="element.type"
            :positionX="element.x"
            :positionY="element.y"
          />
        </div>
      </div>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import CoreElement from "@/components/core/CoreElement.vue";
import { EventBus } from "@/utils/eventBus";
import { EVENT_BUS } from "@/utils/constance";

export default {
  name: "CorePdfGenerator",
  components: {
    VueHtml2pdf,
    CoreElement,
  },

  props: {
    content: {
      require: false,
      default: "this is nice prop",
    },
    contentData: {
      require: false,
      default: [],
    },
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
    display: block !important;
    // position: relative !important;
    // width: inherit !important;
    // height: inherit !important;
    // top: auto !important;
    // left: auto !important;
    // z-index: unset !important;
    // background: transparent !important;
    .content-wrapper {
      // width: inherit !important;
      // height: 150px !important;
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

<template>
  <div id="create-template">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ DetailSideBarText.TEMPLATE_NAME }}
    </label>
    <CoreInput v-model.trim.lazy="templateName" />
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ DetailSideBarText.PAPER_SIZE }}
    </label>
    <CoreInput v-model.trim.lazy="templatePaperSize" />
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ DetailSideBarText.PAPER_ORIENTATION }}
    </label>
    <CoreInput v-model.trim.lazy="templateOrientation" />

    <CoreBtn :nameBtn="DetailSideBarText.SAVE" @click="createTemplate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoreBtn from "./core/CoreBtn.vue";
import CoreInput from "./core/CoreInput.vue";
import { APP_PERSIAN_TEXT } from "@/utils/constance";
import { TemplateDSModule } from "@/store";
import { ITemplate } from "@/store/modules/TemplateDS";
import { uniqueId } from "@/utils/number";
@Component({ name: "CreateTemplate", components: { CoreBtn, CoreInput } })
export default class CreateTemplate extends Vue {
  DetailSideBarText = APP_PERSIAN_TEXT;
  newTemplateName = "";
  newTemplatePaperSize = "";
  newTemplateOrientation = "";

  get templateName() {
    return this.newTemplateName;
  }

  set templateName(value: string) {
    this.newTemplateName = value;
  }

  get templatePaperSize() {
    return this.newTemplatePaperSize;
  }

  set templatePaperSize(value: string) {
    this.newTemplatePaperSize = value;
  }

  get templateOrientation() {
    return this.newTemplateOrientation;
  }

  set templateOrientation(value: string) {
    this.newTemplateOrientation = value;
  }

  createTemplate() {
    const { newTemplateName, newTemplatePaperSize, newTemplateOrientation } =
      this;
    const id = uniqueId();

    const template: ITemplate = {
      id: id,
      name: newTemplateName,
      orientation: newTemplateOrientation,
      paperSize: newTemplatePaperSize,
    };

    TemplateDSModule.createNewTemplate(template);
  }
}
</script>

<style scoped></style>

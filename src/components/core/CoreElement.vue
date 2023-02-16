<template>
  <div class="">
    <div
      id="CoreElement"
      class="position-relative"
      :class="classes"
      :style="styles"
      draggable
    >
      <section>{{ content }}</section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { LOREM_IPSUM } from "@/utils/constance";

@Component({ name: "CoreElement" })
export default class CoreElement extends Vue {
  @Prop({ required: true, default: LOREM_IPSUM.LOREM_IPSUM, type: String }) content!: string;
  @Prop({ required: true, default: "text", type: String }) type!: string;
  @Prop({ required: true, default: 0, type: Number }) positionX!: number;
  @Prop({ required: true, default: 0, type: Number }) positionY!: number;

  get classes() {
    // const { positionX, positionY } = this;
    return [];
  }

  get styles() {
    return {
      top: `${this.positionY}px`,
      left: `${this.positionX}px`,
    };
  }
}
</script>

<style scoped></style>

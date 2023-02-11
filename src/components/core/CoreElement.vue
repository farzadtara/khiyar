<template>
  <div class="position-absolute" :class="classes" :style="styles" draggable> thia is nice</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({ name: "CoreElement" })
export default class CoreElement extends Vue {
  @Prop({ required: true, default: "text", type: String }) type!: string;
  @Prop({ required: true, default: 0, type: Number }) positionX!: number;
  @Prop({ required: true, default: 0, type: Number }) positionY!: number;

  get classes() {
    // const { positionX, positionY } = this;
    return [];
  }

  get styles() {
    return {
      top: this.positionX,
      right: this.positionY,
    };
  }
}
</script>

<style scoped></style>

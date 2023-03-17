<template>
  <div>
    <component
      :id="uniqueId"
      :is="bottomType"
      v-bind="$attrs"
      :class="[classes]"
      class="btn d-flex justify-content-center align-content-center gap-2"
      @click="handlerClick($event)"
      :disable="isDisable"
    >
      <span v-if="rightIcon" class="btn-label">
        <i :class="`gg-${rightIcon}`"></i>
      </span>
      <span class="text-btn"> {{ nameBtn }} </span>
      <span v-if="leftIcon" class="btn-label">
        <i :class="`gg-${leftIcon}`"></i>
      </span>

      <CoreSpinner v-if="isDisable && loading" />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from "vue-property-decorator";
import UniqueId from "@/mixins/UniqueId";

@Component({ name: "CoreBtn" })
export default class CoreBtn extends Mixins(UniqueId) {
  @Prop({ required: true, default: "Button", type: String }) nameBtn!: string;
  /// type : button reset submit
  @Prop({ required: false, default: "button", type: String }) type!: string;
  /// color : primary - secondary - danger - warning - info - light
  @Prop({ required: false, default: "primary", type: String }) color!: string;
  @Prop({ required: false, default: false, type: Boolean }) isDisable!: boolean;
  // apply the fab style
  @Prop({ required: false, default: false, type: Boolean }) fab!: boolean;
  @Prop({ required: false, default: false, type: Boolean }) rounded!: boolean;
  @Prop({ required: false, default: true, type: Boolean }) isVisible!: boolean;
  @Prop({ required: false, default: false, type: Boolean }) loading!: boolean;
  // button size (`xl`, `lg` / `md` / `sm` / `mini`)
  @Prop({ required: false, default: "lg", type: String }) size!: string;
  @Prop({ required: false, default: null, type: String }) leftIcon!: string;
  @Prop({ required: false, default: null, type: String }) rightIcon!: string;

  get bottomType(): string {
    const { to, href } = this.$attrs;
    return href ? "a" : to ? "router-link" : "button";
  }

  get classes() {
    const { color, isDisable, fab, rounded, isVisible, size } = this;
    return [
      ...(color ? [`btn-${color}`] : [null]),
      ...(fab ? [`rounded-circle`] : [null]),
      ...(!isVisible ? [`visually-hidden`] : [null]),
      ...(rounded ? [`rounded`] : [null]),
      ///size moshkel dare
      ...[`btn-${size}`],
      ///isDisable moshkel dare
      ...(isDisable
        ? [`pe-none user-select-none cursor-not-allowed btn btn-secondary`]
        : [null]),
    ];
  }

  @Emit("click")
  handlerClick(event: PointerEvent) {
    return event;
  }
}
</script>

<style scoped>
/* @import url(css.gg/icons/css/push-chevron-down.css); */
.cursor-not-allowed {
  cursor: not-allowed !important;
}
</style>

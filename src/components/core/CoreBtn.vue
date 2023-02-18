<template>
  <div>
    <!-- <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Sign In
    </button> -->
    <component
      :is="bottomType"
      v-bind="$attrs"
      :class="[classes]"
      class="btn d-flex justify-content-center align-content-center gap-2"
      @click="handlerClick($event)"
      :disable="isDisable"
    >
      <span v-if="rightIcon" class="btn-label">
        <i class="bi" :class="`bi-${rightIcon}`"></i>
      </span>
      <span class="text-btn"> {{ nameBtn }} </span>
      <span v-if="leftIcon" class="btn-label">
        <i class="bi" :class="`bi-${leftIcon}`"></i>
      </span>

      <CoreSpinner v-if="isDisable && loading" />
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Emit } from "vue-property-decorator";

@Component({ name: "CoreBtn" })
export default class CoreBtn extends Vue {
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
.cursor-not-allowed {
  cursor: not-allowed !important;
}
</style>

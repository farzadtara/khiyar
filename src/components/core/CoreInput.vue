<template>
  <div id="core-input">
    <input
      v-model="inputValue"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username"
      autocomplete="false"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({ name: "CoreInput" })
export default class CoreInput extends Vue {
  @Prop({ required: false, default: null }) value!: string | number;

  get inputValue() {
    return this.value;
  }

  set inputValue(e) {
    this.$emit("input", e);
  }
}
</script>

<style scoped></style>

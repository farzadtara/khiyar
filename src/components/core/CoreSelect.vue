<template>
  <div id="core-select">
    <select name="pets" id="pet-select">
      <option v-if="defaultOption" @click="onDefaultOptionClick" value="">
        {{ defaultOption }}
      </option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({ name: "CoreSelect" })
export default class CoreSelect extends Vue {
  @Prop({ required: true, type: Array, default: [] }) options!: {
    id: number;
    value: string;
  }[];
  @Prop({ required: false, type: String }) defaultOption: string | undefined;

  onDefaultOptionClick() {
    this.$emit("onDefaultOptiClick");
  }
}
</script>

<style scoped></style>

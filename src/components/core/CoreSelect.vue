<template>
  <div id="core-select relative">
    <select class="appearance-none w-full py-1 px-3 my-2 bg-white" name="pets" id="pet-select"  @change="onDefaultOptionClick">
      <option v-if="defaultOption" @click="onDefaultOptionClick" value="" action="sdsd">
        {{ defaultOption }}
      </option>
      <option v-for="option in options" :key="option.id" :value="option.id" @click="onDefaultOptionClick">
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

  onDefaultOptionClick(e) {
    console.log("Sdsdsdsds", e.target.action);
    
    this.$emit("onDefaultOptionClick");
  }
}
</script>

<style scoped>
#core-select{
  direction: rtl;
}
</style>

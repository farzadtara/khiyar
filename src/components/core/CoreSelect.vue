<template>
  <div :id="uniqueId" >
    <div id="core-select-container" class="relative dropdown">
      <button
        class="bg-Slate-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
        <span>{{defaultItem}}</span>
      </button>
      <div
        id="list-wrapper"
        class="dropdown-menu-core absolute top-full left-0 right-0 z-50 float-left text-center list-none rounded border border-2 border-black text-sky-100 min-w-max"
      >
        <ul class="first:round-t">
          <li
            v-for="(option, index) in options"
            :key="index"
            @click="clickItem(option)"
          >
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >{{ option[config.labelText] }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, PropSync, Mixins } from "vue-property-decorator";
import UniqueId from "@/mixins/UniqueId";

interface IConfig {
  valueKey: string
  labelText: string
}

@Component({ name: "CoreSelect" })
export default class CoreSelect extends Mixins(UniqueId) {
  @Prop({ required: true, type: Object }) config!: IConfig;
  @Prop({ required: true, type: Array, validator: (value) => Array.isArray(value) }) options!: any[];
  @Prop({ required: false, type: String}) defaultItem!:string



  onDefaultOptionClick(e) {
    this.$emit("onDefaultOptionClick");
  }

  clickItem(value) {
    this.$emit('clickItem', value[this.config.valueKey])
    // this.defaultSelect = value[this.config.labelText]
    console.log(this.$attrs);
  }
}
</script>

<style scoped>
#core-select {
  direction: rtl;
}

.dropdown:hover .dropdown-menu-core {
  display: block;
}

.dropdown-menu-core {
  display: none;
}
</style>

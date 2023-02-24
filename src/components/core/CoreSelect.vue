<template>
  <div id="core-select">
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
        <span>nice</span>
      </button>
      <div id="list-wrapper" class="dropdown-menu-core absolute top-full left-0 right-0 z-50 float-left text-center list-none rounded border border-2 border-black text-sky-100 min-w-max	">
        <ul class="first:round-t">
          <li  v-for=" (option, index) in  options" :key="index">
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >{{ option }}</a
            >
          </li>
          <li>{{options}}</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

interface IConfig {
	labelKey: string
	valueKey: string
	labelText: string
	searchKey?: string
}

@Component({ name: "CoreSelect" })
export default class CoreSelect extends Vue {

  @Prop({required: false, type: Object, default: {labelKey: 'label', valueKey: 'value', searchKey: 'label', labelText: 'labelText'} }) config!: IConfig
  @Prop({required: false, type: Array, validator:(value)=> Array.isArray(value)}) options!:any[]

  onDefaultOptionClick(e) {

    this.$emit("onDefaultOptionClick");
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
  /* position: absolute;
    top: 100%; */
  /* left: 0; */
  /* z-index: 1000; */
  display: none;
  /* float: left; */
  /* min-width: 10rem; */
  /* padding: 0.5rem 0;
  margin: 0.125rem 0 0; */
  /* font-size: 1rem; */
  /* color: #212529; */
  /* text-align: center; */
  /* list-style: none; */
  /* background-color: #fff; */
  /* background-clip: padding-box; */
  /* border: 1px solid rgba(0,0,0,.15); */
  /* border-radius: 0.25rem; */
}
</style>

<template>
  <div id="action-bar" class="bg-gray-50 h-20 px-5 flex flex-row-reverse align-center items-center">
    <div class="mx-3">
      <!-- <CoreSelect :options="options" :defaultOption="defaultOption" @onDefaultOptionClick="createTemplate" /> -->
      <button @click="createTemplate" class="bg-green-200 p-1 rounded">
        <!-- <i class="gg-math-plus"></i> -->
        {{ defaultOption }}
      </button>
    </div>
    <div @click="addTextArea">
      <span class="gg-format-text mx-3"></span>
    </div>
    <div @click="printDocument">
      <span class="gg-printer mx-3"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {EventBus} from '@/utils/eventBus'
import {EVENT_BUS} from '@/utils/constance'
import CoreSelect from "./core/CoreSelect.vue";
import {APP_PERSIAN_TEXT} from '@/utils/constance'

@Component({ name: "ActionBar", components:{CoreSelect} })
export default class ActionBar extends Vue {

  get options(){
    return [{id:1, value : 'testsssssssssssssss'}]
  }

  get defaultOption(){
    return APP_PERSIAN_TEXT.CREATE_TEMPLATE
  }

  createTemplate(){
    console.log("nivr");
    
    ///create template
  }

  addTextArea(){

    EventBus.$emit(EVENT_BUS.CREATE_TEXT_AREA)
  }  
  
  printDocument(){
    EventBus.$emit(EVENT_BUS.PRINT_DOCUMENT)
  }
}
</script>

<style scoped lang="scss">
#action-bar {
  // display: flex;
  // align-items: center;
  // padding: 0.5rem ;
  // background: rgb(222, 223, 210);
  // border-bottom: 1px black solid;
  border-top: 1px solid black;
}
</style>

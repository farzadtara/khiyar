<template>
  <div id="action-bar">
    <div @click="addTextArea">
      <span class="gg-format-text mx-3"></span>
    </div>    
    <div>
      <span class="gg-image mx-3"></span>
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

@Component({ name: "ActionBar" })
export default class ActionBar extends Vue {

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
  display: flex;
  align-items: center;
  padding: 0.5rem ;
  background: rgb(222, 223, 210);
  border-bottom: 1px black solid;
  
}
</style>

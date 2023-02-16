import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import {ELEMENT_TYPE , TEXT_ALIGNMENT} from  '@/utils/constance'



@Module({ namespaced: true, name: 'applicationds' })
export default class ApplicationDS extends VuexModule {
  selectedElementId = 0
  selectedTemplateId = 0



  @Mutation
  setSelectedElementId(id: number) {
    this.selectedElementId = id
  }  
  
  @Mutation
  setSelectedTemplateId(id: number) {
    this.selectedTemplateId = id
  }

  @Action({ commit: "updatePosts" })
  async fetchPosts() {
    //
  }
}



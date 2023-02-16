import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import {ELEMENT_TYPE , TEXT_ALIGNMENT} from  '@/utils/constance'



@Module({ namespaced: true, name: 'applicationds' })
export default class ApplicationDS extends VuexModule {
  selectedElementId = 0



  @Mutation
  setselectedElementId(id: number) {
    this.selectedElementId = id
  }

  @Action({ commit: "updatePosts" })
  async fetchPosts() {
    //
  }
}



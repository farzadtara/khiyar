
import Vue from "vue"
import Vuex, { Store } from "vuex"
import { getModule } from 'vuex-module-decorators'

import  ApplicationDS  from "@/store/modules/ApplicationDS";


Vue.use(Vuex);


export interface IRootState {
  applicationds: ApplicationDS
}


const store: Store<IRootState> = new Vuex.Store<IRootState>({
  modules: {
    applicationds: ApplicationDS,
  }
})

export default store


export const ApplicationDSModule = getModule(ApplicationDS, store)

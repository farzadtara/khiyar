
import Vue from "vue"
import Vuex, { Store } from "vuex"
import { getModule } from 'vuex-module-decorators'

import  ApplicationDS  from "@/store/modules/ApplicationDS";
import TemplateDS from "./modules/TemplateDS";
TemplateDS


Vue.use(Vuex);


export interface IRootState {
  applicationds: ApplicationDS,
  templateds: TemplateDS,
}


const store: Store<IRootState> = new Vuex.Store<IRootState>({
  modules: {
    applicationds: ApplicationDS,
    templateds: TemplateDS,

  }
})

export default store


export const ApplicationDSModule = getModule(ApplicationDS, store)
export const TemplateDSModule = getModule(TemplateDS, store)

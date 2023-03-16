import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { ELEMENT_TYPE, TEXT_ALIGNMENT } from "@/utils/constance";

export interface ITemplate {
  id: number;
  name: string;
  paperSize: string;
  orientation: string;
  schemas?: ITextElements[];
}

interface ITextElements {
  id: number;
  name: string;
  content: any;
  type: ELEMENT_TYPE;
  positionX: number;
  PositionY: number;
  width: number;
  height: number;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  characterSpacing: number;
  alignment: TEXT_ALIGNMENT;
}

@Module({ namespaced: true, name: "templateds", stateFactory: true })
export default class TemplateDS extends VuexModule {
  templates: { [key: string]: ITemplate } = {};

  get templatesAsArray(){
    return Object.values(this.templates)
  }

  @Mutation
  addOrUpdatedTemplate(template: ITemplate) {
    this.templates = {...this.templates, [template.id]:template}
  }

  @Action({ rawError: true })
  async createNewTemplate(template: ITemplate) {
    this.context.commit('addOrUpdatedTemplate', template)
  }
}

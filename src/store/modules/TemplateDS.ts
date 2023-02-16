import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { ELEMENT_TYPE, TEXT_ALIGNMENT } from "@/utils/constance";

interface ITemplate {
  id: number;
  name: string;
  schemas: ITextElements[];
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

@Module({ namespaced: true, name: "applicationds" })
export default class ApplicationDS extends VuexModule {
  templates: { [key: string]: ITemplate } = {};

  @Mutation
  addOrUpdatedTemplate(template: ITemplate) {
    this.templates = {
      ...this.templates,
      [template.id]: { ...template, ...this.templates[template.id] },
    };
  }

  @Action({ commit: "updatePosts" })
  async fetchPosts() {
    //
  }
}

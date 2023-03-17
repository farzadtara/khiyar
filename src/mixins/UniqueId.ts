import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
    uniqueId: any = ''
    private _uid: any;

    mounted() {
        this.uniqueId = this.$options.name?.concat("_",this._uid)
    }

}

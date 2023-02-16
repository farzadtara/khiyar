<template>
    <div id="dtaile-side-bar">
        <p>id {{ selectElementId }}</p>
    </div>
</template>

<script lang="ts">
    import { ApplicationDSModule } from '@/store';
import { Component, Vue } from 'vue-property-decorator';

    @Component({name:'DtailSideBar'})
    export default class DtailSideBar extends Vue {

        get selectElementId(){
            return ApplicationDSModule.selectedElementId
        }
        
    }
</script>

<style scoped lang="scss">
#dtaile-side-bar{
    position: absolute;
    background: gray;
    right: 1%;
    top: 10%;
    width: 25%;
    height: 80%;
}

</style>
<template>
    <section id="agents" class="agents bg-white pt-90">
        <div class="container">

            <SectionTitle :title="title"  :desc="desc" :isCenter="isCenter" />

            <div class="row mb-55" v-for="i in Math.ceil((agents.length)/3)" :key="i">
                <div class="col-xs-12 col-sm-4 col-md-4" v-for="agent of agents.slice(3*(i-1),(3*(i-1)+3))" :key="agent._id">
                    <SingleAgent :agent="agent" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'
import SingleAgent from './SingleAgent.vue'

export default {
    components: { SectionTitle, SingleAgent },
    props : ['agents', 'title', 'desc','isCenter'],
  
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>
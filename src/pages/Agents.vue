<template>
<fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="Agents" :breadcrumb="['Home','Agents']" />
    
    <AgentsWrapper :agents="agents" title="Trusted agents" desc="Duis aute irure dolor in reprehed in volupted velit esse dolore" isCenter="true" />

    <Cta />
    
    <script type="Application/javascript" defer src="/assets/js/functions.js"></script> 
</fragment>
</template>

<script>
import AgentsWrapper from '../components/Agents/AgentsWrapper.vue'
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'

export default {
    components: { Hero, AgentsWrapper, Cta },
    data(){
        return {
            agents : []
        }
    },
    created(){
        this.agents = this.$store.state.agents
    }

}
</script>

<style>

</style>
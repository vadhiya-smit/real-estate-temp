<template>
  <fragment>
      
    <!-- Page Title #1 -->
        <Hero url="/assets/images/page-titles/1.jpg" title="Agency Profile" :breadcrumb="['Home','Agency Profile']" />
    <!-- #page-title end -->
    
    <!-- agency-profile -->
        <AgencyDetails :agency="agency" />
    <!-- #agency-profile  end  -->

    <!-- properties-carousel-->
        <PropertyCarousel :properties="properties" title="Properties List" />
    <!-- #properties-carousel  end  -->

    <!-- #agents  -->
        <AgentsWrapper :agents="filterredAgents"  title="Our Agents"/>
    <!-- #agents end  -->

        <ContactForm />
       
        <Cta />
 
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script>

  </fragment>
</template>

<script>

import AgencyDetails from '../components/Agency/AgencyDetails.vue';
import AgentsWrapper from '../components/Agents/AgentsWrapper.vue';
import ContactForm from '../components/Forms/ContactForm.vue';
import Cta from '../components/Cta.vue';
import Hero from '../components/Hero.vue';
import PropertyCarousel from '../components/Home/PropertyCarousel.vue';
export default {
  components: { Hero, Cta, AgencyDetails, PropertyCarousel, AgentsWrapper,ContactForm },
    data(){
         return {
            properties : [],
            agency : {},
            agents : []
        }
    },
    computed : {
        filterredAgents(){
            return this.agents
        },
        
    },
    created(){ 
        const id = this.$route.params.id
        this.agency = this.$store.state.agencies.find(item => item._id == id)
        this.agents = this.$store.state.agents.filter(item => item.parentId == this.agency._id || item.agencyId == this.agency._id)
        this.properties = this.$store.state.property.filter(item => this.agents.map(item=> item._id).includes(item.agentId))
    }
}
</script>

<style>

</style>
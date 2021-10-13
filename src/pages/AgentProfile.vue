<template>
<fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="Agent Profile" :breadcrumb="['Home','Agent Profile']" />

    <!-- agent-profile  -->
        <AgentDetails :agent="agent" />
    <!-- #agent-profile  end  -->

    <!-- properties-carousel -->
        <PropertyCarousel :properties="properties" title="My Properties" />
    <!-- #properties-carousel  end  -->

    <!-- Contact #2 -->
        <ContactForm />
    <!-- #contact2  end -->

    <Cta />

    <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import AgentDetails from '../components/Agents/AgentDetails.vue'
import ContactForm from '../components/Forms/ContactForm.vue'
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'
import PropertyCarousel from '../components/Home/PropertyCarousel.vue'
export default {
  components: { Cta, Hero, PropertyCarousel, ContactForm, AgentDetails },
    data(){
        return {
           properties : [],
           agent : {}
        }
    },
    created(){
        this.agent = this.$store.state.agents.find(item => item._id == this.$route.params.id )
        this.properties = this.$store.state.property.filter(item => item.agentId === this.agent._id)
    }
}
</script>

<style>

</style>
<template>
<fragment >
    <!-- Hero Search ============================================= -->
        <section id="heroSearch" class="hero-search mtop-100 pt-0 pb-0">
            <SearchWithFilter title="Find Your Favorite Property" />
           
            <div class="carousel slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                <!-- Slide #1 -->
                <div class="slide--item bg-overlay bg-overlay-dark3" v-for="item of homeCarouselBg" :key="item.id">
                    <div class="bg-section">
                        <img :src="item.img" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #2 -->
                
                <!-- .slide-item end -->
            </div>
        </section>
    <!-- #property-single-slider end -->

    <!-- properties-carousel  -->
        <PropertyCarousel 
            :properties="properties"  
            title="Latest Properties" 
            desc="Duis aute irure dolor in reprehed in volupted velit esse dolore"  
            isCenter="true"
        />
    <!-- #properties-carousel  end  -->

    <!-- Feature  -->
        <SimpleSteps />
    <!-- .feature end -->

    <!-- city-property  -->
        <PropertyByCity />
    <!-- .city-property end -->

    <!-- agents -->
        <AgentsWrapper :agents="agents.slice(0,3)" title="Trusted Agents"  desc="Duis aute irure dolor in reprehed in volupted velit esse dolore" isCenter="true" />
    <!-- agents end  -->
        <Cta />
    <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
</fragment>
</template>

<script>
import AgentsWrapper from '../components/Agents/AgentsWrapper.vue'
import Cta from '../components/Cta.vue'
import SearchWithFilter from '../components/Forms/SearchWithFilter.vue'
import PropertyByCity from '../components/Home/PropertyByCity.vue'
import PropertyCarousel from '../components/Home/PropertyCarousel.vue'
import SimpleSteps from '../components/Home/SimpleSteps.vue'


export default {
  components: { PropertyCarousel, SimpleSteps, PropertyByCity, AgentsWrapper, Cta, SearchWithFilter },
    data(){
        return {
            agents : [],
            properties : [],
            homeCarouselBg : [
                {id: 1, img:'/assets/images/slider/slide-bg/4.jpg'},
                {id: 2, img:'/assets/images/slider/slide-bg/1.jpg'},
                {id: 3, img:'/assets/images/slider/slide-bg/3.jpg'},
            ],
            
        }
    },
    created(){
        this.agents = this.$store.state.agents
        this.properties = this.$store.state.property
    }
    
}
</script>

<style>

</style>
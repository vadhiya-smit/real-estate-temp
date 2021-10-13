<template>
<fragment>
      
        <Hero url="/assets/images/page-titles/1.jpg" title="Agency List" :breadcrumb="['Home','Agency List']" />

        <section id="agency-list" class="agency-list">
            <div class="container">
                <div class="row mb-50">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="agency-item" v-for="agency of agencies" :key="agency.id" >
                            <SingleAgency :agency="agency" />
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 clearfix text--center">
                        <ul class="pagination">
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">...</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                            <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Cta />

    <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
</fragment>
</template>

<script>
import SingleAgency from '../components/Agency/SingleAgency.vue'
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'
export default {
    components: { Hero, Cta, SingleAgency },
    data(){
        return{
            agencies : []
        }
    },
    created(){
        this.agencies = this.$store.state.agencies
    }
}
</script>

<style>

</style>
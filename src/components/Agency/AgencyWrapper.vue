<template>
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
                <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
        </div>
    </section>
</template>

<script>
import SingleAgency from './SingleAgency.vue'
export default {
  components: { SingleAgency },
  props : ['agencies'],
    data(){
        return {
           
        }
    }
}
</script>

<style>

</style>
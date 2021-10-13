<template>
  <fragment>
      
        <!-- property-single-slider
============================================= -->
        <section id="property-single-slider" class="property-single-slider pt-0 pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="slider--text">
                            <div class="property--info clearfix">
                                <div class="pull-left">
                                    <h5 class="property--title">{{property.title}}</h5>
                                    <p class="property--location"><i class="fa fa-map-marker"></i>{{property.location}}</p>
                                </div>
                                <div class="pull-right">
                                    <div class="property--status mb-20">{{property.description.status}}</div>
                                    <p class="property--price text-theme">${{property.price}}<span v-if="property.label">{{property.label}}</span></p>
                                </div>
                            </div>
                            <!-- .property-info end -->
                            <div class="property--meta clearfix">
                                <div class="pull-left">
                                    <ul class="list-unstyled list-inline mb-0">
                                        <li>
                                            Property ID:<span class="value">5331</span>
                                        </li>
                                        <li>
                                            Add to favorites:<span class="value"> <i class="fa fa-heart-o"></i></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pull-right">
                                    <div class="property--meta-share">
                                        <span class="share--title">share</span>
                                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                        <a href="#" class="pinterest"><i class="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <!-- .property-meta-share end -->
                                </div>
                            </div>
                            <!-- .property-info end -->
                        </div>
                    </div>
                </div>
                <!-- .container end -->
            </div>
            <!-- .slider-text end -->

            <div class="carousel slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                <!-- Slide #1 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img :src="property.gallery[0]" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #2 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img src="/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #3 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img src="/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
            </div>
        </section>
        <!-- #property-single-slider end -->

        <!-- property-single
============================================= -->
        <section id="property-single" class="property-single">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        
                        <PropertyDescription :desc="property.description" />
                        <!-- .property-single-desc end -->

                        <PropertyFeaturs :features="property.features" />
                        <!-- .property-single-features end -->
                        <PropertyLocation :address="property.address" />
                        <!-- .property-single-location end -->

                        <PropertyFloorPlans :floors="property.floorPlans" />
                        <!-- .property-single-design end -->
                    
                        <PropertyVideos  />    
                        <!-- .property-single-video end -->

                        <PropertyReviews />                      
                        <!-- .property-single-reviews end -->

                        <PropertyReviewForm />
                        <!-- .property-single-leave-review end -->
                    </div>
                    <!-- .col-md-8 -->
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <!-- widget property agent
=============================-->
                        
                        <PropertyAgent :agent="property.agentId" />                        <!-- . widget property agent end -->

                        <!-- widget request
=============================-->
                        
                        <PropertyShowingForm  />
                        <!-- . widget request end -->

                        <!-- widget featured property
=============================-->
                        
                        <FeaturedProperty />
                        <!-- . widget featured property end -->

                        <!-- widget mortgage calculator
=============================-->
                        
                        <PropertyMortageCanculater />
                        <!-- . widget mortgage calculator end -->
                    </div>
                    <!-- .col-md-4 -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </section>
        <!-- #property-single end -->

        <!-- properties-carousel
============================================= -->
        <PropertyCarousel :properties="properties" title="Similar Properties"  />

        
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
 -->        <!-- #properties-carousel  end  -->
  </fragment>
</template>

<script>
import FeaturedProperty from '../components/FeaturedProperty.vue'
import PropertyReviewForm from '../components/Forms/PropertyReviewForm.vue'
import PropertyShowingForm from '../components/Forms/PropertyShowingForm.vue'
import PropertyCarousel from '../components/Home/PropertyCarousel.vue'
import PropertyAgent from '../components/Property/PropertyAgent.vue'
import PropertyDescription from '../components/Property/PropertyDescription.vue'
import PropertyFeaturs from '../components/Property/PropertyFeaturs.vue'
import PropertyFloorPlans from '../components/Property/PropertyFloorPlans.vue'
import PropertyLocation from '../components/Property/PropertyLocation.vue'
import PropertyMortageCanculater from '../components/Property/PropertyMortageCanculater.vue'
import PropertyReviews from '../components/Property/PropertyReviews.vue'
import PropertyVideos from '../components/Property/PropertyVideos.vue'

export default {
  components: { PropertyDescription, PropertyFeaturs, PropertyLocation, PropertyFloorPlans, PropertyVideos, PropertyReviewForm, PropertyCarousel, PropertyMortageCanculater, FeaturedProperty,PropertyAgent, PropertyShowingForm, PropertyReviews },
    data(){
        return {
            property : {},
            properties : []
        }
    },
    watch:{
        '$route': {
            handler: function() {
                this.getProperty()
            },
        deep: true,
        immediate: true
      }
    },
    created(){
        this.getProperty()
    },
    methods :{
        getProperty(){
            const id = this.$route.params.id
            this.properties = this.$store.state.property
            this.property = this.properties.find(item => item._id == id)
        }
    }
}
</script>

<style>

</style>
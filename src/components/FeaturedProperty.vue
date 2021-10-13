<template>
    <div class="widget widget-featured-property">
        <div class="widget--title">
            <h5>Featured Properties</h5>
        </div>
        <div class="widget--content">
            <div class="carousel carousel-dots" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                <div class="property-item" v-for="property of properties" :key="property.id">
                    <PropertyCarouselItem :item="property" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PropertyCarouselItem from './PropertyCarouselItem.vue'
export default {
    components: { PropertyCarouselItem },
    data(){
        return {
            properties : this.$store.state.property
        }
    }
}
</script>

<style>

</style>
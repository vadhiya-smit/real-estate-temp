<template>
   <section id="city-property" class="city-property text-center pb-70">
            <div class="container">
                <SectionTitle title="Property By City" desc="Duis aute irure dolor in reprehed in volupted velit esse dolore" />
                
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-md-8">
                        <SinglePropertyByCity  :item="items[0]" />
                    </div>

                    <div class="col-xs-12 col-sm-4 col-md-4">
                       <SinglePropertyByCity  :item="items[1]" />
                    </div>
                </div>
                <div class="row">

                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <SinglePropertyByCity  :item="items[2]" />
                    </div>

                    <div class="col-xs-12 col-sm-8 col-md-8">
                        <SinglePropertyByCity  :item="items[3]" />
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'
import SinglePropertyByCity from './SinglePropertyByCity.vue'
export default {
    components: { SinglePropertyByCity, SectionTitle },
    data(){
        return {
            items : [
                {id:1, img: "/assets/images/properties/city/1.jpg", location : "Alabama", count : "12" },
                {id:2, img: "/assets/images/properties/city/2.jpg", location : "Alaska", count : "22" },
                {id:3, img: "/assets/images/properties/city/3.jpg", location : "California", count : "4" },
                {id:4, img: "/assets/images/properties/city/4.jpg", location : "Florida", count : "14" },
            ]
        }
    }
}
</script>

<style>

</style>
<template>
  <fragment>        
    <div class="property-item" v-for="property of properties" :key="property._id">
        <PropertyCarouselItem :item="property" :isDesc="true" isEdit="true" />
    </div>     
    
        <!-- .property item end -->

        <!-- .property item end -->
        <div class="mt-50 text--center">
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
  </fragment>
</template>

<script>
import PropertyCarouselItem from '../PropertyCarouselItem.vue'
export default {
  components: { PropertyCarouselItem },
  data(){
      return {
          properties : []
      }
  },
  created(){
    this.properties = this.$store.state.property
    const data  = this.$store.state.user
    this.properties = this.properties.filter(item => item.agentId == data._id)
  },
  methods:{
    edit(id){
      this.$router.push(`/add-property/${id}`)
    } 
  }
}
</script>

<style>

</style>
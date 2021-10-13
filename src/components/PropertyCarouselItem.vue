<template>
     <fragment>
        <div class="property--img">
            <img :src="item.gallery[0]" alt="property image" class="img-responsive">
            <span class="property--status">{{item.description.status}}</span>
        </div>
        <div class="property--content">
            <div class="property--info">
                <h5 class="property--title"><router-link :to="'/property/'+item._id">{{item.title}} </router-link></h5>
                <p class="property--location">{{item.location}}</p>
                <p class="property--price">${{item.price}}<span class="time" v-if="item.label">{{item.label}}</span></p>
            </div>
            <!-- .property-info end -->
            <div class="property--features" v-if="isDesc">
                <ul class="list-unstyled mb-0">
                    <li><span class="feature">Beds:</span><span class="feature-num">{{item.description.beds}}</span></li>
                    <li><span class="feature">Baths:</span><span class="feature-num">{{item.description.baths}}</span></li>
                    <li><span class="feature">Area:</span><span class="feature-num">{{item.description.area}}</span></li>
                    <li class="pull-right" v-if="isEdit"><router-view :href="'/add-property/'+id" class="edit--btn" @click="edit(item._id)"><i class="fa fa-edit"></i>Edit</router-view></li>
                </ul>
            </div>
            <!-- .property-features end -->
        </div>
     </fragment>
</template>

<script>
export default {
    props : ['item','isDesc','isEdit'],
    methods:{
        edit(id){
            this.$router.push(`/add-property/${id}`)
        } 
    }
}
</script>

<style>

</style>
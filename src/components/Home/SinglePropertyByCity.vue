<template>
    <div class="property-city-item">
        <div class="property--city-img">
            <router-link :to="'/property?location='+item.location">
                <img :src="item.img" alt="city" class="img-responsive">
                <div class="property--city-overlay">
                    <div class="property--item-content">
                        <h5 class="property--title">{{item.location}}</h5>
                        <p class="property--numbers">{{item.count}} Properties</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

</style>
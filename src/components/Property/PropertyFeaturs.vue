<template>
    <div class="property-single-features inner-box">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                    <h2 class="heading--title">Features</h2>
                </div>
            </div>
            
            <!-- feature-item #1 -->
            <div class="col-xs-6 col-sm-4 col-md-4" v-for="feat of features" :key="feat._id">
                <div class="feature-item">
                    <p>{{feat.feature}}</p>
                </div>
            </div>
            <!-- feature-item end -->
            <!-- feature-item #2 -->
            
            <!-- feature-item end -->
        </div>
        <!-- .row end -->
        </div>
</template>

<script>
export default {
    props : ['features']
}
</script>

<style>

</style>
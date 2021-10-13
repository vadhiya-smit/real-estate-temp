<template>
    <div class="property-single-desc inner-box">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                    <h2 class="heading--title">Description</h2>
                </div>
            </div>
            <!-- feature-panel #1 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/1.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Area:</h5>
                        <p>{{desc.area}} sq ft</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <!-- feature-panel #2 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/2.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Beds:</h5>
                        <p>{{desc.beds}} Bedrooms</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <!-- feature-panel #3 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/3.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Baths:</h5>
                        <p>{{desc.baths}} Bathrooms</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <!-- feature-panel #4 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/4.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Rooms:</h5>
                        <p>{{desc.rooms}} Rooms</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <!-- feature-panel #5 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/5.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Floors:</h5>
                        <p>{{desc.floors}} Floors</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <!-- feature-panel #6 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                    <div class="feature--img">
                        <img src="/assets/images/property-single/features/6.png" alt="icon">
                    </div>
                    <div class="feature--content">
                        <h5>Garage:</h5>
                        <p>{{desc.garage}} Garages</p>
                    </div>
                </div>
            </div>
            <!-- feature-panel end -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="property--details">
                    <p>{{desc.desc}}</p>
                    <p>{{desc.desc}}</p>
                </div>
                <!-- .property-details end -->
            </div>
            <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        </div>
</template>

<script>
export default {
    props : ['desc']
}
</script>

<style>

</style>
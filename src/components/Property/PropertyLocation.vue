<template>
     <div class="property-single-location inner-box">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                    <h2 class="heading--title">Location</h2>
                </div>
            </div>
            <!-- .col-md-12 end -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <ul class="list-unstyled mb-20">
                    <li><span>Address:</span>{{address.street}}</li>
                    <li><span>City:</span>{{address.city}}</li>
                    <li><span>Country:</span>{{address.country}}</li>
                    <li><span>State:</span>{{address.state}}</li>
                    <li><span>Zip/Postal code:</span>{{address.zip}}</li>
                </ul>
            </div>
            <!-- .col-md-12 end -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div id="googleMap" style="width:100%;height:380px;"></div>
            </div>
            <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
    </div>
</template>

<script>
export default {
    props : ['address']
}
</script>

<style>

</style>
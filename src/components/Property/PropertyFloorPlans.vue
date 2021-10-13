<template>
    <div class="property-single-design inner-box">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                    <h2 class="heading--title">Floor Plans</h2>
                </div>
            </div>
            <!-- .col-md-12 end -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="accordion accordion-1" id="accordion01">
                    <!-- Panel 01 -->
                    <div class="panel" v-for="floor of floors" :key="floor.title">
                        <div class="panel--heading clearfix">
                            <div class="pull-left">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-1">{{floor.title}}</a>
                            </div>
                            <div class="pull-right">
                                <ul class="list-unstyled list-inline mb-0">
                                    <li><span>Size:</span>{{floor.description.size}} sq ft</li>
                                    <li><span>Rooms:</span>{{floor.description.rooms}}</li>
                                    <li><span>Baths:</span>{{floor.description.baths}}</li>
                                </ul>
                            </div>
                        </div>
                        <div id="collapse01-1" class="panel--body panel-collapse collapse in">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                            <img src="/assets/images/property-single/1.png" alt="img" class="img-responsive">
                        </div>
                    </div>
                    <!-- .panel end -->
                    <!-- Panel 02 -->
                    <!-- <div class="panel">
                        <div class="panel--heading clearfix">
                            <div class="pull-left">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" href="#collapse01-2">Second Floor</a>
                            </div>
                            <div class="pull-right">
                                <ul class="list-unstyled list-inline mb-0">
                                    <li><span>Size:</span>635 sq ft</li>
                                    <li><span>Rooms:</span>3</li>
                                    <li><span>Baths:</span>1</li>
                                </ul>
                            </div>
                        </div>
                        <div id="collapse01-2" class="panel--body panel-collapse collapse">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                            <img src="/assets/images/property-single/1.png" alt="img" class="img-responsive">
                        </div>
                    </div> -->
                    <!-- .panel end -->
                </div>
                <!-- End .Accordion-->
            </div>
            <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
    </div>
</template>

<script>
export default {
    props :['floors']
}
</script>

<style>

</style>
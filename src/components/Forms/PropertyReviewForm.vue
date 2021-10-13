<template>
    <div class="property-single-leave-review inner-box">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                    <h2 class="heading--title">Leave a Review</h2>
                </div>
            </div>
            <!-- .col-md-12 end -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <form id="post-comment" class="mb-0">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <div class="form-group">
                                <label for="review-name">Your Name*</label>
                                <input type="text" class="form-control" name="review-name" id="review-name" required>
                            </div>
                        </div>
                        <!-- .col-md-4 end -->
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <div class="form-group">
                                <label for="review-email">Your Email*</label>
                                <input type="email" class="form-control" name="review-email" id="review-email" required>
                            </div>
                        </div>
                        <!-- .col-md-4 end -->
                        <!-- .col-md-4 end -->
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <div class="form-group">
                                <label>Rating*</label>
                                <div class="property-rating">
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <!-- .col-md-4 end -->

                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="review-comment">Review*</label>
                                <textarea class="form-control" id="review-comment" rows="2" required></textarea>
                            </div>
                        </div>
                        <!-- .col-md-12 -->
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <button type="submit" class="btn btn--primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
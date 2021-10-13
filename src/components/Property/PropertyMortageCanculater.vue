<template>
    <div class="widget widget-mortgage-calculator">
        <div class="widget--title">
            <h5>Mortage Calculator</h5>
        </div>
        <div class="widget--content">
            <form class="mb-0">
                <div class="form-group">
                    <label for="sale-price">Sale Price</label>
                    <input type="text" class="form-control" name="sale-price" id="sale-price" placeholder="$">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="down-payment">Down Payment</label>
                    <input type="text" class="form-control" name="down-payment" id="down-payment" placeholder="$">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="term">Term</label>
                    <input type="text" class="form-control" name="term" id="term" placeholder="years">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="interest-rate">Interest Rate</label>
                    <input type="text" class="form-control" name="interest-rate" id="interest-rate" placeholder="%">
                </div>
                <!-- .form-group end -->
                <input type="submit" value="Calculate" name="submit" class="btn btn--primary btn--block">
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
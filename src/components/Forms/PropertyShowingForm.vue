<template>
    <div class="widget widget-request">
        <div class="widget--title">
            <h5>Request a Showing</h5>
        </div>
        <div class="widget--content">
            <form class="mb-0">
                <div class="form-group">
                    <label for="contact-name">Your Name*</label>
                    <input type="text" class="form-control" name="contact-name" id="contact-name" required>
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="contact-email">Email Address*</label>
                    <input type="email" class="form-control" name="contact-email" id="contact-email" required>
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="contact-phone">Phone Number</label>
                    <input type="text" class="form-control" name="contact-phone" id="contact-phone" placeholder="(optional)">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="message">Message*</label>
                    <textarea class="form-control" name="contact-message" id="message" rows="2" placeholder="(optional)"></textarea>
                </div>
                <!-- .form-group end -->
                <input type="submit" value="Send Request" name="submit" class="btn btn--primary btn--block">
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
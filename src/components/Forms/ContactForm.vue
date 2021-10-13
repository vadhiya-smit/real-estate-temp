<template>
    <section id="contact2" class="contact contact-2 bg-white">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="heading heading-2 mb-50">
                        <h2 class="heading--title">Contact Us</h2>
                    </div>
                </div>
                <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <form class="mb-0">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="form-group">
                                    <label for="contact-name">Your Name*</label>
                                    <input type="text" class="form-control" name="contact-name" id="contact-name" required>
                                </div>
                            </div>
                            <!-- .col-md-4 end -->
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="form-group">
                                    <label for="contact-email">Email Address*</label>
                                    <input type="email" class="form-control" name="contact-email" id="contact-email" required>
                                </div>
                            </div>
                            <!-- .col-md-4 end -->
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="form-group">
                                    <label for="phone-number">Phone Number</label>
                                    <input type="text" class="form-control" name="phone-number" id="phone-number" placeholder="(optional)">
                                </div>
                            </div>
                            <!-- .col-md-4 end -->
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <label for="message">Message*</label>
                                    <textarea class="form-control" name="contact-message" id="message" rows="2" required></textarea>
                                </div>
                            </div>
                            <!-- .col-md-12 end -->
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <input type="submit" value="Send Message" name="submit" class="btn btn--primary">
                            </div>
                            <!-- .col-md-12 -->
                        </div>
                    </form>
                </div>
                <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>

    <section id="agent-profile" class="agent-profile bg-white">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-5 col-md-5">
                    <div class="agent--profile-img">
                        <img :src="agent.gallery.profile || agent.media.gridImg" alt="agent" />
                    </div>
                </div>
                <!-- .col-md-5 end -->
                <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                    <div class="agent--profile-content">
                        <div class="agent--info">
                            <h5 class="agent--title">{{agent.fullName}}</h5>
                            <p class="agent--position">{{agent.type}}</p>
                        </div>
                        <!-- .agent-info end -->
                        <div class="agent--profile-details">
                            <p>{{agent.desc}}</p>
                        </div>
                        <!-- .agent-profile-details end -->
                        <div class="agent--profile-contact">
                            <ul class="list-unstyled mb-20 clearfix">
                                <li><span>Phone:</span>{{agent.contact.phone}}</li>
                                <li><span>Email:</span><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="592a2c2929362b2d193c21383429353c773a3634">{{agent.email}}</a></li>
                                <li><span>Mobile:</span>{{agent.contact.mobile}}</li>
                                <li><span>Website:</span>{{agent.contact.website}}</li>
                                <li><span>Fax:</span>{{agent.contact.fax}}</li>
                            </ul>
                        </div>
                        <!-- .agent-profile-contact end -->
                        <div class="agent--social-links">
                            <a :href="agent.socialLinks.facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                            <a :href="agent.socialLinks.twitter"  target="_blank"><i class="fa fa-twitter"></i></a>
                            <a :href="agent.socialLinks.googlePlus"  target="_blank"><i class="fa fa-google-plus"></i></a>
                            <a :href="agent.socialLinks.linkedin"  target="_blank"><i class="fa fa-linkedin"></i></a>
                            <a :href="agent.socialLinks.pinterest"  target="_blank"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                        <!-- .agent-social-links end -->
                    </div>
                </div>
                <!-- .col-md-5 end -->
            </div>
            <!-- .row end -->
        </div>
        <!-- .container -->
    </section>
</template>

<script>
export default {
    props : [ 'agent' ], 
}
</script>

<style>

</style>
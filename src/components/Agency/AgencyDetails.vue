<template>
    <section id="agency-profile" class="agency-profile bg-white pb-70">
        <div class="container">
            <div class="row" >
                <div class="col-xs-12 col-sm-5 col-md-5 " >
                    <div class="agency--profile-img text-center">
                        <img :src="agency.gallery.profile" alt="agency"  />
                    </div>
                </div>
                <!-- .col-md-5 end -->
                <div class="col-xs-12 col-sm-7 col-md-5 col-md-offset-1" >
                    <div class="agency--profile-content">

                        <div class="agency--info">
                            <h5 class="agency--title">{{agency.title}}</h5>
                            <p class="agency--location"><i class="fa fa-map-marker"></i>{{agency.location}}</p>
                        </div>
                        <!-- .agency-info end -->
                        <div class="agency--profile-contact">
                            <ul class="list-unstyled mb-30 clearfix">
                                <li><span>Phone:</span>{{agency.contact.phone}}</li>
                                <li><span>Properties Listed:</span>{{agency.contact.totalProperty}}</li>
                                <!-- <li><span>Mobile:</span>{{agency.mobile}}</li>-->                                
                                <li><span>Fax:</span>{{agency.contact.fax}}</li>
                                <li><span>License:</span>{{agency.contact.license}}</li>
                                <li><span>Email:</span><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fb888e8b8b94898fbb9e839a968b979ed5989496">{{agency.email}}</a></li>
                                <li><span>Tax Number:</span>{{agency.contact.tax}}</li>
                                <li><span>Languages:</span>{{languagues}}</li>
                                <li><span>Website:</span>{{agency.contact.website}}</li>
                            </ul>
                        </div>
                        <!-- .agency-profile-contact end -->
                        <div class="agency--social-links">
                            <a :href="agency.socialLinks.facebook"><i class="fa fa-facebook"></i></a>
                            <a :href="agency.socialLinks.twitter"><i class="fa fa-twitter"></i></a>
                            <a :href="agency.socialLinks.googlePlus"><i class="fa fa-google-plus"></i></a>
                            <a :href="agency.socialLinks.linkedin"><i class="fa fa-linkedin"></i></a>
                            <a :href="agency.socialLinks.pinterest"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
                <!-- .col-md-5 end -->
                <div class="col-xs-12 col-sm-12 col-md-12" >
                    <div class="agency--profile-details">
                        <p>{{agency.desc}}</p>
                        <p>{{agency.desc}}</p>
                    </div>
                    <!-- .agency-profile-details end -->
                </div>
                <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
        </div>
        <!-- .container -->
    </section>
</template>

<script>
export default {
    props : ['agency'],
    computed : {
        languagues(){
            return this.agency.contact.languages.toString()
        }
    },
    mounted(){
    }
}
</script>

<style>

</style>
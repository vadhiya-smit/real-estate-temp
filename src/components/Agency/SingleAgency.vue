<template>
<fragment>
    <div class="agency--img">
        
            <img :src="agency.gallery.profile" alt="agency" class="img-responsive">
        
    </div>
    <!-- .agency-img end -->
    <div class="agency--content">
        <div class="clearfix mb-30">
            <div class="pull-left">
                <h5 class="agency--title"><router-link :to="'/agency/'+agency._id">{{agency.title}}</router-link></h5>
                <span class="agency--location"><i class="fa fa-map-marker"></i>{{agency.location}}</span>
            </div>
            <div class="pull-right">
                <div class="agency--social-links">
                    <a :href="agency.socialLinks.facebook"><i class="fa fa-facebook"></i></a>
                    <a :href="agency.socialLinks.twitter"><i class="fa fa-twitter"></i></a>
                    <a :href="agency.socialLinks.googlePlus"><i class="fa fa-google-plus"></i></a>
                    <a :href="agency.socialLinks.linkedin"><i class="fa fa-linkedin"></i></a>
                    <a :href="agency.socialLinks.pinterest"><i class="fa fa-pinterest-p"></i></a>
                </div>
                <span class="Properties--number">{{agency.totalProperty}} Property</span>
            </div>
        </div>
        <div class="agency--details">
            <p>{{agency.desc}}</p>
        </div>
        <!-- .agency-details end -->
        <div class="agency--contact">
            <ul class="list-unstyled mb-0 clearfix">
                <li><i class="fa fa-phone"></i>{{agency.contact.phone}}</li>
                <li><i class="fa fa-envelope-o"></i><router-link to="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="90fdfff4f5e2fef8ffe5e3f5d0fcf1fef4bef3fffd">{{agency.email}}</router-link></li>
                <li><i class="fa fa-laptop"></i>{{agency.contact.website}}</li>
            </ul>
        </div>
    </div>
</fragment>                    
</template>

<script>
export default {
    props : ['agency'],
    data(){
        return {
            agencya : {
                img : '/assets/images/agency/1.png',
                title : 'Modern House',
                location : '153 Sandra Cir, Westfield, NJ 07090',
                totalProperty : 15,
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    googlePlus : '#',
                    pinterest : '#',
                    linkedin : '#',
                },
                details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                phone : '(950) 491-570-180',
                email : '[email&#160;protected]',
                website : 'modernhouse.com'
            }
        }
    }
}
</script>

<style>

</style>
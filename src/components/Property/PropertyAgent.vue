<template>
    <div class="widget widget-property-agent">
        <div class="widget--title">
            <h5>About Agent</h5>
        </div>
        <div class="widget--content">
            <router-link :to="'/agent/'+agentData._id">
                <div class="agent--img">
                    <img :src="agentData.gallery.profile" alt="agent" class="img-responsive">
                </div>
                <div class="agent--info">
                    <h5 class="agent--title">{{agentData.fullName}}</h5>
                </div>
            </router-link>
            <!-- .agent-profile-details end -->
            <div class="agent--contact">
                <ul class="list-unstyled">
                    <li><i class="fa fa-phone"></i>{{agentData.contact.phone}}</li>
                    <li><i class="fa fa-envelope-o"></i><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dba8aeababb4a9af9bbea3bab6abb7bef5b8b4b6">[email&#160;protected]</a></li>
                    <li><i class="fa fa-link"></i>{{agentData.contact.website}}</li>
                </ul>
            </div>
            <!-- .agent-contact end -->
            <div class="agent--social-links">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
            </div>
            <!-- .agent-social-links -->
        </div>
    </div>
</template>

<script>
export default {
    props : ['agent'],
    computed : {
        agentData(){
            return this.$store.state.agents.find(item => item._id == this.agent)
        }
    }
}
</script>

<style>

</style>
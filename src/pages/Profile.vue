<template>
  <fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="user Profile" :breadcrumb="['Home','user Profile']" />
    
        <section id="user-profile" class="user-profile my-properties properties-list" >
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="edit--profile-area">
                            <ul class="edit--profile-links list-unstyled mb-0">
                                <li><router-link to="/profile" class="active">Edit Profile</router-link></li>
                                <li><router-link to="/profile/social" v-if="role > 1">Social Profiles</router-link></li>
                                <li><router-link to="/profile/properties"  v-if="role > 1">My Properties</router-link></li>
                                <li><router-link to="/profile/favorite-property">Favorite Properties</router-link></li>
                                <li><router-link to="/profile/register-agency" v-if="role == 2">Register My Agency</router-link></li>
                                <li><router-link to="/profile/agency-info" v-if="role == 3">My Agency Profile</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <!-- .col-md-4 -->
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <router-view></router-view>
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row end -->
            </div>
        </section>
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
  components: { Hero },
    data(){
        return { 
            role : ""
        }
    },    
    created(){
        if(this.$store.state.user.role){
            this.role = this.$store.state.user.role
        }
    }
}
</script>

<style>

</style>
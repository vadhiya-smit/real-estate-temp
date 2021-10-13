<template>

        <div class="agent">
            <div class="agent--img">
                <router-link :to="'/agent/'+agent._id">
                    <img :src="agent.gallery.profile" alt="agent" />
                </router-link>
                <div class="agent--details">
                    <p>{{agent.desc}}</p>
                    <div class="agent--social-links">
                        <a :href="agent.socialLinks.facebook"><i class="fa fa-facebook"></i></a>
                        <a :href="agent.socialLinks.twitter"><i class="fa fa-twitter"></i></a>
                        <a :href="agent.socialLinks.dribbble"><i class="fa fa-dribbble"></i></a>
                        <a :href="agent.socialLinks.linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <!-- .agent-img end -->
            <div class="agent--info">
                <h5 class="agent--title">{{agent.fullName}}</h5>
                <h6 class="agent--position">{{agent.type}}</h6>
            </div>
            <!-- .agent-info end -->
        </div>
        <!-- .agent end -->
</template>

<script>
export default {
    props : ['agent'],
    data(){
        return  {
            agents : {
                fullName : 'Steve Martin',
                type : 'Buying Agent',
                img : '/assets/images/agents/grid/1.png',
                desc: 'Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                }
            }
        }
    }
}
</script>

<style>

</style>
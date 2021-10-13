<template>
  <div id="wrapper" class="wrapper clearfix">
    <Navbar />
    
        <router-view></router-view>
    <Footer />
    

  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
//import UserServices from './services/UserServices'
//import d from './services/Temp'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created(){
    this.ret()
  },
  methods : {
    async ret(){
      const token = localStorage.getItem('userToken')
      if(token){
        // const res2 = await UserServices.getUserFromToken(token)
        const user = localStorage.getItem('user')
        this.$store.commit('setUser',JSON.parse(user))
      } else {
        
        this.$store.commit('setUser',{})
      }
      /* this.$store.commit('addAgents',[
                {
                    id:1,
                    title : "Property Type",
                    items : [
                        {id : 1,count : "13",title : 'Apartments',url : "/property?type=Apartment",},
                        {id : 2,count : "8",title : 'Houses',url : "/property?type=House",},
                        {id : 3,count : "3",title : 'Offices',url : "/property?type=Office",},
                        {id : 4,count : "4",title : 'Villas',url : "/property?type=Villa",},
                        
                    ]
                },

                {
                    id:2,
                    title : "Property Status",
                    items : [
                        {id : 1,count : "25",title : 'For Rent',url : "/property?status=For Rent",},
                        {id : 2,count : "32",title : 'For Sale',url : "/property?status=For Sale",},
                    ]
                },

                {
                    id:3,
                    title : "location",
                    items : [
                        {id : 1,count : "5",title : 'California',url : "/property?location=California",},
                        {id : 2,count : "10",title : 'Alabama',url : "/property?location=Alabama",},
                        {id : 3,count : "4",title : 'Mississippi York',url : "/property?location=Mississippi",},
                        {id : 4,count : "7",title : 'Florida',url : "/property?location=Florida",},
                        
                    ]
                },
            ]) */
          //localStorage.setItem('vuex',JSON.stringify(d))
    }
  }
}
</script>


<style>

</style>

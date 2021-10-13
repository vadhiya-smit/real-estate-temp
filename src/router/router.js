import Vue from 'vue'
import router from 'vue-router'
import store from '../store/store'

import Home from '../pages/Home.vue'
import Agents from '../pages/Agents.vue'
import AgentProfile from '../pages/AgentProfile.vue'
import Agency from '../pages/Agency.vue'
import AgencyProfile from '../pages/AgencyProfile.vue'
import SingleProperty from '../pages/SingleProperty.vue'
import Properties from '../pages/Properties.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactUs from '../pages/ContactUs.vue'
import AddProperty from '../pages/AddProperty.vue'
import Profile from '../pages/Profile.vue'
import EditProfile from '../components/Profile/EditProfile.vue'
import SocialProfile from '../components/Profile/SocialProfile.vue'
import FavoriteProperty from '../components/Profile/FavoriteProperty.vue'
import MyProperties from '../components/Profile/Properties.vue'
import MyAgency from '../components/Profile/MyAgency.vue'
import ErrorPage from '../pages/404.vue'

Vue.use(router)

const myRouter =  new router({

    mode : 'history',

    routes : [
        {
            path : '/',
            name : 'home',
            component : Home,
        },
        {
            path : '/agents',
            name : 'agents',
            component : Agents
        },
        {
            path : '/agent/:id',
            name : 'singleAgent',
            component : AgentProfile
        },
        {
            path : '/agency',
            name : 'agency',
            component : Agency
        },
        {
            path : '/agency/:id',
            name : 'SingleAgency',
            component : AgencyProfile
        },
        {
            path : '/property',
            name : 'property',
            component : Properties,
        },
        {
            path : '/property/:id',
            name : 'SingleProperty',
            component : SingleProperty
        },
        {
            path : '/add-property',
            name : 'addProperty',
            component : AddProperty
        },
        {
            path : '/add-property/:id',
            name : 'addPropertyById',
            component : AddProperty
        },
        {
            path : '/about',
            name : 'about',
            component : AboutUs
        },
        {
            path : '/profile',
            name : 'profile',
            component : Profile,
            children :[
                {
                    path : '',
                    component : EditProfile
                },
                {
                    
                    path : 'social',
                    component : SocialProfile
                },
                {
                    
                    path : 'properties',
                    component : MyProperties
                },
                {
                    path : 'favorite-property',
                    component : FavoriteProperty
                },
                {
                    path : 'register-agency',
                    name:"addProperty",
                    component : MyAgency
                },
                {
                    path : 'agency-info',
                    name:"updateProperty",
                    component : MyAgency
                },
            ]
        },
        {
            path : '/contact',
            name : 'contact',
            component : ContactUs
        },
        {
            path : '/*',
            component : ErrorPage
        }
    ],
    scrollBehavior (to) {
        if(to.name === 'property'){
            return { x : 0, y: 200,behavior: 'smooth',}
        }
        return { x: 0, y: 0 ,behavior: 'smooth',}
    }
})

myRouter.beforeEach((to,from,next) => {
    const token = localStorage.getItem("userToken")
    if(token && !store.state.isLogin){
        store.commit('setIsLogin',true)
    }
    console.log(from.fullPath);
    if((to.fullPath.startsWith('/profile') ) && !store.state.isLogin){
        next({name : 'home'})
    } else {
        next()
    }
})

export default myRouter
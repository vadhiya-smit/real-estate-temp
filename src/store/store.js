import Vue from "vue";
import Vuex from "vuex"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer : function(state){
        return {
            agents : state.agents ,
            property : state.property,
            agencies : state.agencies,
            searchFields : state.searchFields,
            features : state.features,
            widgets : state.widgets
        }
    }
  })
  
const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    state : {
        signUpForm : {
            fullName : "",
            email : "",
            password : "",
        },
        isLogin : false ,
        user : {},
        otp : {},
        userRole : 0,
        agents : [],
        property : [],
        agencies :  [],
        searchFields : {},
        features : [],
        widgets : []
        
    },
    mutations : {
        setSignUpForm(state,data){
            state.signUpForm = {...data}
        },
        setOtp(state,otp){
            state.otp = otp
        },
        setIsLogin(state, value){
            state.isLogin = value
        },
        setUser(state,user){
            state.user = user
        },
        setUserRole(state,userRole){
            state.userRole = userRole
        },
        addData(state,data){
            state.widgets = data
        },
        addAgent(state,data){
            state.agents = [...state.agents,data]
        },
        addProperty(state,data){
            state.property = [...state.property,data]
        },
        addAgency(state,data){
            state.agencies = [...state.agencies,data]
            state.agents = state.agents.map(item => {
                if(item._id == data.agentId){
                    const temp = {...item,agencyId : data._id,role : 3,parentId : ""}
                    localStorage.setItem('user',JSON.stringify(temp))
                    state.user = {...temp}
                    return temp
                } else {
                    return item
                }
            })
        },
        updateAgency(state,data){
            state.agencies = state.agencies.map(item => {
                if(item._id == data._id){
                    return {...item,...data}
                } else {
                    return item
                }
            })
        },
        updateProperty(state,data){
            state.property = state.property.map(item => {
                if(item._id == data._id){
                    const temp = {...item,...data}
                    return temp
                } else {
                    return item
                }
            })
        },
        updateAgentProfile(state,data){
            state.agents = state.agents.map(item => {
                if(item._id == data._id){
                    const temp = {...item,...data}
                    state.user = temp
                    localStorage.setItem('user',JSON.stringify(temp))
                    return temp
                } else {
                    return item
                }
            })
        }
    },
    getters :{
        userData(state){
            return state.user
        },
        getUserRole(state) {
            return state.userRole;
        }

    }
}) 

export default store
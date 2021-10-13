<template>
    <form class="mb-0" @submit.prevent="submitLogin">
        <!-- <a href="#" class="btn btn--facebook btn--block"
        ><i class="fa fa-facebook-square"></i>Login with
        Facebook</a
        >
        <div class="or-text">
        <span>or</span>
        </div> -->
        <p class="text-danger" v-if="isError">email id/password is wrong</p>
        <div class="form-group">
            
        <input
            type="email"
            class="form-control"
            name="login-email"
            id="login-email"
            required
            placeholder="Email Address"
            v-model="signIn.email"
        />
        </div>
        <!-- .form-group end -->
        <div class="form-group">
        <input
            type="password"
            class="form-control"
            name="login-password"
            id="login-password"
            placeholder="Password"
            required
            v-model="signIn.password"
        />
        </div>
        <!-- .form-group end -->
        <div class="input-checkbox">
        <label class="label-checkbox">
            <span>Remember Me</span>
            <input type="checkbox" v-model="signIn.remember" />
            <span class="check-indicator"></span>
        </label>
        </div>
        <input
        type="submit"
        class="btn btn--primary btn--block"
        value="Sign In"
        />
        <a href="#" class="forget-password"
        >Forget your password?</a
        >
    </form>
</template>

<script>
//import UserServices from '../../services/UserServices';
export default {
    data(){
        return {
            signIn : {
                email : "",
                password : "",
                remember : ""
            },
            isError : false
        }
    },
    methods: {
        async submitLogin(){
            console.log(this.signIn);
            /* try {
                const res = await UserServices.loginUser(this.signIn)
                localStorage.setItem('userToken',res.data.token)
                this.$store.commit('setIsLogin',true)
                this.$store.commit('setUser',res.data.user)
                this.signIn = {
                    email : "",
                    password : "",
                    remember : ""
                },
                this.isError = false
                window.alert('login succesful')
                this.$emit('closeModal')
            } catch (error) {
                const status = error.response.status
                console.log(error.message); 
                if(status == 401){
                    this.isError = true
                }
            } */
            const agent = this.$store.state.agents.find(item => item.email == this.signIn.email && item.password == this.signIn.password)
            if(agent){
                localStorage.setItem('userToken',"res.data.token")
                this.$store.commit('setIsLogin',true)
                this.$store.commit('setUser',agent)
                localStorage.setItem('user',JSON.stringify(agent))
                this.$emit('closeModal')
            } else {
                this.isError = true
            }
        }
    }
}
</script>

<style>

</style>
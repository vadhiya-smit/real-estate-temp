<template>
<fragment>

    <form class="mb-0" @submit.prevent="submitSignup">
        <!-- <a href="#" class="btn btn--facebook btn--block"
            ><i class="fa fa-facebook-square"></i>Register
            with Facebook</a
        >
        <div class="or-text">
            <span>or</span>
        </div> -->
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            required
            v-model="signUp.fullName"
            />
           
        </div>
        <!-- .form-group end -->
        <div class="form-group">
            <input
            type="email"
            class="form-control"
            name="register-email"
            id="register-email"
            placeholder="Email Address"
            required
            v-model="signUp.email"
            />
            <p class="text-danger" v-if="isSubmitted && error.email.length > 0">{{error.email}}</p>
        </div>
        <!-- .form-group end -->
        <div class="form-group">
            <input
            type="password"
            class="form-control"
            name="register-password"
            id="register-password"
            placeholder="Password"
            required
            v-model="signUp.password"
            />
        </div>
        <!-- .form-group end -->
        <div class="input-checkbox">
            <label class="label-checkbox">
            <span
                >I agree with all
                <a href="#">Terms & Conditions</a></span
            >
            <input type="checkbox" v-model="agree" />
            <span class="check-indicator"></span>
            </label>
             <p v-if="!agree && isSubmitted" class="text-danger">Please agree</p>
        </div>
        <input
            type="submit"
            class="btn btn--primary btn--block"
            value="Register"
        />
    </form>


</fragment>
</template>

<script>
import UserServices from '../../services/UserServices'

export default {
    data(){
        return {
            signUp : {
                fullName : "",
                email : "",
                password : "",
            },
            agree : false,
            error: {
                fullName : "",
                email : "",
                password : "",
                agree : ""
            },
            isSubmitted : false
        }
    },
    methods: {
        async submitSignup(){
            this.isSubmitted = true
            if(this.agree){
                try {
                    const res = await UserServices.signupUser(this.signUp)    
                    localStorage.setItem('userToken',res.data.token)
                    this.signUp = {
                        fullName : "",
                        email : "",
                        password : "",
                    }
                    this.$store.commit('setIsLogin',true)
                    this.$store.commit('setUser',res.data.user)
                    this.agree = ""
                    this.isSubmitted = false
                    this.$emit('closeModal') 
                    window.alert("Signup Succesful")

                } catch (err) {
                    const status = err.response.status
                    if(status == 409){
                        this.error.email = "email id exist.. please login"
                    } else if(status == 500){
                        console.log("internel server error while sign up");
                    }
                }
            } 
        }
    }
}
</script>

<style>

</style>
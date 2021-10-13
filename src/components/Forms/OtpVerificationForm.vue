<template>
    <form class="mb-0" @submit.prevent="submitOtp">
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            name="opt-input"
            id="opt-input"
            placeholder="Eenter OTP"
            required
            v-model="otp"
            />
        </div>
        <input
            type="submit"
            class="btn btn--primary btn--block"
            value="Verify OTP"
        />

        <div>
            resend in {{timer}} s
        </div>
    </form>
</template>

<script>
import UserServices from '../../services/UserServices';
export default {
    data(){
        return {
            otp : "",
            initialTimer : 60
        }
    },
    computed : {
        timer(){
            
            setInterval()
            return this.timer
        }
    },
    methods: {
        async submitOtp(){
            if(this.$store.state.otp == this.otp){
                const res = await UserServices.signupUser(this.$store.state.signUpForm)
                localStorage.setItem('userToken',res.data)
                this.otp = ""
                this.$emit('closeOtp')
            }
        }
    }
}
</script>

<style>

</style>
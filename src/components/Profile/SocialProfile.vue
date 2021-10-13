<template>
    <form class="mb-0"  @submit.prevent="submitEdit">
        <div class="text-right" >
            <a class="btn btn--primary btn-file m-10" v-if="isEdit" @click="clickIsEdit">edit </a>
            <a class="btn btn-danger btn-file m-10" v-else @click="cancelEdit" >cancel </a>
        </div>
        <div class="form-box">
            <h4 class="form--title">Social Profiles</h4>
            <div class="form-group">
                <label for="facebook-url">Facebook</label>
                <input type="text" class="form-control" name="facebook-url" id="facebook-url" placeholder="Facebook URL" :disabled="isEdit" v-model="form.socialLinks.facebook">
            </div>
            <!-- .form-group end -->
            <div class="form-group">
                <label for="twitter-url">twitter</label>
                <input type="text" class="form-control" name="twitter-url" id="twitter-url" placeholder="@Username" :disabled="isEdit" v-model="form.socialLinks.twitter">
            </div>
            <!-- .form-group end -->
            <div class="form-group">
                <label for="google-plus-url">Google+</label>
                <input type="text" class="form-control" name="google-plus-url" id="google-plus-url" placeholder="google-plus URL" :disabled="isEdit" v-model="form.socialLinks.googlePlus">
            </div>
            <!-- .form-group end -->
            <div class="form-group">
                <label for="LinkedIn-url">LinkedIn</label>
                <input type="text" class="form-control" name="LinkedIn-url" id="LinkedIn-url" placeholder="LinkedIn URL" :disabled="isEdit" v-model="form.socialLinks.LinkedIn">
            </div>
            <!-- .form-group end -->
            <div class="form-group">
                <label for="Instagram-url">Instagram</label>
                <input type="text" class="form-control" name="Instagram-url" id="Instagram-url" placeholder="@Username" :disabled="isEdit" v-model="form.socialLinks.instagram">
            </div>
            <!-- .form-group end -->
            <div class="form-group">
                <label for="Pinterest-url">Pinterest</label>
                <input type="text" class="form-control" name="Pinterest-url" id="Pinterest-url" placeholder="@Username" :disabled="isEdit" v-model="form.socialLinks.pinterest"> 
            </div>
            <!-- .form-group end -->
        </div>
        <!-- .form-box end -->
        <input type="submit" value="Save Edits" name="submit" class="btn btn--primary">
    </form>
</template>

<script>
export default {
      data(){
        return {
            isEdit : true , 
            form : {
                firstName : "",
                lastName : "",
                contact: {
                    phone: "",
                    mobile: "",
                    website: "",
                    fax: "",
                    taxNumber: "",
                    languages: [],
                },
                gallery: { profile: "" },
                socialLinks: { facebook: "#", twitter: "#", googlePlus: "#", pinterest: "#" },
                _id: "61602503a3edf2a2fe036e95",
                title: "",
                email: "",
                desc:
                    "",
                isActive: "",
                role: 3,

            }
        }
    },    
    created(){
        const user = this.$store.state.user
        this.form = {...this.form, ...user}
    },
    methods : {
        clickIsEdit(){
            this.isEdit = !this.isEdit
        },
        cancelEdit(){
            this.isEdit = !this.isEdit
            const user = this.$store.state.user
            this.form = {...this.form, ...user}
        },
        submitEdit(){
            this.$store.commit('updateAgentProfile',this.form)
        }
    }
}
</script>

<style>

</style>
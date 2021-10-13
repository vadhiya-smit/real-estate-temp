<template>

       <form class="mb-0" @submit.prevent="submitEdit">
            <div class="text-right">
                <a class="btn btn--primary btn-file m-10" v-if="isEdit" @click="clickIsEdit">edit </a>
                <a class="btn btn-danger btn-file m-10" v-else @click="cancelEdit" >cancel </a>
            </div>
            <div class="form-box">
                <h4 class="form--title">Profile Picture</h4>
                <div class="upload--img-area">
                    <div class="preview--img">
                        <img :src="form.gallery.profile" id="output--img" class="output--img" >
                    </div>
                    <a class="btn btn--primary btn-file ml-30">Upload
                        <input type="file"  style="border : 1px solid red">
                        <input type="file" accept="image/*" style="border : 1px solid red" @change="(event)=>loadFile(event)" > 
                    </a>
                    <a href="#" class="btn delete--img"><i class="fa fa-times"></i>Delete</a>
                   
                </div>
            </div>
            <div class="form-box">
                <h4 class="form--title">Personal Details</h4>
                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" class="form-control" name="first-name" id="first-name" v-model="form.firstName" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" class="form-control" name="last-name" id="last-name" v-model="form.lastName" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="email-address">Email Address</label>
                    <input type="email" class="form-control" name="email-address" id="email-address" v-model="form.email" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="phone-number">Phone</label>
                    <input type="text" class="form-control" name="phone-number" id="phone-number" v-model="form.contact.phone" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="about-me">About Me</label>
                    <textarea class="form-control" name="about-me" id="about-me" rows="2" v-model="form.desc" :disabled="isEdit"></textarea>
                </div>
                <!-- .form-group end -->
            </div>
          <!-- .form-box end -->
            <div class="form-box">
                <h4 class="form--title">Change Password</h4>
                <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" class="form-control" name="password" id="password" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="confirm-password">confirm password</label>
                    <input type="password" class="form-control" name="confirm-password" id="confirm-password" :disabled="isEdit">
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
            window.alert('data save succesfully')
            this.isEdit = !this.isEdit
        },
        loadFile(event) {
            console.log("event");
            var reader = new FileReader();
            reader.onload = function() {
                console.log(reader.result);
                var output = document.getElementById('output--img');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
</script>

<style>

</style>
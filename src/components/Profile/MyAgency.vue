<template>

       <form class="mb-0" @submit.prevent="submitEdit">
            <div class="text-right" v-if="$route.name == 'updateProperty'">
                <a class="btn btn--primary btn-file m-10" v-if="isEdit" @click="clickIsEdit">edit </a>
                <a class="btn btn-danger btn-file m-10" v-else @click="cancelEdit" >cancel </a>
            </div>
            <div class="form-box">
                <h4 class="form--title">Agency logo</h4>
                <div class="upload--img-area">
                    <div class="preview--img">
                        <img :src="form.gallery.profile" id="output--img" class="output--img" >
                    </div>
                    <a class="btn btn--primary btn-file ml-30" style="cursor: pointer;">Upload
                        <input type="file"  style="border : 1px solid red">
                        <input type="file" accept="image/*" style="border : 1px solid red" @change="(event)=>loadFile(event)"  :disabled="isEdit"> 
                    </a>
                    <a href="#" class="btn delete--img" v-if="!isEdit"><i class="fa fa-times"></i>Delete</a>
                   
                </div>
            </div>
            <div class="form-box">
                <h4 class="form--title">Agency Details</h4>
                <div class="form-group">
                    <label for="first-name">Title</label>
                    <input type="text" class="form-control" name="first-name" id="first-name" v-model="form.title" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="last-name">Location</label>
                    <input type="text" class="form-control" name="last-name" id="last-name" v-model="form.location" :disabled="isEdit">
                </div>
                <!-- .form-group end -->
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="email-address">Email Address</label>
                            <input type="email" class="form-control" name="email-address" id="email-address" v-model="form.email" :disabled="isEdit">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="phone-number">Phone</label>
                            <input type="text" class="form-control" name="phone-number" id="phone-number" v-model="form.contact.phone" :disabled="isEdit">
                        </div>
                    </div>
                </div>

                 <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="fax">Fax</label>
                            <input type="text" class="form-control" name="fax" id="fax" v-model="form.contact.fax" :disabled="isEdit">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="website">Website</label>
                            <input type="text" class="form-control" name="website" id="website" v-model="form.contact.website" :disabled="isEdit">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="taxNumber">Tax Number</label>
                            <input type="text" class="form-control" name="taxNumber" id="taxNumber" v-model="form.contact.taxNumber" :disabled="isEdit">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label for="license">License</label>
                            <input type="text" class="form-control" name="license" id="license" placeholder="ex : RE511U0" v-model="form.contact.license" :disabled="isEdit">
                        </div>
                    </div>
                </div>
                
                <!-- .form-group end -->
                <div class="form-group">
                    <label for="about-me">Description</label>
                    <textarea class="form-control" name="about-me" id="about-me" rows="2" v-model="form.desc" :disabled="isEdit"></textarea>
                </div>
                <!-- .form-group end -->
            </div>
          <!-- .form-box end -->
          <!-- .form-box end -->
            <input type="submit" value="Save Edits" name="submit" class="btn btn--primary">
      </form> 
 
</template>

<script>
import {  v4 as uuidv4 } from 'uuid/dist';
export default {
    data(){
        return {
            isEdit : true , 
            form : {
                /* _id: "61602503a3edf2a2fe036e95", */
                title : "",
                location : "",
                email : "",
                contact: {
                    phone: "",
                    mobile: "",
                    website: "",
                    fax: "",
                    taxNumber: "",
                    languages: [],
                },
                gallery: { profile: "/assets/images/agency/2.png" },
                socialLinks: { facebook: "", twitter: "", googlePlus: "", pinterest: "" },
                desc:"",
                agentId : ""
            }
        }
    },    
    created(){
        this.setInitials()
    },
    methods : {
        clickIsEdit(){
            this.isEdit = !this.isEdit
        },
        cancelEdit(){
            this.isEdit = !this.isEdit
            this.setInitials()
        },
        submitEdit(){
            if(this.$route.name == 'updateProperty'){
                this.$store.commit('updateAgency',this.form)
            } else {
                this.form._id = uuidv4()
                this.$store.commit('addAgency',this.form)
            }
            window.alert('data save succesfully')
            this.isEdit = !this.isEdit
        },
        setInitials(){
            const user = this.$store.state.user
            if(this.$route.name == 'addProperty'){
                this.form.agentId = user._id
                this.form.contact = {...this.form.contact, ...user.contact}
                this.form.socialLinks = {...this.form.socialLinks, ...user.socialLinks}
                this.form.email = user.email
            } else {
                this.form = {...this.$store.state.agencies.find(item => item._id == user.agencyId)}
            }
        },
        loadFile(event) {
            var reader = new FileReader();
            let form = this.form
            reader.onload = function() {
                var output = document.getElementById('output--img');
                output.src = reader.result;
                form.gallery.profile = reader.result
            };
            this.form = {...form}
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
</script>

<style>

</style>
<template>
  <fragment>
      
        <!-- Page Title #1
============================================ -->

        <Hero url="/assets/images/page-titles/1.jpg" title="Add Property" :breadcrumb="['home', 'Add Property']" />
        
        <!-- #page-title end -->

        <!-- #Add Property
============================================= -->
        <section id="add-property" class="add-property">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">

                        <form class="mb-0" @submit.prevent="submitAppProperty">
                            <div class="form-box">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="form--title">Property Description</h4>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <label for="property-title">Property Title*</label>
                                            <input type="text" class="form-control" name="property-title" id="property-title" required v-model="form.title">
                                        </div>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <label for="property-description" >Property Description*</label>
                                            <textarea class="form-control" name="property-description" id="property-description" rows="2" required v-model="form.description.desc"></textarea>
                                        </div>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="select-type">Type</label>
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-type" id="select-type" required v-model="form.description.type">
                                                    <option value="">Any Type</option>
                                                    <option :value="type.type" v-for="type of searchFields.types" :key="type.id" >{{type.type}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="select-status">Status</label>
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-status" id="select-status" required v-model="form.description.status">
                                                    <option value="">Any Status</option>
                                                    <option :value="st.status" v-for="st of searchFields.status" :key="st.id" >{{st.status}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="location" >Location</label>
                                            <input type="text" class="form-control" name="location" id="location" required v-model="form.location">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Bedrooms">Bedrooms</label>
                                            <!-- <input type="text" class="form-control" name="Bedrooms" id="Bedrooms" v-model="form.description.beds"> -->
                                            <select name="select-beds" id="select-beds" required v-model="form.description.beds">
                                                <option value="">Beds</option>
                                                <option :value="bed.bed" v-for="bed of searchFields.beds" :key="bed.id" >{{bed.bed}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Bathrooms">Bathrooms</label>
                                            <!-- <input type="text" class="form-control" name="Bathrooms" id="Bathrooms" v-model="form.description.baths"> -->
                                            <select name="select-baths" id="select-baths" required v-model="form.description.baths">
                                                <option value="">Baths</option>
                                                <option :value="bath.bath" v-for="bath of searchFields.baths" :key="bath.id" >{{bath.bath}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Floors">Floors</label>
                                            <input type="text" class="form-control" name="Floors" id="Floors" required v-model="form.description.floors">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Garages">Garages</label>
                                            <input type="text" class="form-control" name="Garages" id="Garages" required v-model="form.description.garage">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Area">Area</label>
                                            <input type="text" class="form-control" name="Area" id="Area" required placeholder="sq ft" v-model="form.description.area">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                   <!--  <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Size">Size</label>
                                            <input type="text" class="form-control" name="Size" id="Size" placeholder="sq ft" >
                                        </div>
                                    </div> -->
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Sale-Rent-Price">Sale or Rent Price*</label>
                                            <input type="text" class="form-control" name="Sale-Rent-Price" id="Sale-Rent-Price" required v-model="form.price">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <!-- <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Before-Price-Label">Before Price Label</label>
                                            <input type="text" class="form-control" name="Before-Price-Label" id="Before-Price-Label" placeholder="ex: start from" >
                                        </div>
                                    </div> -->
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="After-Price-Label">After Price Label</label>
                                            <input type="text" class="form-control" name="After-Price-Label" id="After-Price-Label" placeholder="ex: monthly" v-model="form.label">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                   <!--  <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Property-ID">Property ID*</label>
                                            <input type="text" class="form-control" name="Property-ID" id="Property-ID">
                                        </div>
                                    </div> -->
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Video-URL">Video URL</label>
                                            <input type="text" class="form-control" name="Video-URL" id="Video-URL" placeholder="Youtube, Vimeo, Dailymotion, etc..">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                </div>
                                <!-- .row end -->
                            </div>
                            <!-- .form-box end -->
                            <div class="form-box">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="form--title">Property Features</h4>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3" v-for="feature of features" :key="feature._id">
                                        <div class="input-checkbox">
                                            <label class="label-checkbox">
                                        <span>{{feature.feature}}</span>
                                        <input type="checkbox" v-model="form.features" :value="{_id : feature._id , feature : feature.feature}">
                                        <span class="check-indicator"></span>
                                    </label>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    
                                    <!-- .col-md-3 end -->
                                </div>
                                <!-- .row end -->
                            </div>
                            <!-- .form-box end -->

                            <div class="form-box">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="form--title">Property Gallery</h4>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-12">
                                        <div id="dZUpload" class="dropzone"></div>
                                    </div>
                                    <!-- .col-md-12 end -->

                                </div>
                                <!-- .row end -->
                            </div>
                            <!-- .form-box end -->

                            <div class="form-box">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="form--title">Property Location</h4>
                                    </div>
                                    <!-- .col-md-12 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="address">Address*</label>
                                            <input type="text" class="form-control" name="address" id="address" placeholder="Enter your property address" required v-model="form.address.street">
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="select-country">Country</label>
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select id="select-country" v-model="form.address.country" required>
                                                    <option value="">Select property country</option>
                                                    <option value="USA" selected>USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="city">City</label>
                                            <input class="form-control" name="city" id="city" v-model="form.address.city" required>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="state">State</label>
                                            <!-- <input type="text" class="form-control" name="state" id="state" v-model="form.address.state"> -->
                                            <select id="select-country" v-model="form.address.state"  required>
                                                <option value="" selected>Select state</option>
                                                <option value="washington" >washington</option>
                                                <option value="florida" selected>florida</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="Zip/Postal-code">Zip/Postal Code</label>
                                            <input type="number" class="form-control" name="Zip/Postal-code" id="Zip/Postal-code" v-model="form.address.zip"  required>
                                        </div>
                                    </div>
                                    <!-- .col-md-4 end -->
                                   <!--  <div class="col-xs-12 col-sm-4 col-md-4">
                                        <div class="form-group">
                                            <label for="neighborhood">Neighborhood</label>
                                            <input type="text" class="form-control" name="neighborhood" id="neighborhood">
                                        </div>
                                    </div> -->
                                    <!-- .col-md-4 end -->
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div id="googleMap" style="width:100%;height:380px;"></div>
                                    </div>
                                    <!-- .col-md-12 end -->
                                </div>
                                <!-- .row end -->
                            </div>
                            <!-- .form-box end -->
                            <input type="submit" value="Save Edits" name="submit" class="btn btn--primary">
                        </form>
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
        </section>
        <!-- #social-profile  end -->
        <Cta />
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script> 
  </fragment>
</template>

<script>
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'
import {  v4 as uuidv4 } from 'uuid/dist';

export default {
  components: { Hero, Cta },
    data(){
        return {
            form : {
                _id: 5234,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/1.jpg"],
                description : {
                    type : "",
                    status : "",
                    beds :   "",
                    baths :  "",
                    area :   "",
                    rooms :  "",
                    floors : "",
                    garage : "",
                    desc :   "",
                },
                address : {
                    street : "",
                    country : "",
                    city : "",
                    state : "",
                    zip : "",
                    
                },
                floorPlans : [{
                    title : "",
                    description : {
                        size : "",
                        rooms : "",
                        baths : "",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId : 1,
                title : "",
                location : "",
                price : "",
                label : "",
                features : []
            },
             searchFields : {
                cities : [],
                types : [],
                status : [],
                beds : [],
                baths : [],
            },
            features : [],
            result : [],
            id : ""
        }
    },
    created(){
        this.searchFields = this.$store.state.searchFields
        this.features = this.$store.state.features
        const id = this.$route.params.id
        this.form = {...this.form,...this.$store.state.property.find(item=>item._id == id)}
        console.log(id);
    },
    methods : {
        submitAppProperty(){
            if(!this.$route.params.id){
                const agentData = this.$store.state.user
                this.form._id = uuidv4();
                this.form.agentId = agentData._id
                this.$store.commit('addProperty',this.form)
                this.$router.push('/profile/properties')
                window.alert('property added')
            } else {
                this.$store.commit('updateProperty',this.form)
                this.$router.push('/profile/properties')
                window.alert('property updated')
            }
        }
    }   
}
</script>

<style>

</style>
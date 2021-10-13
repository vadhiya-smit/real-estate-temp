<template>
<fragment>
    <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="slider--content">
                        <div class="text-center" v-if="isTitle" >
                            <h1>{{title}}</h1>
                        </div>
                        <form class="mb-0" @submit.prevent="submitForm">
                            <div class="form-box search-properties">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group">
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-location" id="select-location" v-model="filter.location">
                                                    <option value="">Any Location</option>
                                                    <option :value="location.location" v-for="location of searchFields.locations" :key="location.id" >{{location.location}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group">
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-type" id="select-type" v-model="filter.type">
                                                    <option value="">Any Type</option>
                                                    <option :value="type.type" v-for="type of searchFields.types" :key="type.id" >{{type.type}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group">
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-status" id="select-status" v-model="filter.status">
                                                    <option value="">Any Status</option>
                                                    <option :value="st.status" v-for="st of searchFields.status" :key="st.id" >{{st.status}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <input type="submit" value="Search" name="submit" class="btn btn--primary btn--block">
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                        <div class="form-group">
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-beds" id="select-beds" v-model="filter.beds">
                                                    <option value="">Beds</option>
                                                    <option :value="bed.bed" v-for="bed of searchFields.beds" :key="bed.id" >{{bed.bed}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                        <div class="form-group">
                                            <div class="select--box">
                                                <i class="fa fa-angle-down"></i>
                                                <select name="select-baths" id="select-baths" v-model="filter.baths">
                                                    <option value="">Baths</option>
                                                    <option :value="bath.bath" v-for="bath of searchFields.baths" :key="bath.id" >{{bath.bath}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-6 col-md-6 option-hide">
                                        <div class="filter mb-30">
                                            <p>
                                                <label for="amount"  >Price Range: </label>
                                                <input id="amount" type="text" class="amount" v-model="filter.range" >
                                            </p>
                                            <div class="slider-range"></div>
                                        </div>
                                    </div>
                                    <!-- .col-md-3 end -->
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <a href="#" class="less--options">More options</a>
                                    </div>
                                </div>
                                <!-- .row end -->
                            </div>
                            <!-- .form-box end -->
                        </form>
                    </div>
                </div>
                <!-- .container  end -->
            </div>
            <!-- .slider-text end -->
        </div>
</fragment>
</template>

<script>
export default {
    props:['title'],
    computed : {
        isTitle(){
            if(this.title && this.title.length > 0){
                return true
            }
            return false
        },
        
    },
    data(){
        return {
            searchFields : {
                cities : [],
                types : [],
                status : [],
                beds : [],
                baths : [],
            },
            filter : {
                location : '',
                type : '',
                status : '',
                beds : '',
                baths : '',
                range : ''
            },
            features : []
        }
    },
    created(){
        this.searchFields = this.$store.state.searchFields
        this.features = this.$store.state.features
    },
    methods:{
        submitForm(){
            let query={}
            for(let i in this.filter){
                if(!this.filter[i] == ""){
                    query[i] = this.filter[i]
                }
            }
            if(query.range == '$0 - $500000'){
                delete query.range
            }
            this.$router.replace({path : '/property', query : {...query}})
        }
    }
}
</script>

<style>

</style>
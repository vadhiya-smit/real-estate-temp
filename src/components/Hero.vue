<template>
  <fragment>
      <section id="page-title" class="page-title bg-overlay bg-overlay-dark2">
            <div class="bg-section">
                <img :src="url" alt="Background" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                        <div class="title title-1 text-center">
                            <div class="title--content">
                                <div class="title--heading">
                                    <h1>{{title}}</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li v-for="i of breadcrumbLink" :key="i" ><router-link to="/">{{i}}</router-link></li>
                                    <li class="active">{{breadcrumbTail[0]}}</li>
                                </ol>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <!-- .title end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
        </section>
  </fragment>
</template>

<script>

export default {
    props : ['url','title','breadcrumb'],
    computed : {
        breadcrumbLink(){
            return this.breadcrumb.slice(0,-1)
        }, breadcrumbTail(){
            return this.breadcrumb.slice(-1)
        }
    },
}
</script>

<style>

</style>
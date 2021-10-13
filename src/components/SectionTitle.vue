<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2  mb-70" :class="isCenter ? 'text-center' : ''">
                <h2 class="heading--title">{{title}}</h2>
                <p class="heading--desc">{{desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['title', 'desc', 'isCenter']
}
</script>

<style>

</style>
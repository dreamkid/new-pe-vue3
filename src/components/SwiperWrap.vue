<template>

        <div class="swiper mr-t-37 clearfix">
<slot></slot>
        </div>
    
</template>
<style scoped>
.clearfix:before {
    content: '.';
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
    clear:both;
}
</style>
<script>
export default {
    
}
</script>
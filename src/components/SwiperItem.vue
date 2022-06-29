<template>
<div :class="'item swiper-back-'+theme">
    <img class="item-img back-color" :src="imgUrl" alt="">
    <div class="font-15  mr-t-20 font-color1">Picture</div>
    <div class="font-10  mr-t-9 font-color2">Local screencast</div>
</div>
</template>

<script>
// let imgArr=[{
// type:'picture',}];
// console.log(imgArr);
// console.log(8585858);
// import a from '../assets/images/icon_picture.png'
// console.log(a)

// import('../assets/images/icon_picture.png').then(res => {
//     console.log('------------------')
//     console.log(res.default);

//     imgUrl = res.default;
//     imgArr.push({
//         imgUrl:imgUrl,
//         name:'picture'
//     })
// })
// import('../assets/images/icon_book.png').then(res => {
//     console.log('------------------')
//     console.log(res.default);

//     imgUrl = res.default;
//     imgArr.push({
//         imgUrl:imgUrl,
//         name:'book'
//     })
// })
console.log(imgArr);
export default {
    props: {
        theme: String,
        icon: String,
    },
    data() {
        return {
            imgUrl: a
        }
    },
    watch: {
        imgUrl: function () {
            console.log(999);
        }
    },
    created() {
import a from '../assets/images/icon_picture.png'
console.log(a);
    //    this.imgUrl= imgArr.find(i=>(i.name==this.icon))
    //     console.log(this.theme);

    },
    mounted() {

    }
}
</script>

<style scoped>
/* .item:last-of-type{
    margin:0 !important;
} */

.item {
    width: 13.4rem;
    padding: 2.7rem 0;
    text-align: center;
    border-radius: 3rem;
    box-sizing: border-box;
    /* margin-right: 0.8rem; */
}

.item-img {
    display: block;
    width: 6.2rem;
    height: 6.2rem;
    padding: 1.6rem;
    box-sizing: border-box;
    border-radius: 1.5rem;
    margin: 0 auto;
}

.swiper-back-purple {
    background-color: #7565fb;
}

.swiper-back-purple .back-color {
    background-color: #d2d3ff;
}

.swiper-back-purple .font-color1 {
    color: #ebebff;
}

.swiper-back-purple .font-color2 {
    color: #8c84fd;
}

.swiper-back-white {
    background-color: white;
}

.swiper-back-white .back-color {
    background-color: #ffebdc;
}

.swiper-back-white .font-color1 {
    color: #ffebdc;
}

.swiper-back-white .font-color2 {
    color: #aeb2c3;
}

.swiper-back-lavender {
    background-color: #eceaff;
}

.swiper-back-lavender .back-color {
    background-color: #c7aff7;
}

.swiper-back-lavender .font-color1 {
    color: #b6bac9;
}

.swiper-back-lavender .font-color2 {
    color: #b6bac9;
}
</style>

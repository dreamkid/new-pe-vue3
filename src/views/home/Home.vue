<template>
<div class="home overflow">
    <div class="title warp flex-between">
        <img class="icon-back" src="../../assets/images/icon_back.png" alt="">
        <div class="font-16 title-text">Local screencast</div>
        <div class="icon-back"> </div>
    </div>
    <div class="search warp">
        <input class="search-input" placeholder="search" type="text">
        <img class="icon-size" src="../../assets/images/icon_search.png" alt="">
    </div>
    <div class="tip  warp mr-t-37">
        <img class="img-sit" src="../../assets/images/sit.png" alt="">
        <div class="tip-text font-20">Mirror guide</div>
        <div class="tip-text font-10">common problem</div>
    </div>
    <div class="swiper mr-t-37">
        <div class="item">
            <img class="item-img item-1" src="../../assets/images/icon_picture.png" alt="">

            <div class="font-15  mr-t-20 font-color-white">Picture</div>
            <div class="font-10  mr-t-9 font-color-purple">Local screencast</div>
        </div>
        <div class="item">
            <img class="item-img item-2" src="../../assets/images/icon_book.png" alt="">
            <div class="font-15 mr-t-20 font-color-black">file</div>
            <div class="font-10 mr-t-9 font-color-gray">Local document</div>
        </div>
        <div class="item">
            <img class="item-img item-3" src="../../assets/images/icon_picture.png" alt="">
            <div class="font-15 mr-t-20 font-color-gray">Picture</div>
            <div class="font-10 mr-t-9 font-color-black">Local screencast</div>
        </div>
        <div class="item">
            <img class="item-img item-1" src="../../assets/images/icon_picture.png" alt="">
            <div class="font-15 mr-t-20 font-color-black">Picture</div>
            <div class="font-10  mr-t-9 font-color-black">Local screencast</div>
        </div>
    </div>
    <div class="foot  warp mr-t-37">
        <div class="foot-top  flex-between">
            <img class="foot-top-img" src="../../assets/images/yuan1.png" alt="">
            <div class="foot-text">
                <div class="text-top font-19">
                    Screen mirroring aaaaaaaaaa
                </div>
                <div class="text-top font-10 ">
                    Mobile screen sharing to TV
                </div>
            </div>
        </div>
        <div class="foot-bottom flex-between">
            <div class="button-item flex-center"><img class="foot-icon" src="../../assets/images/ytwo.png" alt="">Time out</div>
            <div class="button-item flex-center"><img class="foot-icon" src="../../assets/images/X.png" alt="">End</div>
        </div>
    </div>
</div>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

.home {
    height: 100vh;
    box-sizing: border-box;
    padding: 2.4rem 0;
    background-color: #dbcbf7;
}

.title {
    padding: 1.8rem 0;
}

.title-text {
    color: #445068;
    font-weight: 700;
}

.icon-back {
    width: 2.1rem;
    height: 2.1rem;

}

.search {
    display: flex;
    background-color: #efefff;
    box-sizing: border-box;
    border-radius: 2.3rem;
    padding: 2.2rem 2rem;
}

.search-input {
    width: 100%;
    background-color: #efefff;
    border: none;
    outline: none;
    font-size: 1.6rem;
}

input:-moz-placeholder {

    color: #999;

}

input:-ms-input-placeholder {

    color: #999;

}

input::-webkit-input-placeholder {

    color: #999;

}

.tip {
    background-color: #eceaff;
    border-radius: 5rem;
    position: relative;
    padding: 2.8rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.img-sit {
    height: 11.4rem;
    width: 9.5rem;
    position: absolute;
    left: 2.2rem;
    bottom: 0;
}

.tip-text {
    padding-left: 13.2rem;
}

.swiper {
    padding: 0 2rem;
    overflow-x: scroll;
    display: flex;
    /* box-sizing: border-box; */
    /* gap: 0 1.6rem;
    -ms-gap: 0 1.6rem;
    -webkit-gap: 0 1.6rem;
   -moz-gap: 0 1.6rem;
   -o-gap:0 1.6rem; */
}

.item:nth-child(1) {
    background-color: #7469fb;
}

.item:nth-child(2) {
    background-color: white;
}

.item:nth-child(3) {
    background-color: #eceaff;
}

.item:nth-child(4) {
    background-color: #7469fb;
}

.item:last-of-type{
    margin:0 !important;
}

.item {
    min-width: 13.4rem;
    padding: 2.7rem 0;
    text-align: center;
    border-radius: 3rem;
    box-sizing: border-box;
    margin-right: 0.8rem;

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

.item-1 {
    background-color: #d2d3ff;
}

.item-2 {
    background-color: #ffebdc;
}

.item-3 {
    background-color: #bcbafc;
}

.font-color-white {
    color: #ebebff;
}

.font-color-purple {
    color: #8c84fd;
}

.font-color-black {
    color: #445068;
}

.font-color-gray {
    color: #a6acb9;
}

.foot {
    background-color: #e5e2ff;
    border-radius: 3rem;
}

.foot-top {
    width: 100%;
    background-color: white;
    border-radius: 3rem;
    padding: 3.6rem 2rem;
    box-sizing: border-box;
    gap: 0 1.5rem;
    overflow: hidden;
}

.foot-top-img {
    width: 5.6rem;
    height: 5.6rem;

}

.foot-text {}

.text-top:nth-child(1) {
    padding: 0.4rem 0;
    color: #445068;
    width: 70%;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

}

.text-top:nth-child(2) {
    padding: 0.4rem 0;
    color: #aeb2c3;
    width: 70%;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
}

.foot-bottom {
    padding: 4rem 2rem;
}

.button-item {
    white-space: nowrap;
    width: 13.4rem;
    box-sizing: border-box;
    padding: 1.7rem 2.5rem;
    /* text-align: center;
    justify-content: center; */
    font-size: 1.3rem;
    background-color: white;
    border-radius: 5rem;
    /* gap: 0 0.8rem; */
}

.foot-icon {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0 0.5rem;
}
</style>

<template>
<div class="activity overflow">
    <div class="title warp flex-between">
        <img class="icon-back" src="../../assets/images/icon_back.png" alt="">
        <div class="font-16 title-text">Mirror</div>
        <div class="icon-back"> </div>
    </div>
    <div class="body warp">
        <div class="body-text1 font-20">Strong connection ability</div>
        <div class="body-text2 font-16">Cloud projection</div>
        <img class="body-img" src="../../assets/images/asdas.png" alt="">
    </div>
    <div class="foot">
        <div class="foot-head">
            <div class="foot-title">Remaining time</div>
            <div class="foot-time mr-t-20">
                <div class="num">6</div>
                <div class="num">6</div>
                <div class="num">9</div>
                <div>hour</div>
                <div class="num">3</div>
                <div class="num">8</div>
                <div>minute</div>
            </div>

        </div>
        <div class="foot-main">
            <div class="item ">
                <div class=" flex-between">
                    <div class="item-left">200 minutes in total</div>
                    <div class="item-right">46min</div>

                </div>
                <div class="item-long"></div>
            </div>
            <div class="item ">
                <div class=" flex-between">
                    <div class="item-left">200 minutes in total</div>
                    <div class="item-right">46min</div>

                </div>
                <div class="item-long"></div>
            </div>
            <div class="item">
                <div class=" flex-between">
                    <div class="item-left">200 minutes in total</div>
                    <div class="item-right">46min</div>

                </div>
                <div class="item-long"></div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.activity {
    height: 100vh;
    /* overflow: hidden;
    */
    box-sizing: border-box;
    padding-top: 1.9rem;
    border-radius: 3rem;
    background-color: #d6def7;
}

.title {
    padding: 2.1rem 0;
}

.title-text {
    color: #445068;
    font-weight: 700;
}

.icon-back {
    width: 2.1rem;
    height: 2.1rem;

}

.body {
    position: relative;
    height: 28rem;
    box-sizing: border-box;
    padding: 2.4rem 2.4rem;
    background-color: #7266fa;
    border-radius: 3rem;
    /* background-image: url(../../assets/images/asdas.png);
    background-repeat: no-repeat;
    background-size:32.9rem  24.1rem; */
}

.body-text1 {
    padding: 0.4rem 0;
    color: #efefff;
    z-index: 2;
}

.body-text2 {
    padding: 0.4rem 0;
    color: #bdb5ff;
    z-index: 2;
}

.body-img {
    width: 100%;
}

.foot {
    box-sizing: border-box;
    width: 37.5rem;
    position: absolute;
    bottom: 0;
    padding: 2.5rem;
    background-color: white;
    border-radius: 3rem;
}

.foot-head {
    padding: 2.6rem 0;
    background-color: #e5e2ff;
    border-radius: 2rem 2rem 0 0;
}

.foot-title {
    text-align: center;
    font-weight: 600;
    font-size: 1.7rem;
}

.foot-time {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    gap: 0.3rem;
}

.num {
    background-color: #7266fa;
    padding: 0.6rem 0.7rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
}

.foot-main {
    display: flex;
    flex-direction: column;
    padding: 2.8rem 0;
    gap: 4.2rem 0;
}

.item {
    font-size: 1.4rem;
}

.item-left {
    color: #868ca4;
    font-weight: 600;
}

.item-right {
    color: #9f94f4;
    font-weight: 600;
}

.item-long {
    margin-top: 1.4rem;
    border-top: 3px solid #736bff;
}
</style>

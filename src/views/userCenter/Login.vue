<template>
<div class="login overflow">

    <div class="flex login-back overflow">
        <div class="back"></div>
        <div class="back"></div>
        <div class="back"></div>
        <div class="back"></div>
        <div class="back"></div>
        <div class="back"></div>
    </div>
    <div class="login-body">
        <div class="login-choice ">
            <img src="../../assets/images/icon_choice.png" alt="" class="icon-choice">
        </div>
        <div class="login-title">
            <div class="font">Mirroring Cast screen</div>
            <div class="font2">Real-time screen sharing</div>
        </div>
    </div>
    <div class="login-foot overflow">
        <div class="flex-between">
            <div class="foot-title">
                <div class="font">Please choose</div>
                <div class="font2">Choose a screencast scene</div>
            </div>
            <img class=" icon-size icon-choice vertical-middle" src="../../assets/images/icon_news.png" alt="">
        </div>
        <div class="foot-box">
            <div class="item flex1">
                <img src="../../assets/images/yuan1.png">
                <div class="foot-text flex-column">
                    <div class="font3">Screen Mirroring</div>
                    <div class="font4">Mobile screen sharing to TV</div>
                </div>
            </div>
            <div class="item flex1">
                <img src="../../assets/images/yuan2.png">
                <div class="foot-text flex-column">
                <div class="font3">Online video</div>
                <div class="font4">Cast online videos to TV</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.login{
    height: 100vh;
}

.login-back {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
}

.back {
    width: 100%;
    height: 100%;
}

.back:nth-child(odd) {
    background-color: rgb(112, 101, 250);
}

.back:nth-child(even) {
    background-color: rgb(123, 112, 254);

}

.login-body {
    padding: 0 2.4rem;
    padding-top: 1.5rem;
    z-index: 99;
}

.login-choice {
    width: 1rem;
    height: 1rem;
    padding: 2.9rem 0;
}

.icon-choice {
width: 2rem;
height: 2rem;
}

.login-title {
    /* padding: 0 13px; */
    background-image: url(../../assets/images/icon_watch.png);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 31.4rem;
    margin: 0 1.1rem;
    background-position-y: 2.5rem;
}

.font {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0.5rem 0;
    color: #f6f5fe;
}

.font2 {
    font-size: 1.2rem;
    color: #d2cdfc;
    padding: 0.5rem 0;
}
.font3{
    font-size: 1.8rem;
    font-weight: 700;
    color: #5d6879;
    padding: 0.1rem 0;
}
.font4{
    font-size: 1.2rem;
    /* font-weight: 700; */
    color: #c3c7cf;
padding: 0.1rem 0;
}
.login-foot {
    position: absolute;
    width: 37.5rem;
    bottom: 0;
    box-sizing: border-box;
    background-color: #736ddf;
    /* height: calc(100vh - 419px); */
    padding: 0 2.2rem;
    padding-top: 3.4rem;
    padding-bottom: 2.3rem;


}

.foot-box {
    margin-top: 1.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2rem
}

.item {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 3.7rem 1.9rem;
    background-color: white;
    border-radius: 3rem;
}

.item>img {
    width: 5.7rem;
    height: 5.7rem;
    display: block;
}
.foot-text{
    padding-left: 1.3rem;
}
</style>

<template>

<div class="highlight-card" @mouseover="turnOnAnimations" @mouseout="turnOffAnimations">
    <div class="highlight-card-image-container">
        <div class="highlight-card-image" :style="{animation: zoomIn, background: 'url(' + imageSrc[imageNum] + ') center'}">

        </div>
    </div>
    <div class="highlight-card-text">
        <div class="highlight-card-title">
            <div class="highlighter" :style="{animation: highlight}"></div>
            Prepare To Get There: DIY Duct Tape
        </div>
        <div class="highlight-card-sub-title">
            No boards? No problem!...
        </div>
        <div class="highlight-card-read">
            read
        </div>
    </div>
</div>
</template>


<script>

import tuce from '../assets/tuce.jpg';
import long from '../assets/long.jpg';
import kimo from '../assets/kimo.jpg';

export default {
    props: ['imageNum'],
    data() {
        return {
            highlightOn: `0.4s slideInLeft ease forwards`,
            highlightOff: `0.3s slideOutRight ease-out forwards`,
            highlight: ``,

            zoomIn: '',
            zoomInOff: '0.3s zoomOut ease forwards',
            zoomInOn: `0.3s zoomIn ease forwards`,
            
            imageSrc: [tuce, long, kimo]
        }
    },
    methods: {
        turnOnAnimations() {
            this.highlight = this.highlightOn;
            this.zoomIn = this.zoomInOn;
        },
        turnOffAnimations() {
            this.highlight = this.highlightOff;
            this.zoomIn = this.zoomInOff;

        }
    }
}

</script>

<style lang="scss">
@import '../variables';
 

.highlight-card {
    background: black;
    height: 100%;
    width: 100%;
    cursor: pointer;
} 
.highlight-card-image-container{
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.highlight-card-image{
    height: 100%;
    width: 100%;
    background: url('../assets/tuce.jpg');
    background-position: center;
    background-size: cover;
}

.highlight-card-text{
    padding: 10px 0px 10px 0px;
}
.highlight-card-title{
    overflow: hidden;
    color: $primaryBrownColor;
    font-weight: 700;
    position: relative;
    font-size: 0.9rem;
}
.highlighter {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $highlight;
    transform: translateX(-100%);
    z-index: -1;
}
.highlight-card-sub-title{
    color: $textColor;
    font-size: 0.85rem;
    padding: 5px 0px 10px 0px;
}

.highlight-card-read{
    $color: $primaryBrownColor;
    font-size: 0.55rem;
    letter-spacing: 1px;
    text-transform: uppercase;
}


@keyframes zoomIn {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.05);
    }
}
@keyframes zoomOut {
    from {
        transform: scale(1.05);
    }
    to {
        transform: scale(1);
    }
}
@keyframes slideInLeft{
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
}
@keyframes slideOutRight{
    from {
        transform: translateX(0%);
    }
    to{
        transform: translateX(100%);
    }
}
</style>
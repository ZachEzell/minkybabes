<template>
    <div id="fat-button" 
        @mouseover="currentAnimation = slideInAnimation"
        @mouseout="currentAnimation = slideOutAnimation">

        <div id="fat-button-slider" :style="{animation: currentAnimation}"> I'm a slider</div>

    </div>
   
</template>


<script>
    export default {
        data () {
            return {
                hovered: false,
                slideOutAnimation: `slide-out 0.5s forwards`,
                slideInAnimation: `slide-in 0.2s forwards`,
                currentAnimation: `` 
            }
        }
    }
</script>


<style lang="scss">
    #fat-button{
        width: 275px;
        height: 125px;
        border: 5px solid black;
        overflow: hidden;
    }
    #fat-button-slider{
        width: 100%;
        height: 100%;
        background: rgb(126, 216, 252);
    }
    @keyframes slide-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
    @keyframes slide-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>

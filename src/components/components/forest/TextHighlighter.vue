<template>
    <div class="highlighter-text" 
        @mouseover="turnHighlighterOn" 
        @mouseout="turnHighlighterOff"
        >
        <div class="text-to-highlight" >
            <div 
                class="text-highlighter" 
                :style="{ 
                    animation: textHighLighterPosition, 
                    }">

                    </div>
            <slot></slot>
        </div>
    </div>

</template>


<script>
    export default {
        props: ['highlightWidth'],
        data() {
            return {
                textHighLighterPosition: ``,
                on: `0.3s highlighterSlidesInLeft ease-in forwards`,
                off: `0.3s highlighterSlidesOutRight ease-out forwards`
            }
        },
        methods: {
            turnHighlighterOn(){
                this.textHighLighterPosition = this.on;
            },
            turnHighlighterOff(){
                this.textHighLighterPosition = this.off;
            }
        }
    }

</script>


<style lang="scss">
    @import '../variables';
    .text-to-highlight{
        position: relative;
        z-index: 20;
        color: $primaryBrownColor;
        
    }
    
    .text-highlighter { 
        position: absolute;
        width: 100%;
        height: 100%;
        background: #feeeee;
        z-index: -20;
        transform: translateX(-100%);
    }
    .highlighter-text{
        overflow: hidden;
        cursor: pointer;
        width: 38px;

    }
    @keyframes highlighterSlidesInLeft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    @keyframes highlighterSlidesOutRight{
       from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(100%);
        }     
    }
</style>

<template>
    <div class="sporty-div-upper" @mouseover="playUpAnimation" @mouseout="playOutAnimation">
        <div class="sporty-div-animation-panel" :style="{animation: state}"></div>
   
            
        <div class="sporty-div-image" :style="{background: 'url(' + imageSrc[imageNumber] + ')' }" >
            
        </div>
            <div class="sporty-div-description-box">
                <div class="sporty-div-box-inner">
                    <div class="title">
                        Sale Men
                    </div>
                    <div class="description">
                        <p> Benefit from discout on the snow collection! </p>
                    </div>
                </div>
            </div>
        </div>
</template>
    

<script>
    import joshua from '../assets/joshua.jpg';
    import claude from '../assets/claude.jpg';
    import antony from '../assets/antony.jpg'; 

    export default {
        props: ['imageNumber'],
        data() {
            return {
                on: `panelGoesUp 0.4s ease-in forwards`,
                off: `panelGoesOut 0.4s ease-in forwards`,
                state: '',
                imageSrc: [joshua, claude, antony],
                mountedImage: ''
            }
        },
        methods: {
            playUpAnimation() {
                this.state = this.on;
                console.log('up');
            },
            playOutAnimation(){
                 this.state = this.off;
                 console.log('out');
            },
            imagePath(){

            }
        },
        // mounted(){
        //     this.imageSrc = `require(${this.image})`;
        //     console.log(this.image + 'hi');
        // }
        mounted(){
            console.log(this.image)
            
        }
    }

</script>


<style lang="scss">
@import '../variables';
    .sporty-div-upper{
        border-right: 0.3px solid gray;
        background: white;
        width: 100%;
        height: 95px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        display: flex;
        
        
    }
    .sporty-div-image{
        
        width: 35%;
        height: 75px;
        margin: auto;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin-left: 12px;
        margin-right: 12px;
        
    }
   
  
    .sporty-div-box-inner{
        margin-top: 13%;
    }
    .title{
        text-transform: uppercase;
        font-size: 0.6em;
        font-weight: 700;
        letter-spacing: 2px;
        color: $titleColor;
    }
    .description{
        font-size: 0.7em;
        color: $textColor;
    }
    .sporty-div-animation-panel{
        
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(255,149,0, 0.1);
    }
   



    // .slide-enter{
    //     transform: translateY(0px);
    // }
    // .slide-enter-active{
    //     animation: panelGoesUp 1s forwards;
    // }
    // .slide-enter-to{
    //     transform: translateY(50px);
    // }
    // .slide-leave{
    //     transform: translateY(25px);
    // }
    // .slide-leave-active{
    //    animation: panelGoesOut 1s ease-in forwards;
    // }


    @keyframes panelGoesUp{

        from {
            transform: translateY(0px);
        }
        to{
            transform: translateY(-100%);
        }
    }
    @keyframes panelGoesOut{

        from {
           transform: translateY(100%);
            
        }
        to{
           transform: translateY(0px);
        }
    }
</style>
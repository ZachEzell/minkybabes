<template>
    <div class="vertical-slide-container">
        <div class="scroll-box">
            <div class="scroll-box-items">
                <div 
                    class="scroll-box-item" 
                    v-for=" (v, index) in 5" 
                    :key="index"
                    :style="{backgroundColor: colors[index], 
                             backgroundImage: 'url(' + currentSlideImage + ')'
                    }"
                    >
                    <div class="scroll-box-price">
                       <div class="scroll-box-price-name">
                            <text-highlighter>
                               {{ itemName }}:
                            </text-highlighter>
                       </div>
                       <div class="scroll-box-price-amount">
                           $12.99
                       </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import TextHighlighter from './TextHighlighter.vue';
import womenSlideImage from '../assets/sweater.png';
import menSlideImage from '../assets/leather.png';
import { bus } from '../main';
    export default {
        props: ['featuredImage', 'slideObject'],
        data() {
            return {
                colors: [`#e2e6fb`, `#fbf2e2`, `#fbe2e2`, `#e2fbe9`, `#efe2fb`],
                men: menSlideImage,
                women: womenSlideImage,
                currentSlideImage: menSlideImage,
                itemName: 'Ballista'
            }
        },
        components: {
            TextHighlighter
        },
        created(){
            bus.$on('genderClicked', (data)=>{
                if(data == 'men'){
                    this.currentSlideImage = this.men;
                    this.itemName = 'Ballista';
                    return;
                }
                if(data == 'women'){
                    this.currentSlideImage = this.women;
                    this.itemName = 'Gemini';
                    return;
                }
            })
        }
    }

// we need to load an array of images with random background, prices, and links to another page
</script>


<style lang="scss" scoped>
    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    .scroll-box{
        height: 60vw;
        width: 100%;
        
        overflow: scroll;
        
    }
    .scroll-box-items{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .scroll-box-item{
        width: 85%;
        height: 45vw;
        background: rgb(233, 233, 233);
        cursor: pointer;
        margin: 0 auto 0 auto;
        margin-bottom: 120px;
        transition: 0.5s;
    }
    .scroll-box-item:last-of-type{
        margin-bottom: 0px;
    }
    .scroll-box-item{
        background-image: url('../assets/leather.png');
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .scroll-box-price{
        font-size: 0.75em;
        position: absolute;
        top: 110%;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        
    }
    .scroll-box-price-name{
        width: 120%;
        font-weight: 700;
    }
    .scroll-box-price-amount{
        width: 50%;
    }
</style>
<template>
    <div class="main-shop-by-look-container">
        <div class="shop-by-look-header">
            <div class="shop-by-look-header-text">
                 Shop by look
            </div>
        </div>
        <div class="content-shop-by-look-container">
            <div class="featured-image-shop-by-look" :style="{ backgroundImage: 'url(' + featuredImage + ')' }">
                <switch-button id="switch-button"></switch-button>
            </div>
            <div class="shop-by-look-slider">
                <vertical-slide></vertical-slide>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '../main';

import SwitchButton from './SwitchButton.vue';
import VerticalSlide from './VerticalSlide.vue';

import womenFeaturedImage from '../assets/cagatay.jpg';
import menFeaturedImage from '../assets/opti-jakob.jpg'
    export default {
        data() {
            return {
                objectForSlide: '',
                featuredImage: menFeaturedImage,
                women: womenFeaturedImage,
                men: menFeaturedImage
            }
        },
        methods: {
        },
        components: {
            SwitchButton,
            VerticalSlide
        },
        created(){
            bus.$on('genderClicked', (data)=>{
                if(data == 'men'){
                    this.featuredImage = this.men;
                    return;
                }
                if(data == 'women'){
                    this.featuredImage = this.women;
                    return;
                }
            })
        }

    }
</script>

<style lang="scss">
    .main-shop-by-look-container{
        height: 60vw;
        width: 92%;
        
        margin: auto;
        
    }
    .shop-by-look-header{
        height: 120px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shop-by-look-header-text{
        font-size: 2.5rem;
        font-weight: 700;
    }
    .content-shop-by-look-container{
        display: flex;
        justify-content: flex-start;
        height: 100%;
    }
    .featured-image-shop-by-look{
        width: 140%;
        height: 100%;
        background: url('../assets/opti-jakob.jpg') no-repeat;
        background-position: 0px 0px;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: flex-end;
        transition: 0.3s;
        transition-delay: 0.1s;

    }
    #switch-button{
        margin-bottom: 65px;
    }
    .shop-by-look-slider{
        width: 70%;
        
        
    }
</style>


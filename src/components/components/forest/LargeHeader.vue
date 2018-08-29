<template>
    <div class="minky-baby" @mousemove="getCoordinates" @mouseover="enterData" @mouseout="exitData">
        <div class="header-title">
            
            <h1> Summer Sale </h1>
        </div>
         <div class="containers">
                <sporty-hover-div imageNumber='0'></sporty-hover-div>
                <sporty-hover-div imageNumber='1'></sporty-hover-div>
                <sporty-hover-div imageNumber='2'></sporty-hover-div>
            </div>
        <div class="minkiest-baby">
            <data-circle 
                :coordinates = "{ x, y }" 
                :position = "{x: 250, y: 270}" 
                timing = "15" 
                price = "39.99"
                :priceCoordinates = "{ x: 40, y: -20 }"
                
                >
            </data-circle>
            <data-circle 
                :coordinates = "{ x, y }" 
                :position = "{x: 200, y: 350}" 
                timing="15" 
                price="25.99"
                :priceCoordinates = "{ x: 50, y: -20 }"
                
                >
            </data-circle>
            <data-circle 
                :coordinates = "{ x, y }" 
                :position = "{x: 100, y: 400}" 
                timing="13" 
                price="24.99"
                :priceCoordinates = "{ x: -40, y: -20 }"
                
                >
            </data-circle>
        </div>


    </div>
</template>

<script>
import InfoCircle from '../components/InfoCircle';
import DataCircle from '../components/DataCircle';
import SportyHoverDiv from '../components/SportyHoverDiv.vue';

export default {
    data() {
        return {
            x: '250',
            y: '270',
            enteredOverlay: false,
            headerTitleSlide: ``,
            headerTitleOn: `1s headerTitleSlideInLeft 0.5s ease-in forwards`
        }
    },
    components: {
        InfoCircle,
        DataCircle,
        SportyHoverDiv
    },
    methods: {
        getCoordinates(event){
            this.x = event.clientX;
            this.y = event.clientY;
           
        },
        enterData(){
            this.enteredOverlay = true;
            
        },
        exitData(){
            this.enteredOverlay = false;
        }
       
    },
    mounted(){
        this.headerTitleSlide = this.headerTitleOn;
    }
}
</script>


<style lang="scss" scoped>
@import '../variables';

    .minky-baby{
        width: 100%;
        height: 705px;
        background: url('../assets/podu.jpg');
        background-size: cover;
        background-position: 60% 10%;
        overflow: hidden;
        position: relative; 
    }
    .header-title{
        color: white;
        font-size: 2.5em;
        position: absolute;
        left: 30%;
        top: 20%;
        height: 90px;
        padding: 10px;
        background: rgba(66, 185, 13, 0.07);
    }
 
    .minkiest-baby{
        width: 350px;
        height: 750px;
        background: url('../assets/miko.png');
        opacity: 1;
        background-size: cover;
        background-position: 50% 50%;
    }
    .containers{
        display: flex;
        width: 90.7%;
        left: 5%;
        top: 80%;
        margin: auto;
        position: absolute;
    }

</style>
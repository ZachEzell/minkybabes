<template>
    <div class="switch-container">
        <div class="switch-floater" :style="{transform: switchFloaterPosition }">

        </div>
        <!-- Left Switch -->
        <div class="switch-button" @mouseover="setFloaterLeft" @mouseout="setNeutralFloater" @click="leftSwitchClicked">
            <div class="switch-text" :style="{color: leftTextColor}">
                Men
            </div>
        </div>
        <!-- Right Switch -->
        <div class="switch-button" @mouseover="setFloaterRight" @mouseout="setNeutralFloater" @click="rightSwitchClicked" >
            <div class="switch-text" :style="{color: rightTextColor}" >
                Women
            </div>
        </div>
    </div>
</template>
<script>
import { bus } from '../main';
    export default {
        data() {
            return {
                leftTextColor: `white`,
                rightTextColor: `#755e21`,
                switchFloaterPosition: ``,
                gender: 'men'
            }
        },
        methods: {
            setFloaterLeft(){
                this.leftTextColor = `white`;
                this.rightTextColor = `#755e21`;
                this.switchFloaterPosition = ``;
            },
            setFloaterRight(){
                this.leftTextColor = `#755e21`;
                this.rightTextColor = `white`;
                this.switchFloaterPosition = `translateX(100%)`;
            },
            setNeutralFloater(){
                if(this.gender == 'men'){
                    this.setFloaterLeft();
                    return;
                }
                if(this.gender == 'women'){
                    this.setFloaterRight();
                    return;
                }
            },
            leftSwitchClicked(){ 
                this.gender = 'men';
                bus.$emit('genderClicked', 'men');
            },
            rightSwitchClicked(){
                this.gender = 'women';
                bus.$emit('genderClicked', 'women');
            }
        }
    }

</script>


<style lang="scss">
@import '../variables';

    .switch-container {
        width: 173px;
        height: 37px;
        border: 1px solid $primaryBrownColor;
        border-top: 2px solid $primaryBrownColor;
        display: flex;
        justify-content: flex-start;
        position: relative;
        cursor: pointer;
        background: white;
        
    }
    .switch-floater{
        width: 50%;
        height: 100%;
        background: $primaryBrownColor;
        position: absolute;
        top:0;
        left: 0;
        transition: 0.3s;
    }
    .switch-button{
        width: 50%;
        height: 100%;
        font-size: 0.55rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        z-index: 51;
      
    
    }
    .switch-text{ 
        z-index: 50;
        color: white;
        transition: 0.3s
    }
    </style>
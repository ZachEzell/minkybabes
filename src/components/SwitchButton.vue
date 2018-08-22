<template>
    <div class="switch-container">
        <div class="switch-floater" :style="{transform: switchFloaterPosition }">

        </div>
        <!-- Left Switch -->
        <div class="switch-button" @mouseover="setFloaterLeft" @mouseout="setNeutralFloater" @click="leftSwitchClicked">
            <div class="switch-text" :style="{color: leftTextColor}">
                <slot name="first-box"></slot>
            </div>
        </div>
        <!-- Right Switch -->
        <div class="switch-button" @mouseover="setFloaterRight" @mouseout="setNeutralFloater" @click="rightSwitchClicked" >
            <div class="switch-text" :style="{color: rightTextColor}" >
                <slot name="second-box"></slot>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                leftTextColor: `white`,
                rightTextColor: `rgb(50,50,93)`,
                switchFloaterPosition: ``,
                gender: 'men'
            }
        },
        methods: {
            setFloaterLeft(){
                this.leftTextColor = `white`;
                this.rightTextColor = `rgb(50,50,93)`;
                this.switchFloaterPosition = ``;
            },
            setFloaterRight(){
                this.leftTextColor = `rgb(50,50,93)`;
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
                this.$emit('optionChange', 'optionOne');
                
            },
            rightSwitchClicked(){
                this.gender = 'women';
                this.$emit('optionChange', 'optionTwo');
            }
        }
    }

</script>


<style >


    .switch-container {
        width: 173px;
        height: 37px;
        border: 1px solid rgb(44,113,216);
        border-top: 2px solid rgb(44,113,216);
        display: flex;
        justify-content: flex-start;
        position: relative;
        cursor: pointer;
        background: white;
        border-radius: 2px;
        
    }
    .switch-floater{
        width: 50%;
        height: 100%;
        background: rgb(44,113,216);
        position: absolute;
        top:0;
        left: 0;
        transition: 0.3s;
    }
    .switch-button{
        width: 50%;
        height: 100%;
        font-size: 0.66rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 51;
    
    }
    #first-box, #second-box{
        color: rgb(23,170,162);
    }
    .switch-text{ 
        z-index: 50;
        color: white;
        transition: 0.3s
    }
    </style>
<template>
<div>

    <div class="sports-dropdown" @mouseover="dropDownOn" @mouseout="dropDownOff">
        <div class="sports-dropdown-animation" :style="{background: activeMenuColor, animation: dropDownAnimation}">
            </div>

         <div class="sports-dropdown-name"  >
            <div :style="{color: textColor}">
                {{ name }}
            </div>
            
            
        </div>
    </div>

    <div class="sports-dropdown-menu" 
        :style="{background: menuColor}"
        v-show="menuWasToggled" 
        @mouseover="dropDownOn" 
        @mouseout="dropDownOff">
    </div> 

    <div class="sports-dropdown-screen"
        v-show="menuWasToggled"
    >

    </div>

</div>
</template>

<script>
    export default {
        props: ['menuColor', 'textColor', 'name'],
        data() {
            return {
                dropDownAnimation: ``,
                dropDownAnimationOn: `1s dropDownAnimationUp forwards`,
                dropDownAnimationOff: `1s dropDownAnimationUp forwards`,
                activeMenuColor: '',
                menuWasToggled: false
            }
        },
        methods: {
            dropDownOn(){
                this.dropDownAnimation = this.dropDownAnimationOn;
                this.activeMenuColor = this.menuColor;
                this.menuWasToggled = true;
            },
            dropDownOff(){
                this.dropDownAnimation = this.dropDownAnimationOff;
                this.activeMenuColor = `transparent`;
                this.menuWasToggled = false;
            }
        }
    }
    
    
</script>

<style lang="scss">
    .sports-dropdown-menu {
        width: 100vw;
        height: 275px;
        position: absolute;
        top: 35px;
        animation: 0.2s menuDropsDown 0.2s forwards;
        z-index: 50;
        left: 0;
        transition: 1s;
        
    }
    .sports-dropdown-name{
        position: absolute;
        width: 100%;
        height: 35px;
        display: flex;
       justify-content: center;
       align-items: center;
        
        
        
    }
    .sports-dropdown-animation{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        min-width: 100%;
        height: 35px;
        transition: 0.4s;
        
        
        
    }
   
    .sports-dropdown {
       min-width: 70px;
       height: 35px;
       position: relative;
       
       
       

    }

    .sports-dropdown-screen{
        position: absolute;
        top: 35px;
        left: 0%;
        width: 100vw;
        height: 100vh;
        background: rgba(117, 94, 33, 0.6);
        // background: rgba(7, 7, 7, 0.7);
        transition: 1s;
        
       
        
    }

    @keyframes dropDownAnimationDown{
        from {
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0%);
        }
    }
    @keyframes dropdownAnimationUp {
        from {
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0%);
        }
    }
    @keyframes menuDropsDown{
        from {
            height: 200px;
        }
        to{
            height: 275px;
        }
    }

</style>
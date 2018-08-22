<template>
    <div id="switch">
        <div id="floater" :style="{transform: floaterPosition}">

        </div>
            <div id="switch-box">
                <!-- <div class="slots"> 
                </div> -->
                <div id="left-box" @click="setToOption1()">
                    <slot name="option1"></slot>
                </div>
                <div id="right-box" @click="setToOption2()">
                    <slot name="option2"></slot>
                </div>  
            </div>
        
    </div>

</template>


<script>
export default {
    data(){
        return{
            selectedOption: '',
            floaterPosition: `translate(0%)`

        }
    },
    methods: {
        setToOption1(){
            this.selectedOption = 'option1';
            this.floaterPosition = `translate(0%)`;
        },
        setToOption2(){
            this.selectedOption = 'option2';
            this.floaterPosition = `translate(100%)`;
        }
    }
}

</script>


<style scoped>
    #switch{
        
        width: 50%;
        
        background: rgba(214, 214, 214, 0.2);
        position: relative;
       
    
        
    }
    #switch-box{
         
        height: 50px;
        display: flex;
        font-size: 0.6em;
       
    }
    #floater{
        
        height: 50px;
        background: rgb(135, 168, 216);
        position: absolute;
        width: 50%;
        transition: 1s;
        transform: translateX(0%);
        
        
        

        
        
    }
    .slots{
        position: absolute;
        
    }
    #left-box{
        width: 100%;
        height: 100%;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
    #right-box{
        width: 100%;
        height: 100%;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
</style>
<template>
    <div id="basic-button">
        <button id="flat-basic-button" :style="{background: buttonColor, color: textColor, padding: padding}">
            <slot></slot>
        </button>

    </div>
</template>


<script>
    export default {
        props: ['btnColor'],
        data() {
            return {
                buttonColor: `none`,
                textColor: `black`,
                padding: `6px 12px 6px 12px`,
                border: `1px solid rgba(61, 61, 61, 0.1)`
            }
        },
        methods: {
            determineColorAtStart(aColor){
               if (aColor == "warning"){
                   this.buttonColor = ``;
                   this.textColor = `black`;
                   this.border= `none`
                   

                   return;
               }
               if (aColor == "info" || aColor == 'blue' ){
                   this.buttonColor = `rgb(32,134,234)`;
                   this.textColor = `white`;
                   return;
               }
            }
        },
        mounted: function(){
            this.determineColorAtStart(this.btnColor);
        }
    }

</script>


<style scoped>
    #flat-basic-button{
        background: none;
        border: 1px solid rgba(61, 61, 61, 0.1);
        padding: 6px 12px 6px 12px;
        transition: 0.2s;
        font-size: 0.6rem;
        border-radius: 10px;
        color: rgb(50,50,93);
        -webkit-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        margin-right: 10px;
        text-transform: uppercase;
        
    }
    
    button:hover{
        cursor: pointer;
    }
    #flat-basic-button:hover{
        
        
        
        transform:translateY(1px);
        box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
        
    }
</style>
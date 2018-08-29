<template>

    <div id="floater">
        
        <div id="new-inventory-item">
            <div id="navigation">
                <customer-navigation></customer-navigation>
            </div>
            <div id="information">
                <div class="new-inventory-item">
                    <h1 id="header">Add new customer</h1>
                </div>
                <div class="new-inventory-item" >
                    <div class="section-title">Customer Information </div>
                    <head-hunter-input placeholder="Name"> </head-hunter-input>
                    <head-hunter-input placeholder="Address"></head-hunter-input>
                    <head-hunter-input placeholder="Brand" ></head-hunter-input>
                </div>
                <div class="new-inventory-item">
                    <div class="section-title">Address </div>
                    <head-hunter-input placeholder="Street" limit-input-to="numbers"></head-hunter-input>
                    <head-hunter-input placeholder="Zip" limit-input-to="numbers"></head-hunter-input>
                    <head-hunter-input placeholder="Rent to own amount" limit-input-to="numbers"></head-hunter-input>
                </div>
            
            
                    <div class="new-inventory-item" v-for="(items, index) in serialInputs" :key="index" v-if="serializedOption ==`optionOne`">
                        <div class="inline" v-if="checked" >
                            <p class="index-number"> {{ index + 1  }}  </p>
                            <head-hunter-input :default-value="items.serialNumber"></head-hunter-input>
                        </div>
                        <div class="inline" v-if="!checked" >
                            <p class="index-number"> {{ index + 1  }}  </p>
                            <head-hunter-input ></head-hunter-input>
                        </div>      
                    </div>
                
                <div class="buttons">
                    <button id="contract-submit-button"> Add Customer </button>
                    <button id="cancel" @click="emitCancel"> Cancel </button> 
                </div>
            </div>
            
            
        </div>
       
    </div>

</template>


<script>
    import HeadHunterInput from './HeadHunterInput.vue';
    import SwitchButton from './SwitchButton.vue';
    import Switch from './Switch.vue';
    import { generateProductKey, debounce } from '../utils/helper.js';
    import CustomerNavigation from './CustomerNavigation.vue';

    export default {
    
        data() {
            return {
                serialInputs: [],
                numberOfSerialInputs: 1,
                serializedOption: 'optionOne',
                checked: '',
            }
        },
        components: {
            HeadHunterInput,
            SwitchSelector: Switch,
            SwitchButton,
            CustomerNavigation
        },
        methods: {
            generateSerialInputs(event){
               console.log("this is the numbe")
                if(isNaN(event)){
                    return;
                }
          
                this.serialInputs = [];

                 for (var i = 0; i < event; i++){
                    this.serialInputs.push({
                        itemNumber: i,
                        serialNumber: generateProductKey()
                    })
                    
                }
                
                
                oldNumberOfSerialInputs = this.numberOfSerialInputs;
                
            },
            debounceThisFunction(functionName, time) {
                return debounce(functionName, time);
            },
            emitCancel(){
                this.$emit('newItemIsShown', false);
            }
        },
        
       
    }

</script>


<style scoped >
    #floater{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #header{
        padding-bottom: 15px;
        border-bottom: 6px solid rgb(23,170,162);
        color: #525f7f;
        
        font-weight: 700;
        color: white;

    }
    #new-inventory-item{
        width: 67%;
        height: 90%;
        background: white;
        padding-bottom: 25px;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 5px;
        background: rgb(28, 114, 201);
        
        position: relative;
       
        overflow-y: scroll;
        display: flex;
        justify-content: center;
        animation: 0.7s scaleUp forwards;
    }
    .new-inventory-item{
        width: 80%;
        margin-top: 25px;
        
    }
    .new-inventory-item:first-child{
        margin-top: 55px;
    }
     #cancel{
        background: none;
        border: none;
        margin-left: 20px;
        font-size: .66rem;
        color: white;
    }
    #cancel:hover{
        text-decoration: underline;
        cursor: pointer;
        transition: 0.4s;
    }
    #navigation{ 
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
       justify-content: center;    
    }
    #information{
        width:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       background: rgb(32,134,234);
       -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 3px;
        margin-top: 15px;
        margin-right: 15px;
        
        
    }
    #contract-submit-button{
        background: none;
        border: none;
        padding: 15px 30px 15px 30px;
        background: rgb(44,113,216);
        color: rgb(230, 230, 230);
        font-size: .66rem;
        border-radius: 2px;
        border: 1px solid rgb(42, 108, 207);
        border-bottom: 4px solid rgb(32, 83, 160);

        
    }
    #contract-submit-button:hover{
        cursor: pointer;
        color: white;
        transform: translateY(1px);
        
    }
  
    .buttons{
        width: 80%;
        align-self: center;
        margin-top: 25px;
    }
    .section-title{
        font-size: .9rem;
        margin-bottom: 10px;
        
        font-weight: 700;
    }
    .inline{
        display: flex;
        flex-direction: row;
        font-size: .92rem;
        align-items: center;
        transition: 0.2s;
        
    }
    input{
        margin-right: 5px;
    }
    .index-number{
        font-size: 1.3rem;
        margin-right: 10px;
    }
    

    @keyframes scaleUp {
        0%{
            transform: scale(0.1);
            border-radius: 1000px;
            overflow: hidden;
        }
        99.9%{
            overflow:hidden;
        }
        100%{
            transform: scale(1);
            border-radius: 4px;
            overflow-y: hidden;
        }
    }
</style>
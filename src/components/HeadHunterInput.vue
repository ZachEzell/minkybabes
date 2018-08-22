<template>
    <div>
        <div id="contract-name" :style="{border: headHunterBorder }">
            <span class="small-id" v-if ="secondPlaceHolderIsActive"> {{placeholderName}} <span v-if="enteredALetter" id="invalid-entry"> must contain numbers only</span></span>
            <input 
                :placeholder="placeholder" 
                @focus="changePlaceholder"
                @blur="headHunterBorder = `1px solid #e3e8ee` " 
                v-model="inputData"
                @input="inputHasChanged"
                v-if="isAnInputNotATextarea">
                <input 
                :placeholder="placeholder" 
                @focus="changePlaceholder"
                @blur="headHunterBorder = `1px solid #e3e8ee` " 
                
               
                v-if="textAreaStatus">
                
        </div>
        
    </div>

</template>

<script>
   export default {
        props: ['placeholder', 'textArea','limitInputTo', 'defaultValue', 'maxValue'],
        data() {
            return {
                secondPlaceHolderIsActive: false,
                lengthOfInputText: '',
                placeholderName: this.placeholder,
                headHunterBorder: `1px solid #e3e8ee`,
                isAnInputNotATextarea: true,
                textAreaStatus: this.textArea,
                inputData: this.defaultValue,
                enteredALetter: false,
                limit: this.limitInputTo,
                componentMaxValue: 100000000,
                maxValueExceeded: false

            }
        },
        methods: {
            changePlaceholder() {
                this.secondPlaceHolderIsActive = true;
                this.placeholder = ``,
                this.headHunterBorder = `2px solid rgb(194, 198, 255)`
            },
            checkIfTextArea(){
                if (this.textArea == true){
                    this.isAnInputNotATextarea = false;
                    
                }
            },
            inputHasChanged(event){
                
                if(this.limitInputTo == 'numbers'){
                        if(isNaN(this.inputData)){
                            
                            this.headHunterBorder = `2px solid red`;
                            this.enteredALetter = true;
                            return;
                        }
                }
                if(this.inputData > this.componentMaxValue) {
                    console.log(this.inputData +"this is input data");
                    this.inputData = this.componentMaxValue;
                }
                this.$emit('inputChange', this.inputData);
                this.headHunterBorder = `2px solid rgb(194, 198, 255)`;
                this.enteredALetter = false;
            }
        },
        mounted: function() {
            this.checkIfTextArea();

        }

   }

</script>


<style scoped>
   *{
       transition: 0.3s;
   }
    #contract-name{
        border: 1px solid rgb(194, 198, 255);
        
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        border-radius: 1px;
        
        
      
    }
    .small-id{
        font-size: 0.6em;
        animation: goesUp 0.5s forwards;
        display: flex;
        justify-content: space-between;
    }
    input{
        border: none;
        height: 20px;
        line-height: 20px;
    }
    input:focus{
        outline: none;
    }
    i{
        color: red;
    }
    #invalid-entry{
        color: red;
    }
    @keyframes goesUp{
        0%{
            transform: translateY(100%);
            opacity: 0%;
            
        }
        100%{
            transform: translateY(0%);
            opacity: 90%;
            
        }
    }
</style>
<template>

    <div id="floater">
        <div id="new-inventory-item">
            <div id="new-inventory-items">
                <div class="new-inventory-item">
                    <h1 id="header">Add new items</h1>
                
                </div>
                <div class="new-inventory-item" >
                    <div class="section-title">Item Information </div>
                    <head-hunter-input placeholder="Model Number"> </head-hunter-input>
                    <head-hunter-input placeholder="Category"></head-hunter-input>
                    <head-hunter-input placeholder="Brand" ></head-hunter-input>
                    <switch-button @optionChange="serializedOption = $event">
                        <template slot="first-box">Serialized</template>
                        <template slot="second-box">Non-serialized</template>
                    </switch-button>
                    
                </div>
                <div class="new-inventory-item">
                    <div class="section-title">Item Pricing </div>
                    <head-hunter-input placeholder="How much did it cost you?" limit-input-to="numbers"></head-hunter-input>
                    <head-hunter-input placeholder="Retail price" limit-input-to="numbers"></head-hunter-input>
                    <head-hunter-input placeholder="Rent to own amount" limit-input-to="numbers"></head-hunter-input>
                </div>
                <div class="new-inventory-item">
                    <div class="section-title" limit-input-to="numbers">Amount to add to inventory </div>
                    
                        <head-hunter-input 
                        limit-input-to="numbers" 
                        default-value=1 
                        @inputChange="generateSerialInputs($event)"
                        max-value="15"
                        ></head-hunter-input>
                        <div class="inline" v-if="serializedOption ==`optionOne`" >
                            <input type="checkbox" id="checkbox" v-model="checked">
                            <p >Auto generate serial numbers</p>
                        
                        </div>
                    
                        
                </div>
                <div id='scrollbox'>
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
                </div>
                
                <div class="buttons">
                    <button id="contract-submit-button"> Add Item(s) </button>
                    <button id="cancel" @click="emitCancel"> Cancel </button> 
                </div>
            </div>
        </div>
        
    </div>

</template>


<script scoped>
import HeadHunterInput from "./HeadHunterInput.vue";
import SwitchButton from "./SwitchButton.vue";
import Switch from "./Switch.vue";
import { generateProductKey, debounce } from "../utils/helper.js";
export default {
  data() {
    return {
      serialInputs: [],
      numberOfSerialInputs: 1,
      serializedOption: "optionOne",
      checked: ""
    };
  },
  components: {
    HeadHunterInput,
    SwitchSelector: Switch,
    SwitchButton
  },
  methods: {
    generateSerialInputs(event) {
      console.log("this is the numbe");
      if (isNaN(event)) {
        return;
      }

      this.serialInputs = [];

      for (var i = 0; i < event; i++) {
        this.serialInputs.push({
          itemNumber: i,
          serialNumber: generateProductKey()
        });
      }

      oldNumberOfSerialInputs = this.numberOfSerialInputs;
    },
    debounceThisFunction(functionName, time) {
      return debounce(functionName, time);
    },
    emitCancel() {
      this.$emit("newItemIsShown", false);
    }
  }
};
</script>


<style scoped >
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 48, 86);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#floater {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 50px 0;
  z-index: 500;
}
#header {
  padding-bottom: 15px;
  border-bottom: 6px solid rgb(242, 208, 59);
}
#new-inventory-item {
  width: 67%;
  height: 90%;
  background: rgb(0, 48, 86);
  padding-bottom: 25px;

  border-radius: 5px;
  display: flex;

  position: relative;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  animation: 0.5s scaleUp forwards;
}
.new-inventory-item {
  width: 50%;
  margin-top: 25px;
}
.new-inventory-item:first-child {
}
#cancel {
  background: none;
  border: none;
  margin-left: 20px;
  font-size: 0.66rem;
  color: white;
  text-decoration: underline;
}
#cancel:hover {
  text-decoration: underline;
  cursor: pointer;
  transition: 0.4s;
}
#contract-submit-button {
  background: none;
  border: none;
  padding: 15px 30px 15px 30px;
  background: rgb(4, 81, 140);
  color: rgb(230, 230, 230);
  font-size: 0.66rem;
  border-radius: 2px;
}
#contract-submit-button:hover {
  cursor: pointer;
  color: white;
}
#new-inventory-items {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(8, 124, 212);
  -webkit-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  padding-bottom: 15px;
}
.buttons {
  width: 30%;
  align-self: center;
  margin-top: 25px;
}
.section-title {
  font-size: 1.2em;
  margin-bottom: 10px;
}
.inline {
  display: flex;
  flex-direction: row;
  font-size: 0.92rem;
  align-items: center;
  transition: 0.2s;
}
input {
  margin-right: 5px;
}
.index-number {
  font-size: 1.3rem;
  margin-right: 10px;
}
#scrollbox {
  overflow-y: scroll;
  max-height: 300px;
  padding-right: 70px;
}
@keyframes scaleUp {
  0% {
    transform: scale(0.1);
    border-radius: 1000px;
    overflow: hidden;
  }
  99.9% {
    overflow: hidden;
  }
  100% {
    transform: scale(1);
    border-radius: 4px;
    overflow-y: hidden;
  }
}
</style>
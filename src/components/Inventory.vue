<template>
    <div id="inventory">
        <div id="inventory-title">
            Inventory
        </div>

        <div id="inventory-menu">
            <div class="column"><i class="fas fa-cogs" > </i>Settings</div>
            <div class="column"><i class="fa fa-long-arrow-alt-down"></i>Depreciate </div>
            <div class="column"><i class="fa fa-plus" @click="newItemScreenIsShown = true"></i>Add new </div>
            <div class="column"><i class="fas fa-cubes" > </i>Change Layout </div>
            <new-inventory-item v-if="newItemScreenIsShown" @newItemIsShown="newItemScreenIsShown = false"></new-inventory-item>
        </div>
    </div>
</template>


<script>
import BlurBox from './BlurBox.vue';
import NewInventoryItem from './NewInventoryItem';
import SignatureBox from './SignatureBox.vue';
    export default {
        data(){
            return {
                newItemScreenIsShown: false
            }
        },
        components: {
            BlurBox,
            NewInventoryItem,
            SignatureBox
        }
    }

</script>

<style scoped>
    #inventory{
        width: 85%;
        background: white;
        padding-left: 25px;
        padding-bottom: 25px;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 5px;
    }
    #inventory-title{
        font-size: 2em;
       
        margin-bottom: 50px;
        margin-top: 65px;
        border-bottom: 1px solid #e3e8ee;
        padding-bottom: 10px;
        width: 97%;
    }
    #inventory-menu{
        display: flex;
        justify-content: space-between;
      
        width: 45%;
    }
    .column{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 75px;
    }
    i{
        margin-bottom: 20px;
        font-size: 2.5em;
        transition: 0.2s;
    }
    i:hover{
       
        color: rgb(218, 215, 255);
        cursor: pointer;
    }
    @keyframes shake{
        0%{
            transform: translateY(-5px);
        }
        50%{
            transform: translateY(10px);
        }
        100%{}
    }
</style>
<template>
    <div id="inventory">
        <div id="inventory-title">
            Customers
        </div>

        <div id="inventory-menu">
            <div class="column"><i class="fas fa-cogs" > </i>Settings</div>
            <div class="column"><i class="fa fa-plus" @click="newItemScreenIsShown = true"></i>Add new </div>
            <!-- <div class="column"><i class="fas fa-cubes" > </i>Change Layout </div> -->
            <new-customer v-if="newItemScreenIsShown" @newItemIsShown="newItemScreenIsShown = false"></new-customer>
        </div>
    </div>
</template>


<script>
import BlurBox from './BlurBox.vue';
import NewCustomer from './NewCustomer.vue';
    export default {
        data(){
            return {
                newItemScreenIsShown: false
            }
        },
        components: {
            BlurBox,
            NewCustomer
        }
    }

</script>

<style scoped>
    #inventory{
        width: 85%;
        background: rgb(44,113,216);
        padding-left: 25px;
        padding-bottom: 25px;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 5px;
        height: 100%;
        color: white;
        
    }
    #inventory-title{
        font-size: 2rem;
       font-weight: 700;
        margin-bottom: 50px;
        margin-top: 65px;
        border-bottom: 5px solid rgb(5, 89, 216);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-left: 1px solid rgb(32, 107, 219);
        padding-bottom: 10px;
        width: 97%;
        height: 100%;
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top: 1px solid rgb(38, 113, 224);
        
    }
    #inventory-menu{
        display: flex;
        
      
        width: 45%;
    }
    .column{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 20%;
        margin-right: 15px;
        font-size: .83rem;
        
        width: 13%;
        border-radius: 500px;
        padding: 20px;
        font-weight: 700;
        
    }
    i{
        margin-bottom: 20px;
        font-size: 1.7em;
        transition: 0.2s;
        color: rgb(32,134,234);
        background: rgb(23,170,162);
        padding: 15px;
        border-radius: 202px;
    }
    i:hover{
       
        color: rgb(44,113,216);
        cursor: pointer;
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
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
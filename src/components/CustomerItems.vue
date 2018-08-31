<template>

    <div id="inventory-items">
        <searchbar search-bar-placeholder="search for an item..." ></searchbar>
        <div id="picture-mode" v-if="layoutType == 'picture' ">
           
                <div class="inventory-item" v-for="(item, index) in listOfInventoryItems" :key="index">
                <div class="spaced">Model: <span class="item-description">{{ item.model }}</span></div>
                <div class="spaced">Serial: <span class="item-description">{{ item.serial }}</span></div>
                <div class="spaced">Description: <span class="item-description">{{ item.description }}</span></div>
                <div class="spaced" v-if="item.status == 'rented' " > Status: <span class="rented item-description">{{ item.status }}</span></div>
                <div class="spaced" v-if="item.status == 'stock' "  > Status:  <span class="stock item-description">{{ item.status }}</span></div>
                <div class="edit-button">
                    <basic-button btnColor="info">Edit</basic-button>
                    <basic-button btnColor="warning">Delete</basic-button>
                    
                </div>
            </div>
                
            
            
        </div>

    </div>
</template>



<script>
let _ = require('lodash');

    import HeadHunterInput from './HeadHunterInput.vue';
    import BasicButton from './BasicButton.vue';
    import Searchbar from './Searchbar.vue';
    
    export default {
        data () {
            return {
                name: ``,
                layoutType: 'picture', 
                listOfInventoryItems: [
                    {
                        model: 'Josie',
                        rtoPrice: '',
                        serial: '12433',
                        description: 'A good item',
                        brand: 'MinkyBabes',
                        vendor: 'Stinky',
                        image: '',
                        category: '',
                        amountOfItemsInStock: '',
                        condition: '',
                        new: true,
                        warrantyStartDate: '',
                        status: 'rented',
                        rentalItem: '',
                        dateAdded: '',
                        cost: '',
                        incomeGained: '',
                        salePrice: '',
                        contract: '',
                        
                    },
                    {
                        model: 'Kel',
                        rtoPrice: '',
                        serial: '12433',
                        description: 'A good item',
                        brand: 'MinkyBabes',
                        vendor: 'Stinky',
                        image: '',
                        category: '',
                        amountOfItemsInStock: '',
                        condition: '',
                        new: true,
                        warrantyStartDate: '',
                        status: 'stock',
                        rentalItem: '',
                        dateAdded: '',
                        cost: '',
                        incomeGained: '',
                        salePrice: '',
                        itIsOnContractNumber: '',
                    },
                    {
                        model: 'Malbe',
                        rtoPrice: '',
                        serial: '432512433',
                        description: 'A good item',
                        brand: 'MinkyBabes',
                        vendor: 'Stinky',
                        image: '',
                        category: '',
                        amountOfItemsInStock: '',
                        condition: '',
                        new: true,
                        warrantyStartDate: '',
                        status: 'rented',
                        rentalItem: '',
                        dateAdded: '',
                        cost: '',
                        incomeGained: '',
                        salePrice: '',
                        contract: '',
                        itIsOnContractNumber: '',
                    },
                    {
                        model: 'Gosling',
                        rtoPrice: '',
                        serial: '764432512433',
                        description: 'A good item',
                        brand: 'MinkyBabes',
                        vendor: 'Stinky',
                        image: '',
                        category: '',
                        amountOfItemsInStock: '',
                        condition: '',
                        new: true,
                        warrantyStartDate: '',
                        status: 'rented',
                        rentalItem: '',
                        dateAdded: '',
                        cost: '',
                        incomeGained: '',
                        salePrice: '',
                        contract: '',
                        itIsOnContractNumber: '',
                    },
                    {
                        model: 'Albert',
                        rtoPrice: '',
                        serial: '764432512433',
                        description: 'A good item',
                        brand: 'MinkyBabes',
                        vendor: 'Stinky',
                        image: '',
                        category: '',
                        amountOfItemsInStock: '',
                        condition: '',
                        new: true,
                        warrantyStartDate: '',
                        status: 'stock',
                        rentalItem: '',
                        dateAdded: '',
                        cost: '',
                        incomeGained: '',
                        salePrice: '',
                        contract: '',
                        itIsOnContractNumber: '',
                    },
                    ]
            }
        },
        components: {
            HeadHunterInput,
            BasicButton,
            Searchbar
            
        },
        methods: {
            didChange(model){
                console.log(_.isInteger(model));
            }
        }
    }
</script>

<style>
    #inventory-items{
        height: 100%;
       width: 85%;
        background: rgb(193, 214, 235);
        padding-left: 25px;
        padding-bottom: 25px;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 5px;
        margin-top: 20px;
        padding-top: 25px;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        
        
        
        
        
        
       
    }
    #search{
        margin-bottom: 25px;
        border: 1px solid black;
        
    }
    #picture-mode{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
        
    }
    .inventory-item{
        border: 1px solid #f5f6f8;
        border-radius: 3px;
        width: 60%;
        background: white;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
       flex-wrap: wrap;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-bottom: 5px solid rgb(204, 221, 236) ;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
       
        
    }
  
    .rented{
        color: rgb(222,65,146) ;
    }
    .stock{
        color: rgb(44,113,216);
    }
    .spaced{
        margin-bottom: 15px;
        text-transform: uppercase;
        font-size: 0.65rem;
        
        
    }
    .item-description{
        font-size: 0.80rem;
        color: rgb(100, 100, 100);
        text-transform: none;
        font-weight: 700;
        margin-left: 5px;
    }
    .edit-button{
        display: flex;
        align-items: center;
        width: 100%;
    }
    
</style>
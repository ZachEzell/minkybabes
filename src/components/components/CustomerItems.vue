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
                    <basic-button>Edit</basic-button>
                    <basic-button>Delete</basic-button>
                    
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
       width: 85%;
        background: white;
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
        border: 1px solid #e3e8ee;
        width: 23%;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        
    }
    .rented{
        color: rgb(222,65,146) ;
    }
    .stock{
        color: rgb(44,113,216);
    }
    .spaced{
        margin-bottom: 15px;
    }
    .item-description{
        font-size: 0.85rem;
    }
    .edit-button{
        display: flex;
    }
</style>
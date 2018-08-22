<template>

    <div id="inventory-items">
        <div id="picture-mode" v-if="layoutType == 'picture' ">
            <div class="inventory-item" v-for="(item, index) in listOfInventoryItems" :key="index">
                <div class="spaced">Model: {{ item.model }}</div>
                <div class="spaced">Serial: {{ item.serial }}</div>
                <div class="spaced">Description: {{ item.description }}</div>
                <div class="spaced" v-if="item.status == 'rented' " id="rented"> Status: {{ item.status }}</div>
                <div class="spaced" v-if="item.status == 'stock' " id="stock" > Status: {{ item.status }}</div>
                <div>
                    <basic-button>Edit</basic-button>
                    
                </div>
            </div>
        </div>

    </div>
</template>



<script>
let _ = require('lodash');

    import HeadHunterInput from './HeadHunterInput.vue';
    import BasicButton from './BasicButton.vue';
    
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
            BasicButton
            
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
        
        
       
    }
    #picture-mode{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        
    }
    .inventory-item{
        border: 1px solid #e3e8ee;
        width: 23%;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #rented{
        color: red;
    }
    #stock{
        color: green;
    }
    .spaced{
        margin-bottom: 15px;
    }
</style>
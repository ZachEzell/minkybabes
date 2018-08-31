<template>

    <div id="inventory-items">
        <div id="chart">
            <charter :data="chartData" :options="chartOptions"  :height="200"></charter>
        </div>
        
    </div>
</template>



<script>
let _ = require('lodash');

    import HeadHunterInput from './HeadHunterInput.vue';
    import BasicButton from './BasicButton.vue';
    import Searchbar from './Searchbar.vue';
    import Charter from './Charter.vue';
    
    export default {
        data () {
            return {
                name: ``,
                layoutType: 'picture', 
                listOfInventoryItems: [
                    
                    ],
                chartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                    datasets: [
                        {
                            label: 'ChangeX',
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderColor: 'rgb(222,65,146) ',
                            data: [40, 20, 40,50, 0, 0, 150, 20, 350]
                        },
                         {
                            label: 'ChangeY',
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderColor: 'rgb(217,169,85) ',
                            data: [10,15, 20,2,8,9, 100, 120, 250]
                        },
                        {
                            label: 'ChangeZ',
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderColor: 'rgb(23,170,162) ',
                            data: [101,151, 201,21,81,91, 101, 110, 150]
                        }
                    ]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    spanGaps: false,
                    defaultFontColor: 'white',
                    legend: {
                        labels: {
                            fontColor: 'white',
                            defaultFontColor: 'white'
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            color: 'white',
                            gridLines: {
                                display: true,
                                color: 'rgba(255,255,255,0.15)'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            color: 'white',
                            gridLines: {
                                display: true,
                                color: 'rgba(255,255,255,0.15)'
                            }
                        }],

                    }
                }
            }
        },
        components: {
            HeadHunterInput,
            BasicButton,
            Searchbar,
            Charter
            
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
        justify-content: center;
        align-items: center;
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
    #chart{
         -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        
        background: rgba(46, 79, 112, 0.9);
        border-radius: 5px;
        
        width: 90%;
        padding: 20px;
        
        
    }
    .inventory-item{
        border: 1px solid #f5f6f8;
        border-radius: 3px;
        width: 60%;
        background: white;
        padding: 20px;
        
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
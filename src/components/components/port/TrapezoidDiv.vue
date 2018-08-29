<template>
    <div class="trap">
        <ul>
            <li
                v-for="(item, index) in numberOfDivs" 
                :key="index" 
                class="sub-trap"
                :style="{animation: `${time[index]}s slideOut 3s ease forwards`}"
                
            ></li>
        </ul>
            
    </div>
</template>

<script>
    export default {
        data(){
            return{
                numberOfDivs: 4,
                time: [4,3.5,3,2.5,2,1.5,1,0.5,]
               
            }
        },
        methods: {
        }
    }
</script>

<style>
    .trap{
        height: 500px;
        width: 500px;
        background: rgba(210,210,210,1);
        background: #159957;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, rgba(210,210,210,0.0), rgba(210,210,210,0.4)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        margin-left: 20px;
        
    }
    .sub-trap{
        height: 124px;
        width: 500px;
        background: rgb(29, 29, 29);
        display: block;
        margin-left: 0px;
    }
    @keyframes slideOut {
        from {
            width: 100%;
            background: rgba(29, 29, 29,1);
        }
        50%{
            background: black;
        }
        to {
            width: 0%;
            background: rgba(29, 29, 29,0.4);
        }
    }
    @keyframes slideIn {
        from {
            width: 0%;
        }
        to {
             width: 500px;
        }
    }
      
</style>
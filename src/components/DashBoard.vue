<template>
    <div id="dashboard">
        <div id="dashboard-top">
            <!-- <div id="title">Dashboard</div> -->
            <div id="dashboard-components">
                <div class="dashboard-component"> 
                    <div class="icon fas fa-puzzle-piece"></div>
                    
                    <div class="icon-text">Add new item</div>
                </div>
                <div class="dashboard-component"> 
                    <div class="icon fas fa-address-card"></div>
                    <div class="icon-text">Add new customer</div>
                </div>
                <div class="dashboard-component">
                    <div class="icon fas fa-file-signature"></div>
                    <div class="icon-text">Create new contract</div>
                </div>
            </div>
        </div>
        
    </div>

    
</template>


<script>
    export default {
        data() {
            return { }
        }
    }

</script>

<style scoped>
    #dashboard {
        height: 100%;

        background: red;
         width: 85%;
        background: white;
        padding-left: 25px;
        padding-bottom: 25px;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        border-radius: 5px;
        height: 100%;
    }
    #title{
        margin-bottom: 25px;
        
    }
    #dashboard-top{
        height: 25%;
        
    }
    #dashboard-components{
        display: flex;
        justify-content: space-around;
        padding-right: 25px;
        background:  rgb(32,134,234);
        background: -moz-linear-gradient(left, rgb(71, 151, 231) 0%, rgb(32,134,234) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, rgb(71, 151, 231) 0%,rgb(32,134,234) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, rgb(71, 151, 231) 0%,rgb(32,134,234) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3e8ee', endColorstr='#e0e5eb',GradientType=1 ); /* IE6-9 */
        margin-left: -25px;
        height: 100%;
        align-items: center;
        color: white;
        padding-left: 25px;
        
        border-bottom: 15px solid #e3e8eefa;
        border-top-left-radius:  3px;
        border-top-right-radius: 3px;

        

    }
    .dashboard-component{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon{
        font-size: 2rem;
        margin-bottom: 10px;
    }
    .icon:hover{
        color: rgb(231, 231, 231);
        cursor: pointer;
    }
    .icon-text{
        color: rgb(233, 233, 233);
        font-size: .9rem;
    }

</style>
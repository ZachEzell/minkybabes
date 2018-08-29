<template>

    <div class="animation-arrow-container">
        <div class="animation-arrow">
            .<br>
            .<br>  
            .<br>  
            .<br>  
                         
            
        </div>
    </div>


</template>


<script>
    export default {

        data() {
            return{

            }
        },
        methods: {

        }
    }
</script>

<style>
    .animation-arrow-container{
        width: 50px;
        height: 100px;
        
        border: 1px solid gray;
        overflow: hidden;
        border-radius: 25px;
    }
    .animation-arrow{
        margin: auto;
        margin-top: 50px;
        height: 200px;
        width: 50px;
        animation: 6s arrowGoesDown ease-in forwards infinite;
        background: url('../assets/downwardArrow.svg');
        color: black;
        font-size: 0.9rem;
        
    }
    @keyframes arrowGoesDown{
        from{
            transform: translateY(-150%);
        }
        10%{
            transform: translateY(-80%);
        }
        20%{
            transform: translateY(-80%);
        }
        30%{
            transform: translateY(-80%);
        }
        40%{
            transform: translateY(-80%);
        }
        50%{
            transform: translateY(-80%);
        }
        60%{
            transform: translateY(-30%);
        }
        70%{
            transform: translateY(-30%);
        }
        80%{
            transform: translateY(-30%);
        }
        90%{
            transform: translateY(-30%);
        }
        to{
            transform: translateY(20%);
        }
    }
</style>
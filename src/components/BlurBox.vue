<template>

    <div id="blur-box">
        <div id="will-blur-box">

        </div>
        <div id="box-to-be-blurred">
            Hello
        </div>
    </div>


</template>


<script>


</script>


<style>
    #blur-box{
        width: 100%;
        height: 50px;
    }
   
    #box-to-be-blurred{
        width: 100%;
        height: 100%;
       
        filter: blur(10px);
        
        
    }

</style>
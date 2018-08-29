<template>
    <div id="basic-button">
        <button id="flat-basic-button">
            <slot></slot>
        </button>

    </div>
</template>


<script>


</script>


<style scoped>
    #flat-basic-button{
        background: none;
        border: 1px solid rgba(61, 61, 61, 0.1);
        padding: 6px 12px 6px 12px;
        transition: 0.2s;
        font-size: 0.74rem;
        border-radius: 25px;
        color: rgb(50,50,93);
        -webkit-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.26);
        margin-right: 10px;
    }
    
    button:hover{
        cursor: pointer;
    }
    #flat-basic-button:hover{
        
        
        -webkit-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.5);
        -moz-box-shadow: 2px 7px 15px -10px rgba(0,0,0,0.5);
        box-shadow: 0px 7px 15px -10px rgba(0,0,0,0.5);
    }
</style>
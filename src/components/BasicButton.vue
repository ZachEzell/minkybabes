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
        border: 1px solid rgb(32,134,234);
        padding: 10px 25px 10px 25px;
        transition: 0.2s;
        border-radius: 2px;
        color: rgb(50,50,93);
    }
    button:hover{
        cursor: pointer;
    }
    #flat-basic-button:hover{
        background: rgb(32,134,234);
        color: white;
    }
</style>
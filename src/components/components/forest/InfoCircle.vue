<template>
    <div>
        <div v-for="(div, index) in 60" :key="index">
            <div class="hi" 
                :style="{
                    width: index * 11 + 'px', 
                    height: index * 11 + 'px',
                    animationDuration: index/5 + 's',
                    left: index*6 + 'px'
                    
                    }">

            </div>
        </div>

    </div>

</template>


<script>

</script>

<style lang="scss" scoped>
    .hi{
        width: 50px;
        height: 50px;
        background: red;
        margin-bottom: 2px;
        position: absolute;
        border-radius: 50px;
        background: transparent;
        border: 1px solid white;
        animation: pulse 1;
        
    }
    @keyframes pulse{
        from{
            border: 15px solid white;
            transform: rotate(0deg);
           
        }
        50%{
            border: 15px solid black;
            
            transform: rotate(270deg);
        }
        to{
            border: 15px solid white;
            transform: rotate(0deg);
            
        }
    }

</style>
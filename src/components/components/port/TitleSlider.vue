<template>

    <div class="top-frame">
        <div 
            class="animation-box" 
            v-for="(letter, index) in nameArray" 
            :key="index"
            :style="{left: 100 * index + 'px', animation: `${index + 1 /0.2}s moveDown ease-in forwards infinite`}"
            >
            {{letter}}
        </div>
    </div>

</template>


<script>
    export default {
        props: ['name'],
        data() {
            return{
                nameArray:[],
                numberOfLetters: 0,
               
            }
        },
        mounted(){
            this.nameArray = this.name.split('');
            this.numberOfLetters = this.nameArray.length;
        }
    }

</script>

<style>
    .top-frame{
      
        width: 500px;
        height: 250px;
        position: relative;
        overflow: hidden;
    }
    .animation-box{
        font-size: 10em;
        display: inline;
        position: absolute;
        color: black;
       
    }
    @keyframes moveDown{
        from{
            transform: translateY(-100%);
            
      
           
           
        }
         10%{
            transform: translateY(50%);

            
             
        }
        20%{
            transform: translateY(50%);
            font-size: 10em;
        }
        30%{
            transform: translateY(50%);
        }
        40%{
            transform: translateY(50%);
        }
        50%{
            transform: translateY(50%);
           
        }
        60%{
            transform: translateY(50%);
            
        }
        70%{
            transform: translateY(50%);
            border-bottom: 0px solid white;
            border-radius: 20px;
            
        }
        80%{
            transform: translateY(50%);
            border-bottom: 10px solid white;
            border-radius: 20px;
         
        }
        90%{
            transform: translateY(50%);
            
        }
        to{
            transform: translateY(250%);
            
        }
    }

</style>
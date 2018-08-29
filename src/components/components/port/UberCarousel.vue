<template>
<div>


    <div class="carousel-box">
        <div class="carousel-top-frame">
            <div class="carousel-frame">
                <div class="carousel-animation-box" :style="{animation: `${this.animationTime}s slideInLeft ease-in forwards infinite` }">
                    {{ arrayOfObjects[indexed].first}}
                </div>
            </div>
        </div>
        <div class="carousel-top-frame">
            <div class="carousel-frame">
                <div class="carousel-animation-box" :style="{animation: `${this.animationTime}s slideInLeft ease-in forwards infinite` }" >
                    {{ arrayOfObjects[indexed].second}}
                </div>
            </div>
        </div>
        <div class="carousel-top-frame">
             <div class="carousel-frame">
                <div class="carousel-animation-box"  :style="{animation: `${this.animationTime}s slideInLeft ease-in forwards infinite` }">
                   {{ arrayOfObjects[indexed].third}}
                </div>
            </div>
        </div>
        
    </div>
    
   <div class="carousel-description">
       <div class="page-number">
            <span>{{ (indexed+1) }}</span>  <span class="total-pages">/ {{ (arrayOfObjects.length)}}</span>
       </div>
       
         <div class="progress-bar-container">
        
            
            <div class="progress-bar" :style="{animation: `${this.animationTime}s slideInLeftForProgressBar ease-in forwards infinite` }">

            </div>
    </div>
</div>
   </div>
   
</template>

<script>

    export default {
        data() {
            return {
                indexed: -1,
                arrayOfObjects: [
                    {
                        first:'C',second: 'KK', third: 'KY'
                    },
                    {
                        first:'B', second: 'A', third: 'BY'
                    },
                    {
                        first:'B', second: 'O', third: 'T'
                    },

                ],
                number: 0,
                animationTime: 6,

            }
        },
        methods: {
            repeatMe(){
                const self= this;
                let counter = -1;
       
                setInterval(function(){

                    if(counter == self.arrayOfObjects.length - 1){
                        counter = -1;
                        return;
                    }
                counter++;
                self.indexed = counter;
                }, self.animationTime * 1000);
            }
        },
        mounted(){
           this.repeatMe();
        }
        

    }

</script>

<style>
    .page-number{
        position: absolute;
        left: 23.5%;
        margin-top: -6px;
        font-size: 0.8em;
        font-weight: 700;
        color: rgb(43, 43, 43);
    }
    .total-pages{
        color: rgb(228, 228, 228);
    }
    .carousel-box{
        width: 700px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        
    }
    .carousel-top-frame{
        height: 350px;
        width: 200px;
        
        
        display: flex;
        align-items: center;
        overflow: hidden;
        justify-content: center;
      
    }
    .carousel-animation-box{
        background: rgb(226, 226, 226);
      
        height: 400px;
        font-size: 0.9em;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .progress-bar-container{
        background: rgb(241, 241, 241);
        width: 300px;
        margin: 0 auto;
        height: 1px;
        overflow: hidden;
        position: relative;
    }
    .progress-bar{
        position: absolute;
        width: 300px;
         height: 10px;
        background: rgb(36, 36, 36);

    }
    @keyframes slideInLeft{
        from {
            transform: translateX(-120%);
            
        }
        1%{
            transform: translateX(0);
          
        }
        50%{
            transform: translateX(0);
        }   
        60%{
            transform: translateX(0);
            
        }
        70%{
            transform: translateX(0);
            
        }
        80%{
            transform: translateX(0);
            
        }
        90%{
            transform: translateX(0);
            
        }
         95%{
            transform: translateX(0);
           
        }
         97%{
            transform: translateX(0);
          
        }
        to{
            transform: translatex(250%);
          
        }
    }
     @keyframes slideInLeftForProgressBar{
        from {
            transform: translateX(-170%);
        }
        70%{
            transform: translateX(0);
        }
        80%{
            transform: translateX(0);
        }
        to{
            transform: translatex(100%);
        }
    }

</style>
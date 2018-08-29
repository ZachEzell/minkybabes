<template>
        <div 
            class="holds-the-text" 
            @mousemove="moveTheText()" 
            :style="{width: width + 'vw', height: height + 'vh'}"
            id="mover"
            >
           
            <div class="is-the-text" :style="{left: x/1.2 + 'px', top: y/1.2+ 360 + 'px', color: 'rgb(247, 247, 247)', fontSize: 2+'px'}">
                <h1 class="header">
                  Zach
                </h1>
            </div>
            <div class="is-the-text" :style="{left: x/1.1 + 'px', top: y/1.1+ 330 + 'px', color: 'rgb(245, 245, 245)', fontSize: 3+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x + 'px', top: y + 300 + 'px', color: 'rgb(240, 240, 240)', fontSize: 8+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.9 + 'px', top: y/0.9 + 250 + 'px' , color: 'rgb(200, 200, 200)', fontSize: 13+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
             <div class="is-the-text" :style="{left: x/0.85 + 'px', top: y/0.85 + 200 + 'px' , color: 'rgb(155, 155, 155)', fontSize: 18+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.8  + 'px', top: y/0.8 + 150 + 'px', color: 'rgb(160, 160, 160)', fontSize: 23+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.7  + 'px', top: y/0.7 +  100 +'px', color: 'rgb(120, 120, 120)', fontSize: 28+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.6  + 'px', top: y/0.6+ 'px', color: 'rgb(80, 80, 80)', fontSize: 33+'px'}">
                <h1 class="header"> Zach  </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.5  + 'px', top: y/0.5+ 'px' , color: 'rgb(40, 40, 40)', fontSize: 38+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
            <div class="is-the-text" :style="{left: x/0.4  + 'px', top: y/0.4+ 'px' , color: 'rgb(0, 0, 0)', fontSize: 43+'px'}">
                <h1 class="header"> Zach </h1>
            </div>
        </div>

</template>

<script>
export default {
        
        data() {
            return {
              width: 60,
              height: 100,
              x: 20,
              y: 100,
              moverObject: {}
            }
        },
        methods: {
            moveTheText(){

                this.x = event.clientX/5;
                this.y = event.clientY - 220;

                console.log("x: " + this.x + " y: " + this.y);
            }
        }
    }
</script>


<style>
    .holds-the-text{

        background: white;
        position: relative;
        overflow: hidden;
        border: 1px solid gray;
    }
    .is-the-text{
        position: absolute;
        transition: 4s ease;
        color: rgb(0, 0, 0);
        transform: translateY(-55.9%);
    }

    .header{
        font-size: 5em;
    }


    
</style>
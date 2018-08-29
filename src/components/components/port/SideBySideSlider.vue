<template>
<div class="top-level-box">
    <div class="frame">
        <div class="frame-cut">
            <div class="image-one">

            </div>
        </div>
         <div class="frame-cut-2" :style="{width: value1+ 'px'}"> 
            <div class="image-two" >
              
            </div>
        </div>
        <div class="mover">
              
        </div>
        
    </div>
    <input type="range" min="0" max="600" class="slider" id="myRange" v-model="value1">
</div>
</template>

<script>
    export default {
        data() {
            return{
                width: 600,
                moveRight: 0,
                value1: 300
            }
        },
        methods: {
            increase(){
                this.width -= 20;
                this.moveRight += 20;
            },
            sliderValue(){
                var slider = document.getElementById("myRange");
                var output = document.getElementById("demo");
                output.innerHTML = slider.value; // Display the default 
                console.log(output.innerHTML);
            }
        }
    }
</script>

<style>
    .top-level-box{
        width: 600px;
        height: 200px;
    }
    .frame{
        width: 600px;
        height: 200px;
        position: relative;
    }
    .image-one{
        background: url('../assets/mona-2.jpg');
        width: 600px;
        height: 200px;
        position: absolute;
        background-size: cover;
        
    }
    .image-two{
        background: url('../assets/mona.jpg') no-repeat;
        width: 600px;
        height: 200px;
        background-size: cover;
   
        position: absolute;

    }
    .frame-cut-2{
        overflow: hidden;
        background: transparent;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transition: 1s ease;
    }
    .mover{
        width: 100%;
        height: 100%;
        position: absolute;
        overflow:hidden;

    }
   /* SLIDER */

   input[type=range] {
  -webkit-appearance: none;
  width: 50%;
  margin: 24.5px 0;
  margin-top:40px;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: rgba(20, 20, 20, 0.7);
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type=range]::-webkit-slider-thumb {

  border: 0.5px solid rgba(0, 0, 0, 0.38);
  height: 50px;
  width: 50px;
  border-radius: 43px;
  background: #ffffff;
  background: url('../assets/play.svg');
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -24.5px;
 
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: rgba(20, 20, 20, 0.7);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: rgba(20, 20, 20, 0.7);
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0.5px solid rgba(0, 0, 0, 0.38);
  height: 50px;
  width: 50px;
  border-radius: 43px;
  background: #ffffff;
  background: url('../assets/mona.jpg');
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: rgba(20, 20, 20, 0.7);
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-fill-upper {
  background: rgba(20, 20, 20, 0.7);
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0.5px solid rgba(0, 0, 0, 0.38);
  height: 50px;
  width: 50px;
  border-radius: 43px;
  background: #ffffff;
  background: url('../assets/mona.jpg');
  cursor: pointer;
  height: 1px;
}
input[type=range]:focus::-ms-fill-lower {
  background: rgba(20, 20, 20, 0.7);
}
input[type=range]:focus::-ms-fill-upper {
  background: rgba(20, 20, 20, 0.7);
}
    
</style>
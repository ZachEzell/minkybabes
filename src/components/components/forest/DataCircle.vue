<template>
<div class="circle-container">
    <!-- Circle One-->

        <div class="circle-position" 
            :style="{ left: coordinates.x/(timing * 10) + position.x  + 'px', top: coordinates.y/(timing * 10) + position.y + 'px' }">
            <div class="circle one" :style="{ animation: state }">
                <div class="circle two" :style="{ animation: state }">   
                </div>
            </div>
                <div class="circle three" @mouseover="turnOffAnimation" @mouseout="turnOnAnimation">
                </div>

                <div class="extra-animation" :style="{animation: state}">
                    <div class="extra-animation-inner" :style="{animation: state}">
                    </div>
                </div>
        </div>
    <!-- End circle one -->
        <div class="price" :style="{ left: position.x + priceCoordinates.x + 'px', top: position.y + priceCoordinates.y + 'px'}" v-if="wasTurnedOn">
                ${{ price }}
        </div>
    </div>
</template>


<script>
    export default {
        props: ['coordinates', 'position', 'timing', 'price', 'priceCoordinates', 'flashOnOverlayEnter'],
        data() {
            return {
                on: `flash 2s ease forwards infinite`,
                x: '',
                y: '',
                off: '',
                state: 'flash 2s ease forwards infinite',
                wasTurnedOn: false
            }
        },
        methods: {
            turnOnAnimation(type){
                if(type == 1){
                   this.state = this.on;
                   return; 
                }
                this.state = this.on;
                this.wasTurnedOn = false;
            },
            turnOffAnimation(type){
                if(type == 1){
                    this.state = this.off;
                    return;
                }
                this.state = this.off;
                this.wasTurnedOn = true;
            },
        },
        mounted() {
            this.x = this.position.x;
            this.y = this.position.y;
        }
      
    }

</script>


<style lang="scss" scoped>
   
// extra animation
 .extra-animation{
        height: 20px;
        width: 20px;
        position: absolute;
        border-radius: 100%;
        
        margin-top: -12px;
        z-index: 3;
        left: 1%;  
    }
    .extra-animation-inner{
        position: relative;
        width: 35%;
        height: 35%;
        border-radius: 50%;
        top: 27%;
        left: 27%;
    
        z-index: 3;
    }


    .circle-position{
        position: relative;
        top: 100%;
        left: 73%;    
    }
    .one{
        height: 20px;
        width: 20px;
        position: absolute;
        border-radius: 100%;
        animation: flashed 0.8s  1 ;
        margin-top: -5.9px;
        z-index: 3;
        left: 1.1%;  
    }
    .two{
        position: relative;
        width: 35%;
        height: 35%;
        border-radius: 50%;
        top: 27%;
        left: 27%;
        animation: flashed 0.8s   1;
        z-index: 3;
    }
    .three{
        position: absolute;
        min-width: 6px;
        min-height: 6px;
        border-radius: 100%;
        left: 2.85%;
        top: 34%;
        cursor: pointer;
        border: 2px solid rgba(255, 255, 255, 0.8);
        z-index: 10; 
    }
  
  .four{
        position: relative;
        width: 30%;
        height: 30%;
        border-radius: 100%;
        top: 25%;
        left: 25%;
        animation: flashed 2s ease  forwards 1;
  }
    .price{
         position: absolute;
        min-width: 30px;
        min-height: 15px;
        color: white;
        font-size: 0.65em;
        font-weight: 700;
        overflow: hidden;
        left: 4%;
        top: 30%;
        animation: 0.3s goesUp ease forwards;
    }
    .price-container{
        overflow: hidden;
        background: red;
    }
    @keyframes goesUp{
        from{
            transform: translateY(100%);
            color: rgba(0,0,0,0);
        }
        85%{
            transform: translate(-20%, 40%);
            color: rgba(255,255,255,0.1);
        }
        to{
            transform: translateY(0%);
            color: white;
        }
    }
    @keyframes flashed{
        from{
            transform: scale(0);
            border: 1px solid rgb(63, 63, 63);
        }
        5%{
            border: 1px solid white;
        }
        10%{
            border: 1px solid rgb(63, 63, 63);
        }
        20%{
            border: 1px solid white;
        }
        30%{
            border: 1px solid rgb(63, 63, 63);
        }
        40%{
            border: 1px solid white; 
        }
        70%{
            border: 1px solid white;   
        }
        75%{
            border: 1px solid rgb(173, 173, 173);
            
        }
        85%{
            border: 1px solid white;
           transform: scale(1.5);      
        } 
        to{
            transform: scale(2) rotate(360deg);
            border: 1px dashed rgba(0,0,0,0);    
        }
    }
    @keyframes flash{
        from{
            transform: scale(0.6);
            border: 1px solid rgb(63, 63, 63);    
        }
        5%{
            border: 1px solid white;
        }
        10%{
            border: 1px solid rgb(63, 63, 63);
        }
        20%{
            border: 1px solid white;
        }
        30%{
            border: 1px solid rgb(63, 63, 63);
        }
        40%{
            border: 1px solid white;    
        }
        70%{
            border: 1px solid white;    
        }
        75%{
            border: 1px solid white;
            
        }
        85%{
            border: 1px solid white;
           transform: scale(1);
            
        }
        to{
            transform: scale(1.1) rotate(360deg);
            border: 1px dashed rgba(0,0,0,0);
        }
    }
</style>
<template>
<div class="background">
    <div>
        <div class="circular-1">
            <div class="circular-2">
                <div class="circular-3">
                    <div class="circular-4">
                        <div class="circular-5">
                            <div class="circular-6">
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
     <div class="spinner-1">
        <div class="spinner-2">
            <div class="spinner-3">
                <div class="spinner-4">
                    <div class="spinner-5">
                        <div class="spinner-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
    <div>
        <div class="spinny-1">
            <div class="spinny-2">
                <div class="spinny-3">
                    <div class="spinny-4">
                        <div class="spinny-5">
                            <div class="spinny-6">
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

</template>


<script>

</script>


<style>
.background{
    background: black;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 3;
    justify-content: space-around;
    padding: 20px;
    

}
    .circular-1{
        width: 100px;
        height: 100px;
        border-top: 2px solid black;
        border-radius: 100px;
        position: relative;
        animation: 5s move infinite;
    }
     .circular-2{
        width: 80px;
        height: 80px;
      
        border-top: 2px solid black;
        border-radius: 80px;
        position: absolute;
        animation: 5s move infinite;
        
    }
     .circular-3{
         width: 60px;
        height: 60px;
    
        border-top: 2px solid black;
        border-radius: 60px;
        position: absolute;
        animation: 5s move infinite;
    }
     .circular-4{
          width: 40px;
        height: 40px;
      
        border-radius: 40px;
        position: absolute;
        animation: 5s move infinite;
    }
     .circular-5{
          width: 20px;
        height: 20px;
      
        border-radius: 20px;
        position: absolute;
        animation: 5s move infinite;

     }



     .spinner-1{
        width: 100px;
        height: 100px;
        border-top: 2px solid black;
        border-radius: 100px;
        position: relative;
        animation: 3s spinnerMove infinite;
    }
     .spinner-2{
        width: 80px;
        height: 80px;
      
        border-top: 2px solid black;
        border-radius: 80px;
        position: absolute;
        animation: 3s spinnerMove infinite;
        
    }
     .spinner-3{
         width: 60px;
        height: 60px;
    
        border-top: 2px solid black;
        border-radius: 60px;
        position: absolute;
        animation: 3s spinnerMove infinite;
    }
     .spinner-4{
          width: 40px;
        height: 40px;
      
        border-radius: 40px;
        position: absolute;
        animation: 3s spinnerMove infinite;
    }
     .spinner-5{
          width: 20px;
        height: 20px;
      
        border-radius: 20px;
        position: absolute;
        animation: 3s spinnerMove infinite;

     }


         .spinny-1{
        width: 100px;
        height: 100px;
        border-top: 2px solid black;
        border-radius: 100px;
        position: relative;
        border: 10px solid white;
        border-radius: 0;
        animation: 12s spinnyMove ease-in infinite;
        overflow: hidden;
    }
     .spinny-2{
        width: 80px;
        height: 80px;
      
        border-top: 2px solid black;
        border-radius: 80px;
        position: absolute;
        animation: 3s spinnyMove infinite;
        
    }
     .spinny-3{
         width: 60px;
        height: 60px;
    
        border-top: 2px solid black;
        border-radius: 60px;
        position: absolute;
        animation: 3s spinnyMove ease-in infinite;
    }
     .spinny-4{
          width: 40px;
        height: 40px;
      
        border-radius: 40px;
        position: absolute;
        animation: 3s spinnyMove ease-in infinite;
    }
     .spinny-5{
          width: 20px;
        height: 20px;
      
        border-radius: 20px;
        position: absolute;
        
        animation: 3s spinnyMove ease-in infinite;
       

     }


    @keyframes move{
        from{
            transform: rotate(0deg);
            border: 1px solid white;
           
            
        }
        80%{
            border: 1px solid rgb(151, 151, 151);
        }
        to{
            transform: rotate(360deg);
             border: 10px solid white;
        }
    }
    @keyframes spinnerMove {
        from{
            transform: rotate(0deg);
            border-top: 1px solid white;
            border-bottom: 10px solid white;
            border-left: 1px solid white;
            border-right: 10px solid white;
            border-radius: 100px;
        }
      
        80%{
            border-right: 10px solid white;
            border-top: 1px solid rgb(151, 151, 151);
        }
        to{
            transform: rotate(360deg);
            border-top: 10px solid white;
            border-bottom: 10px solid white;
            border-left: 10px solid white;
            border-right: 10px solid gray;
            border-radius: 4px;
   
        }
    }
       @keyframes spinnyMove {
        from{
            transform: rotate(0deg);
            border-top: 1px solid white;
            border-bottom: 1px solid rgb(179, 179, 179);
             border-right: 1px solid rgb(255, 255, 255);
            border-left: 1px solid rgb(255, 255, 255);
            border-radius: 0;
            
           
        }
        40%{
          transform: translate(20%, 20%);
          background: black;
        }
        50%{
       
        }
        60%{
     
            border-top: 1px solid rgb(151, 151, 151);
            border-bottom: 10px solid rgb(241, 241, 241);
            border-right: 10px solid white;
            border-left: 10px solid white;
           
        }
      
 
        to{
            
            border-top: 1px solid white;
            border-bottom: 1px solid rgb(255, 255, 255);
            border-right: 1px solid rgb(255, 255, 255);
            border-left: 1px solid rgb(255, 255, 255);
            transform: rotate3d(0, 0, 0, 120deg);
            background: black;
            border-radius: 0px;
            overflow: hidden;
            
   
        }
    }
</style>
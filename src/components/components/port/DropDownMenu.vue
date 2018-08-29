<template>
    <div class="dropdown-top">

        <div class="dropdown-title" @click="dropdownIsShown = !dropdownIsShown">
            <div class="zach-ezell-logo">
                <img src="../assets/minky-baby.svg" >
            </div>
            

        </div>

        <div class="dropdown-overlay" v-if="dropdownIsShown">
            <div class="link-boxes">

                <div class="link-box">
                    
                
                    <div class="filler-left" :style="{ marginRight: -4 + 'px'}">
                        
                    </div>
                    <div class="link">
                     
                        <div class="link-inner" :style="{ marginTop: -61 + 'px'}">
                            
                            Home
                        </div>
                            
                    </div>
                </div>
                <div class="link-box">
                       <div class="link">
                            <div class="link-inner">
                                Work
                            </div>
                    </div>
                    <div class="filler-right" :style="{ marginLeft: 7 + 'px', marginRight: 3+ 'px'}">

                    </div>
                  
                </div>
                <div class="link-box">
                    
                    <div class="filler-left" :style="{  marginRight: - 4+ 'px'}" >
                        
                    </div>
                     <div class="link">
                              <div class="link-inner" :style="{ marginTop: -62 + 'px'}">
                                News
                            </div>
                    </div>
                </div>
                <div class="link-box">
                     <div class="link">
                              <div class="link-inner" :style="{marginTop: -60 + 'px'}">
                                Info
                              </div>
                    </div>
                    <div class="filler-right">
                        
                    </div>
                    
                </div>
                <div class="bottom-fill">

                </div>
            </div>
            <div class="latest-work-box">
                [ zach ezell ]
                <div class="exit" @click="dropdownIsShown = !dropdownIsShown"> X</div>
            </div>
        </div>
    </div>
    


</template>


<script>
    export default {
        data() {
            return{
                dropdownIsShown: false
            }
        },
        methods: {

        }
    }
</script>

<style>

    .period {
        width: 50px;
        height: 50px;
        background: black;
       
    }
    .dropdown-top{
        font-family: 'Anton', sans-serif; 
    }
    .dropdown-title{
       
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        margin: auto;
        height: 400px;
        border: 20px solid black;
   
        
       
    }

.zach-ezell-logo{
   width: 100%;
   height: 100%;
}

    .dropdown-overlay{
        height: 100vh;
        width: 100vw;
        background: black;
        color: rgb(250, 250, 250);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
      
        animation: 0.5s goDown ease-in;
        
      
    }
    .link-boxes{
        width: 50%;
        background: black;
        margin-top: 5px;
        margin-left: 1px;
      
       
    }
    .link-box{
        
   
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        height: 25%;
        width: 100%;
        margin-left: -5px;
        margin-bottom: 1px;
       align-items: flex-end;
        overflow: hidden;
        cursor: pointer;
      
    }

    .latest-work-box{
      width: 50%;
    }
    .bottom-fill{
        height: 0%;
        background: rgb(250, 250, 250);
        margin-top: 20px;
    }
    .filler-right{
        
        width: 100%;
        height: 99%;
        background: rgb(250, 250, 250);
        margin-bottom: 4px;
        margin-right: 2px;
  
       
    }
    .filler-left{
        
        width: 100%;
        height: 99%;
        background: rgb(250, 250, 250);
        margin-bottom: 4px;
        margin-right: 2px;
        margin-left: 6px;
        margin-top: 20px;
       
    }
    .link{
       
        font-size: 27.8vh;
        letter-spacing: -3px;
       
        padding: 2px;
        height: 100%;
        position: relative;  
    }
 
    .link-inner{
       margin-top: -14%;
       overflow: hidden;
       z-index: 3;
    }
    .link-inner:hover{
        animation: 0.5s letterGoesUp  ease forwards ; 
    }


    @keyframes goDown{
        from{
           
            width: 0%;
            height: 0%;
           
        }
        50%{
        }
        75%{
           
        }
        to{
            width: 100%;
            height: 100%;
        }
    }
@keyframes letterGoesUp {
    from {
        border-radius: 0px;
    }
 
    to {
        border: 20px solid rgb(250, 250, 250);
        border-radius: 400px;
        background: rgb(250, 250, 250);
        color: black;
        transform: scale(1.2);
       
    }
}

    @media(max-width: 1296px){
        .bottom-fill{
            height: 100%;
        }
    }
    @media(max-width: 768px ){
        .link-box, {
            height: 120px;
        }
        .link{
            font-size: 21vh;
        }
      
    }
    @media(max-width: 1296px ){

    }
    @media(max-width: 1080px ){

        .link-box, {
            height: 120px;
        }
    }
</style>
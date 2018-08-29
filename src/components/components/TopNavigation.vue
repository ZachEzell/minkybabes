<template>
    <div>
        
        <div id="top-navigation">
            <!-- Not signed in -->
            <div class="navigation-item" v-for="(item, index) in items" :key=index >
                <div :id="index" @mouseover="getCoordinates(index, item.imageLink)" class="spaced" @mouseout="turnOffFloater()">
                    {{ item.linkName }}
                </div>
            </div>
            <!-- Signed in -->
          
            
        </div>
        <div 
            id="floater" 
            :style="{left: floaterCenter - ((items[index].width)/2) + 'px', width: items[index].width + 'px', height: items[index].height + 'px', animation: floaterAnimation}"
            v-if=floaterIsShown
            >
            <div id="space" @mouseover="turnOnFloater()" @mouseout="turnOffFloater()">

            </div>
            <img src="../assets/arrow.svg">
        </div>
    </div>
   
</template>

<script>
    import SearchBar from './Searchbar.vue';
    export default {
        data(){
            return {
                items: 
                    [
                        { linkName: 'home', width: 250, height:  250},
                        { linkName: 'settings',  width: 325, height: 265 },
                        { linkName: 'pricing',   width: 600, height: 600 },
                        { linkName: 'about',  width: 250, height:  250},
                        { linkName: 'help',  width: 325, height: 265 },
                        { linkName: 'call',  width: 600, height: 600 },
                       
                    ],
                itemsShownOnSignIn:
                    [
                        
                    ],
                
                floaterCenter: ``,
                floaterImage: ``,
                index: 0,
                floaterIsShown: false,
                floaterAnimation: ``,
                floaterAnimationIn: `0.3s flipIn forwards`,
                floaterAnimationOut: `0.3s flipOut forwards`,
                signedIn: true,
               

                
            }
           
        },
        methods: {
            getCoordinates(el, image) {
                let item = document.getElementById(el);
                let rect = item.getBoundingClientRect();
                this.floaterIsShown = true;
                this.floaterCenter =( rect.right + rect.left) / 2;
                this.floaterImage = image;
                this.index = el;
                return { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left };
            },
            getCenter(el){
                let rect = el.getBoundingClientRect();
                let center = (rect.left + rect.right) / 2;
                return center;
            },
            turnOffFloater(){
                
                this.floaterIsShown = false;
            
            },
            turnOnFloater(){
               
                this.floaterIsShown = true;
            }
          
        },
        components: {
            SearchBar
        }
    }

</script>


<style scoped>

    #top-navigation {
        width: 50%;
        height: 75px;
        
        display: flex;
        
        
    }
    .spaced{
       
        
        display: flex;
        justify-content: center;
        padding: 0px 25px 25px 25px;
         
    }
    #floater{
        position: absolute;
        top: 80px;
        background: rgb(235, 235, 235);
       
        -webkit-box-shadow: 0px 16px 65px -8px rgba(0,0,0,0.18);
        -moz-box-shadow: 0px 16px 65px -8px rgba(0,0,0,0.18);
        box-shadow: 0px 16px 65px -8px rgba(0,0,0,0.18);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        z-index: 1;
        transition: 0.4s;
        animation: 0.2s flipIn forwards;
    }

    #space{
        
        width: 100%;
        height: 100%;
        position: absolute;
        top: -15px;
        z-index: 5;
        
    }
    #floater img{
        position: absolute;
        width:25px;
        height: 25px;
        top: -15px;

       
    }
    #rotated-image{
        transform: rotate(-90deg);
    }
   
    @keyframes slider{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes flipIn {
        0%{
            opacity: 0;
            transform: rotate3d(1, 1, 0, 110deg);
        }
        100%{
           opacity: 1;
            transform: rotate3d(0, 0, 0, 0deg);
        }
    }
    @keyframes flipOut {
          0%{
            opacity: 1;
            transform: rotate3d(1, 1, 0, 90deg);
        }
        100%{
           opacity: 0;
            transform: rotate3d(0, 0, 0, 0deg);
        }
    
    }

</style>
<template>
<div>
    <div class="sports-navbar" 
        :style="{background: backgroundStyle}"
        @mouseover="engageNavbar"
        @mouseout="disengageNavbar"
        >
        <div class="left-cluster">
            <div class="sports-hamburger" :style="{ color: textColor }" >
                ham
            </div>
        <ul class="genders">
            <!-- <li class="men" 
                :style="{ background: menNavbarStyle, color: textColor, borderLeft: borderStyle }" 
                @mouseover="engageNavbar('men')" 
                @mouseout="disengageNavbar('men')">
                <p>men</p>
                <div class="slider" :style="{animation: navbarAnimation, background: sliderColor}"></div>
            </li > -->
            <li>
                <navbar-dropdown 
                    menuColor="#f2f1fc" 
                    name="mens"
                    textColor="#755e21"
                    ></navbar-dropdown>
            </li>
            <li>
                <navbar-dropdown 
                    menuColor="#ffe7f4" 
                    name="womens"
                    textColor="#755e21"
                    ></navbar-dropdown>
            </li>
            <!-- <li class="women" :style="{background: womenNavbarStyle, color: textColor, borderLeft: borderStyle}" 
                @mouseover="engageNavbar('women')" 
                @mouseout="disengageNavbar('women')">
                <p>women</p>
                
            </li > -->
            <!-- <li class="kids" :style="{background: kidsNavbarStyle, color: textColor, border: borderStyle}" 
                @mouseover="engageNavbar('kids')" 
                @mouseout="disengageNavbar('kids')">
                <p>uberkinden</p>
            </li > -->
        </ul>
        </div>
        
        <div class="logo">
            <img :src="image">
        </div>
        <div class="search" :style="{ color: textColor }">
            Search
        </div>


        <!-- <div class="navbar-screen" v-if="screenIsShown" :style="{animation: screenAnimation}"></div> -->

        <div class="navbar-dropdown-men" v-if="menDropdown" @mouseout="disengageScreen('men')"></div>
        <div class="navbar-dropdown-women" v-if="womenDropdown" @mouseout="disengageScreen('women')"></div>
    </div>
    
</div>
</template>


<script>
import white from '../assets/white.png';
import brown from '../assets/brown.png';
import NavbarDropdown from './NavbarDropdown.vue';
    export default {
        data() {
            return {
                // Navbar Items

                // Men
                menNavbarStyle: '',
                menDropdown: false,
                // Women
                womenNavbarStyle: '',
                womenDropdown: false,
                // Kids
                kidsNavbarStyle: '',

                // General 
                backgroundStyle: ``,
                textColor: ``,
                borderStyle: ``,
                defaultBackground: `rgba(0,0,0,0.1)`,
                image: white,
                navbarAnimation: '',

                // Slider
                sliderColor: '',

                // Screen
                screenIsShown: false,
                screenAnimation: '',
                screenAnimationOn: `1s fadeIn forwards`,
                screenAnimationOff: `1s fadeOut forwards`

            }
        },
        methods: {
            engageNavbar(type){
                this.backgroundStyle=`white`;
                this.textColor=`#755e21`;
                this.borderStyle=`1px solid rgba(0,0,0,0.1)`;
                this.navbarAnimation=``;
                this.image = brown;
                this.screenIsShown = true;
                this.screenAnimation = this.screenAnimationOn;
                
                if(type == 'men'){
                    this.menNavbarStyle = `#f2f1fc`;
                    this.menDropdown = true;
                    return;   
                }
                if(type == 'women'){
                    this.womenNavbarStyle = `#ffe7f4`;
                    this.womenDropdown = true;
                    return;
                }
                if(type == 'kids'){
                    this.kidsNavbarStyle = `#fbfbe2`;
                    return;
                }
            },
            disengageNavbar(type) {
                this.backgroundStyle=`rgba(0,0,0,0.1)`;
                this.textColor=`#ffffff`;
                this.image = white;
                this.screenIsShown = false;
                this.screenAnimation = this.screenAnimationOff;
                
                this.navbarAnimation=`0.2s navbarItemSlidesUp ease-in forwards`
                 if(type == 'men'){
                    this.menNavbarStyle = `transparent`;
                    return;   
                }
                if(type == 'women'){
                    this.womenNavbarStyle = `transparent`;
                    return;
                }
                if(type == 'kids'){
                    this.kidsNavbarStyle = `transparent`;
                    return;
                }
            },
            disengageScreen(type) {
                
                if(type == 'men'){
                    this.menDropdown = false;
                    return;
                }
                if(type == 'women'){
                    this.womenDropdown = false;
                    return;
                }
            }
        },
        components: {
            NavbarDropdown
        }
    }
</script>

<style lang="scss" >
@import '../variables';
 
    .slider {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: -2;
    }
    .navbar-screen {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 35px;
        left: 0px;
        background: rgba(117, 94, 33, 0.7);
    }

    .left-cluster{
        width: 270px;
        height: 35px; 
    }
    .sports-hamburger{
        padding: 6px 25px 0px 10px;
        float: left;
    }
    .sports-navbar{
        cursor: pointer;
        position: fixed;
        display: flex;
        justify-content: space-between;
        padding: 0px 20px 0px 20px;
        width: 100%;
        height: 35px;
        color: white;
        z-index: 55;
        background: rgba(0,0,0,0.1);
        
    }
     .genders li{
         
        display: inline-block;
        
        font-size: 0.65em;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        
        
       
       
    }
    .genders li:nth-child(2){
        margin-left: -4px;
    }
    
    .logo img{
        width: 55px;
        margin-left: -150px;
        margin-top: -11px;
        
    }
    .search{
        margin-right: 40px;
        font-size: 0.8rem;
        margin-top: 5px;
    }
    // Men

    .men p{
        transform: translateY(100%);
       
    }
    .navbar-dropdown-men {
        width: 100%;
        height: 350px;
        background: #f2f1fc ;
        position: fixed;
        top: 35px;
        left: 0px;
    }
    // Women
    .navbar-dropdown-women {
        width: 100%;
        height: 350px;
        background: #ffe7f4 ;
        position: fixed;
        top: 35px;
        left: 0px;
    }

    .women p{
        transform: translateY(100%);  
    }

    // Kids


   
    .kids p{
        transform: translateY(100%);
      
    }
 
   
    @keyframes navbarItemSlidesDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0%);
        }
    }
    @keyframes navbarItemSlidesUp {
        from {
            transform: translateY(0%);
        }
        to {
            transform: translateY(-100%);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from {
            opactiy: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
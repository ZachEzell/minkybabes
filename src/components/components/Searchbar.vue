<template>
    <div id="searchbar">
        <div id="inline">
            <input 
                :placeholder="searchBarPlaceholder" 
                @focus="inputHasBeenFocused"
                @blur="inputHasBeenBlurred"
                >
            <div class="fas fa-search">
                
            </div>
        </div>
        <div id="lineComesIn" v-if="focused"></div>
    </div>
    
</template>


<script>
    
    export default {
        props: ['searchBarPlaceholder'],
        data() {
            return {
                focused: false,
                lineWidth: `0%`,
                activeWidth: `90%`,
                inactiveWidth: `0%`,
                currentAnimation: `1s slideOut`,
                focusAnimation: `2s slideIn `,
                blurAnimation: `1s slideOut`

            }
        },
        methods: {
            inputHasBeenFocused(){
                this.focused = true;
              
            },
            inputHasBeenBlurred(){
                this.focused = false;
               
            }
        }
    }

</script>


<style scoped>

    #searchbar{
        width: 250px;
        height: 30px;
        background: white;
        -webkit-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        -moz-box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        box-shadow: 2px 7px 30px -10px rgba(0,0,0,0.26);
        padding: 2px 10px 2px 25px;
        border-radius: 15px;
        display: flex;
        
        flex-direction: column;
    }
    #inline{
        display: flex;
        align-items: center;
    
    }
    input{
        border: none;
        height: 20px;
        line-height: 40px;
        width: 100%;
        color: rgb(155, 155, 155);
        padding-bottom: 5px;
        
    }
     input:focus{
        outline: none;
     
    }
    #lineComesIn{
        
        height: 1px;
        background: rgb(217,169,85);
        animation: 0.3s slideIn ease-in forwards;
        
    }
    ::placeholder {
        color: rgb(190, 190, 190);
    }
    :-ms-inpt-placeholder {
        color: rgb(190, 190, 190);
    }
    ::-ms-input-placeholder {
        color: rgb(190, 190, 190);
    }
    @keyframes slideIn{
        0%{
            width: 0%;
            
        }
        100%{
            width: 90%;
           
        }
    }
    @keyframes slideOut{
        0%{
            width:90%;
        }
        100%{
            width: 0%;
        }
    }
</style>
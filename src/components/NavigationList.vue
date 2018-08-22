<template>
    <div id="navigation-container">
        <li class="navigation-title">Nav Title</li>
        <ul id="navigation-list">
            
            <div id="navigation-items">
                <li 
                    class="navigation-item" 
                    v-for="(item, index) in items" 
                    :key=index
                    :style="{animation: index/5 + `s itemsSlideIn forwards`}"
                    > 
                        {{item.linkName}} 
                    </li>
                
            </div>
            
        </ul>
    </div>

</template>



<script>
    export default {
        data(){
            return {
                items: [
                    {  
                        linkName: 'joe'
                        
                    },
                    {  
                        linkName: 'patty'
                        
                    },
                    {  
                        linkName: 'joe'
                        
                    },
                    {  
                        linkName: 'patty'
                        
                    },
                ]
            }
        }
    }
</script>


<style >
    #navigation-container{
        padding-left: 50px;
        padding-top: 50px;
        display: flex;
       
        
    }
    #navigation-list{
        display: flex;
        flex-direction: column;
    }
    .navigation-title{
        animation: ease-in 2s fadeIn;
        
    }
    #navigation-items{
        display: flex;
        flex-direction: column;
    }
    .navigation-item{
        margin-bottom: 10px;
       
    }
    @keyframes itemsSlideIn {
        0%{
            opacity: 0;
            
            transform: translate(-180px, 180px);
        }
        100%{
            opacity: 1;
            
            transform: translateY()(0px, 0px);
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
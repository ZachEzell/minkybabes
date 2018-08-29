<template>
  <div id="signed-in-navigation" >
                <search-bar></search-bar>
                <div id="signed-in-bar">
                        <circle-info options="fas fa-cog" circle-text="settings"></circle-info>
                        <circle-info options="fas fa-bell circle" circle-text="alerts" ></circle-info>
                        <circle-info options="fas fa-user" circle-text="account"></circle-info>
                </div>
            </div>
</template>


<script>
    import SearchBar from './Searchbar.vue';
    import CircleInfo from './CircleInfo.vue';
    export default {
        data(){
            return
                {

                }
            
        },
        components: 
            {
                SearchBar,
                CircleInfo
            }
    }
</script>


<style scoped>

    #signed-in-navigation{
            display: flex;
            justify-content: space-between;
            width: 85%;
            
            padding-right: 25px;
            margin-bottom: 20px;
            
            

        }
        #signed-in-bar{
            display: flex;
            justify-content: space-between;
            width: 20%;
        }
        .icon-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        }
        .fa-caret-up{
            color: rgb(217,169,85);
        }
        .circle{
            width: 25px;
            height: 25px;
            background: white;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(187, 187, 187);
            
        }
        .circle:hover{
            cursor: pointer;
            color: rgb(0, 0, 0);

        }
        .info{
            width: 45px;
            height: 20px;
            background: black;
        }
</style>
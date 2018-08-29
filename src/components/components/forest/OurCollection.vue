<template>
    <div class="collection-container">
        <div class="first-collection">
            <div class="collection-image men" >
                
            </div>
            <div class="collection-small-title">
                Men Collection
            </div>
        </div>
        <div class="second-collection">
            <div class="collection-header">
                Collection
            </div>
            <div class="collection-sub-header">
                Spring Summer 2018
            </div>
            <div class="collection-small-title">
                Women Collection
            </div>
            <div class="collection-image women" >
           
            </div>
        </div>
        <div class="third-collection">
            <div class="collection-image kids"  >
                
            </div>
            <div class="collection-small-title">
                Kids Collection
            </div>
        </div>
    </div>
</template>

<script>
import kids from '../assets/opti-janko.jpg';
import women from '../assets/claude.jpg';
import men from '../assets/elijah.jpg';

    export default {
        data(){
            return {
                men,
                women,
                kids
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .collection-container{
        height: 80vw;
        background: #feeeee;
        display: flex;
        
        justify-content: space-around;
        overflow: hidden;
        
        
        
    }
    .first-collection, .second-collection, .third-collection{
        border-right: 1px solid rgb(204, 204, 204);
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-right: 10px;
        
        
    }
    .third-collection{
        border-right: 0px;
    }
    .collection-image{
        width: 29vw;
        height: 45vw;
        opacity: 0.7;
        background-position: center;
        background-size: cover;
        transition: 0.5s;
        cursor: pointer;
    }
    .collection-image:hover{
        opacity: 1;
       
    }
    .collection-image.men{
       background-image: url('../assets/Optimized-elijah-bw.png');
       margin-top: 50%;
    }
    .collection-image.men:hover{
        background-image: url('../assets/elijah.jpg');
    }
    .collection-image.women{
        
        background: url('../assets/claude-bw.png');
        background-position: center;
        background-size: cover;
    }
    .collection-image.women:hover{
        background-image: url('../assets/claude.jpg');
    }
    .collection-image.kids{
        background: url('../assets/Optimized-opti-janko-bw.png');
        background-position: center;
        background-size: cover;
        margin-top: 50%;
    }
    .collection-image.kids:hover{
        background: url('../assets/opti-janko.jpg');
        background-position: center;
        background-size: cover;
    }
    .collection-header{
        margin: 40px auto 0px auto;
        font-size: 2.0rem;
        font-weight: 700;
    }
    .collection-small-title{
        font-size: 0.60rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700;
        margin: 20px auto 20px auto;
        margin-top: 10px;
    }
    .collection-sub-header{
        margin: 40px auto 20px auto;
        font-size: 0.8rem;
        letter-spacing: 1px;
    }
</style>
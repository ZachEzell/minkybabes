<template>
    <div class="card" @mouseover="shadowAndGrow" @mouseout="shrinks" :style="{ animation: state }">
        <div class="image-box">

        </div>
        <div class="card-footer">
           
            <div class="info-box">
                 <div class="image"></div>
                <div class="category">
                    <p> tech </p>
                </div>
                <div class="title">
                    <p> The iPhone X/s </p>
                </div>
            </div>
            
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                grow: 'shadowAndGrow 0.3s ease-in forwards',
                shrink: 'shrinking 0.2s ease-in forwards',
                state: ''
            }
        },
        methods: {
            shadowAndGrow(){
                this.state = this.grow;
            },
            shrinks(){
                this.state = this.shrink;
            }
        }
    }

</script>

<style>
    .card{
        height: 620px;
        width: 450px;
        
    }
    .image-box{
        width: 100%;
        height: 83%;
        background: url('../assets/beasty.jpg');
        background-position: center;
        background-size: cover;
    }
    .image{
        width: 30px;
        height: 30px;
        border-radius: 25px;
        background: url('../assets/beasty.jpg') no-repeat;
        transform: translate(50%, 50%);
        
        float: left;
    }
    .info-box{
        text-align:justify;
        padding: 14px; 
    }
    .category, .title{
        margin-left: 15%;
    }
    .category{
        transform: translateY(70%);
        text-transform: uppercase;
        font-size: 0.6em;
        color: rgba(150,150,150,0.9);
    }
   .title{
       font-size: 1.1em;
       letter-spacing: 1px;
       transform: translateY(-20%);
       color: rgb(99, 99, 99);
   }
    @keyframes shadowAndGrow{
        from{
            transform: scale(1);
        }
        to{
            transform: scale(1.02);
            -webkit-box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
            -moz-box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
            box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
        }
    }
    @keyframes shrinking{
        from {
            transform: scale(1.02);
            -webkit-box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
            -moz-box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
            box-shadow: 0px 9px 23px -1px rgba(0,0,0,0.23);
        }
        to{
            transform: scale(1);
        }
    }
</style>
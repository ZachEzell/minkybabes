<template>
    <div class="button-container" @mouseover="enteredButton" @mouseout="exitedButton" >
        <div class="text">
            Load More
        </div>
        <div class="animation" :style="{ animation: state }">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                on: `goUp 0.2s ease-in forwards`,
                off: 'goDown 0.2s ease-out forwards',
                state: ''
            }
        },
        methods: {
            enteredButton() {
                this.state = this.on;
            },
            exitedButton() {
                this.state = this.off;
            },
        }

    }
</script>


<style lang="scss">
    .button-container{
        width: 150px;
        height: 37px;
        background: transparent;
        border: 1.5px solid rgba(200,200,200,0.3);
        
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    .text{
        transform:translateY(50%);
        font-size: 0.6em;
        position: absolute;
        color: #1C1B1B;
        font-weight: 700;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        
    }
    .animation{
        width: 100%;
        height: 100%;
        background: transparent;
       
    }

    @keyframes goUp{

        from {
            background: rgba(206, 206, 206, 0.5);
            transform: translateY(100%);
        }
        to{
            background: rgba(206, 206, 206, 0.5);
        }
    }
    @keyframes goDown{
        from{
            background: rgba(206, 206, 206, 0.5);
            transform: translateY(0);
        }
        to{
            background: rgba(206, 206, 206, 0.5);
            transform: translateY(-100%);
        }
    }
</style>
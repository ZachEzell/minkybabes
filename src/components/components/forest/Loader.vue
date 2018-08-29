<template>
    <div class="loader" :style="{animation: animation}"></div>

</template>


<script>
    export default {
        data() {
            return {
                animation: ``
            }
        },
        mounted(){
            this.animation = `0.5s loaderSlidesOutLeft 0.5s cubic-bezier(1,0.1,0.25,1) forwards`
        }

    }
</script>


<style>
    .loader{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 1000vh;
        background: white;
        z-index: 100;

    }
    @keyframes loaderSlidesOutLeft{
        from {
            transform: translateX(0%);
        }
        to{
            transform: translateX(-100%);
        }
    }
</style>
<template>

    <div class="floating-footer">
        <div class="floater-for-footer">

        </div>
    </div>
</template>

<script>

</script>


<style>
    .floating-footer{
        height: 405px;
        width: 98vw;
        background: white;
       overflow: hidden;

    }
    .floater-for-footer{
        border-radius: 2px;
        height: 400px;
        width: 97vw;
        background: black;
        animation: 25s float infinite;
    }
    @keyframes float{
        from{
            transform: translate(0%, 0%);
        }
        25%{
            transform: translate(1%, 10%);
            border-radius: 50px;
        }
        50%{
            transform: translate(0%, 0%);
            border-radius: 2px;
        }
        75%{
            transform: translate(-2%, 10%);
        }
        to{
            transform: translate(0%, 0%);
        }
    }
</style>
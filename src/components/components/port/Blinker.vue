<template>
    <div class="blinker">
        This is a blinker
    </div>
</template>

<script>

</script>


<style scoped>
    .blinker{
        font-size: 5em;
        color: black;
        animation: 5s blink forwards;
    }

@keyframes blink{
    0%{
        color: white;
    }
    2%{
        color: black;
    }
    17%{
        color: white;
    }
    19%{
        color: black;
    }
    21%{
        color: white;
    }
    24%{
        color: black;
    }
    27%{
        color: white;
    }
    30%{
        color: black;
    }
    33%{
        color: white;
    }
    36%{
        color: black;
    }
    53%{
        color: white;
    }
    66%{
        color: black;
    }
    73%{
        color: white;
    }
    86%{
        color: black;
    }
    9%{
        color: white;
    }
    100%{
        color: black;
    }
    
}
</style>
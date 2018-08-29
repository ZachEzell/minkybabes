<template>
<div class="sections" id="scroller" >
    <div class="top">
        Hi
    </div>
      <div class="floater" v-if="appScroller == true">
        <div class="page-counter-positioner">
            <div class="page-counter">
                <div class="pager">
                    <span class="numerator">01</span>
                    <span class="denominator">/</span>
                    <span class="denominator">03</span>
                </div>
            </div>
        </div>

        
        
        <div class="scroller">
            <div class="scroller-change" :style="{height: percentage * 100 + '%'}"></div>
        </div>
        <div class="list-of-sections">
            <ul>
                <li class="active"> Cleaned up code </li>
                <li> Consistent Design </li>
                <li> A Multisensory Experience </li>
                <li> {{ Math.round(percentage * 100 )+ '%'}} </li>
            </ul>
        </div>
    </div>
    <div class="bottom">
        
    </div>
</div>
  

</template>

<script>
  export default {
      props: ['appScroller', 'percentage'],
      data() {
          return{
              isShown: this.showScroller,
              scrollerPositionFromTop: 0,
              scrollerShouldBeShown: false,
              currentPosition: 0,
              veryBottom: 0
          }
      },
      methods: {
      },
    mounted(){
            // let element = document.getElementById('scroller');
            // let rect = element.getBoundingClientRect();
            // this.scrollerPositionFromTop = rect.top;
            // this.veryBottom = rect.bottom;
            // console.log(this.veryBottom);
            //very bottom position
        }
  }

</script>

<style scoped>
    .sections{
        height: 2000px;
        width: 100vw;
        background: white;
        position: relative;
        border-bottom: 1px solid black;
    }
   
    .top, .bottom{
        height: 400px !important;
        width: 500px !important;
        margin-left: 200px;
        
       
    }
    .bottom{
         
         transform: translateY(50%);
    }
    .floater {
        position: fixed;
        left: 15%;
        top: 30%;
    }
    
    .numerator, .denominator{
        
    }
    .denominator{
        color: rgba(200,200,200,0.9);
    }

    .page-counter-positioner{
        position: relative;
    }
    .page-counter {
        transform: rotate(270deg);
        position: absolute;
        left: -8%;
        top: -100px;
        font-size: 0.7em;
        overflow: hidden;
    }
    .pager{
        animation: 0.5s slideOut ease-in forwards;
    }
    .scroller{
        height: 300px;
        width: 1px;
        position: absolute;
        background: rgba(150,150,150,0.12);
        animation: 1s slideDown ease-in forwards; 
        
    }
    .scroller-change{
        background: black;
        transition: 1s ease;
    }
    .list-of-sections {
        list-style: none;
        text-transform:uppercase;
        transform: translateY(60%);
        width: 60%;
        padding-left: 15px;
        overflow: hidden;
        
    }
   
    .list-of-sections ul li{
        display: block;
        text-align: left;
        margin-bottom: 20px;
        font-size: 0.6em;
        color: rgba(170,170,170,0.7);
        line-height: 12px;
        font-weight: bold;
        overflow: hidden;
        animation: 1s slideOut ease-in forwards;
    }
    .active{
        color: #1C1B1B !important;
    }

    @keyframes slideOut{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
    @keyframes slideDown{
        from{
            height: 0%;
            
        }
        to{
            height: 200%;
            
        }
    }
</style>


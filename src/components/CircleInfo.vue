<template>
    <div>
        <div class="icon-container">
            <div :class="options" class="circle"  @mouseover="hovered = true" @mouseout="hovered = false"></div>
            <div class="fas fa-caret-up" v-if="hovered" ></div>
            <div v-if="hovered" class="circleText">{{circleText}}</div>
           
        </div>
    </div>

</template>


<script>
export default {
  props: ["options", "circleText"],
  data() {
    return {
      hovered: false,
      classed: this.class
    };
  },
  components: {}
};
</script>


<style>
.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
}
.fa-caret-up {
  color: rgb(217, 169, 85);
  position: absolute;
  top: 22px;
  animation: 0.2s goUp forwards;
}
.circle {
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(207, 220, 231);
  -webkit-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 1);
  box-shadow: 12px 2px 30px -10px rgba(0, 0, 0, 1);
}
.circle:hover {
  cursor: pointer;
  color: rgb(0, 161, 217);
}
.circleText {
  position: absolute;
  top: 31px;
  padding: 5px 8px 5px 8px;
  background: rgb(217, 169, 85);
  border-radius: 2px;
  font-size: 0.7rem;
  animation: 0.2s goUp forwards;
  -webkit-box-shadow: 0px 16px 65px -8px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 16px 65px -8px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 16px 65px -8px rgba(0, 0, 0, 0.18);
}
@keyframes goUp {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
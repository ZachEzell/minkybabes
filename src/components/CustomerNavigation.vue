<template>
    <div id="navigation-container">
        <li class="navigation-title">Customer Info</li>
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
  data() {
    return {
      items: [
        {
          linkName: "General"
        },
        {
          linkName: "Address"
        },
        {
          linkName: "Identification"
        },
        {
          linkName: "Locations"
        },
        {
          linkName: "References"
        },
        {
          linkName: "Payments"
        }
      ]
    };
  }
};
</script>


<style scoped>
#navigation-container {
  padding-left: 50px;
  padding-top: 50px;
  display: flex;
}
#navigation-list {
  display: flex;
  flex-direction: column;
}
.navigation-title {
  animation: ease-in 1s fadeIn;
  font-weight: 700;
  color: rgb(235, 235, 235) !important;
}
#navigation-items {
  display: flex;
  flex-direction: column;
}
.navigation-item {
  margin-bottom: 15px;
  font-size: 0.85rem;
  color: rgb(209, 209, 209);
}
.navigation-item:hover {
  color: #bbbbbb;
  cursor: pointer;
}
@keyframes itemsSlideIn {
  0% {
    opacity: 0;

    transform: translate(-180px, 180px);
  }
  100% {
    opacity: 1;

    transform: translateY() (0px, 0px);
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
<template>
    <div id="navigation-menu">
        
            <div id="left" class="column" :style="{width: menuWidth}">
                <div class="top-left">
                    <navigation-list v-if="menuIsActive"></navigation-list>
                </div>
                <div class="bottom">
                        <div 
                            id="open-close" 
                            @mouseover=hoverMenu 
                            @mouseout=closeMenu 
                            @click=openOrCloseMenu
                            :style="{transform: arrowRotation}"
                        >
                    <i class="fas fa-arrow-right"></i>
                </div>

                </div>
            </div>
            <div id="right" class="column">
            <!-- <top-navigation></top-navigation> -->
           
            <div class="top-right" type='minky'>
               <signed-in-navigation></signed-in-navigation>
                <!-- <inventory></inventory> -->
                <!-- <inventory-items></inventory-items> -->
                <customers></customers>
                <customer-items></customer-items> 
                <!-- <dash-board></dash-board> -->
                <!-- <dash-board-items></dash-board-items> -->
            </div>
            
            
            <div class="bottom"> 
               
            </div>
        </div>
    </div>
</template>

<script>
import NavigationList from "./NavigationList.vue";
import TopNavigation from "./TopNavigation.vue";
import BlurBox from "./BlurBox.vue";
import Inventory from "./Inventory.vue";
import InventoryItems from "./InventoryItems.vue";
import DashBoard from "./DashBoard.vue";
import SignedInNavigation from "./SignedInNavigation.vue";
import Customers from "./Customers.vue";
import CustomerItems from "./CustomerItems.vue";
import DashBoardItems from "./DashBoardItems.vue";

export default {
  data() {
    return {
      menuIsActive: true,
      menuWidth: `30%`,
      menuIsHovered: `5%`,
      menuHasActivated: `30%`,
      arrowRotation: ``,
      arrowCloseDirection: `rotate(180deg)`,
      arrowOpenDirection: `rotate(0deg)`,
      signedIn: true
    };
  },
  methods: {
    hoverMenu() {
      if (this.menuIsActive == false) {
        this.menuWidth = this.menuIsHovered;
      }
    },
    closeMenu() {
      if (this.menuIsActive == false) {
        this.menuWidth = `2%`;
      }
    },
    openOrCloseMenu() {
      if (this.menuIsActive == false) {
        this.menuWidth = this.menuHasActivated;
        this.menuIsActive = true;
        this.arrowRotation = this.arrowCloseDirection;
        return;
      }
      this.menuWidth = `2%`;
      this.menuIsActive = false;
      this.arrowRotation = this.arrowOpenDirection;
    }
  },
  components: {
    NavigationList,
    TopNavigation,
    BlurBox,
    Inventory,
    InventoryItems,
    DashBoard,
    SignedInNavigation,
    Customers,
    CustomerItems,
    DashBoardItems
  }
};
</script>


<style scoped>
#navigation-menu {
  height: 100%;
  background: rgba(0, 48, 86, 0.1);
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
}
#left {
  height: 100%;
  color: white;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e3e8ee+0,e0e5eb+100 */
  background: #e3e8ee; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #e3e8ee 0%,
    #d9e0e9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgb(225, 229, 233) 0%,
    rgb(207, 214, 224) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to top,
    rgb(207, 214, 224) 0%,
    (197, 208, 224) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3e8ee', endColorstr='#e0e5eb',GradientType=1 ); /* IE6-9 */
  transition: 1s;
}
.top-left,
.top-right {
  flex-shrink: 0;
}
.top-right {
  display: inline-flex;
  flex-direction: column;
}
.top-left {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  margin-top: 11%;
  align-items: flex-start;
  height: 65%;
}
#right {
  width: 80%;
  padding-left: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  padding-top: 20px;
}
.column {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#open-close {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  transform: rotate(180deg);
  transition: 1s;
  color: #525f7f;
}
#open-close:hover {
  cursor: pointer;
}
</style>
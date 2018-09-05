<template>
    <div id="navigation-container">
      <ul id="navigation-list">
            <div class="icon">
                <i class="fas fa-barcode "></i>
            </div>
            <div>
                <li ><router-link class="navigation-title" to="/">Dashboard</router-link></li>
                <div id="navigation-items">
                <li 
                    class="navigation-item" 
                    v-for="(item, index) in items1" 
                    :key=index
                    :style="{}"
                    > 
                        {{item.linkName}} 
                    </li>
            </div>
            </div>  
        </ul>
       <ul id="navigation-list">
            <div class="icon">
                <i class="fas fa-barcode "></i>
            </div>

            <div>
                <li ><router-link to="/inventory" class="navigation-title">Inventory</router-link></li>
                <div id="navigation-items">
                <li 
                    class="navigation-item" 
                    v-for="(item, index) in items1" 
                    :key=index
                    :style="{}"
                    > 
                        {{item.linkName}} 
                    </li>
            </div>
            </div>
        </ul>
        <ul id="navigation-list">
            <div class="icon">
                <i class="far fa-user "></i>
            </div>

            <div>
                <li ><router-link to="/customers" class="navigation-title" >Customer</router-link></li>
                <div id="navigation-items">
                <li 
                    class="navigation-item" 
                    v-for="(item, index) in items2" 
                    :key=index
                    :style="{}"
                    > 
                        {{item.linkName}} 
                    </li>
            </div>
            </div>
        </ul> 
        <ul id="navigation-list">
            <div class="icon">
                <i class="fas fa-chart-pie "></i>
            </div>
            <div>
                <li class="navigation-title">Reports</li>
                <div id="navigation-items">
                <li 
                    class="navigation-item" 
                    v-for="(item, index) in items3" 
                    :key=index
                    :style="{}"
                    > 
                        {{item.linkName}} 
                    </li>
            </div>
            </div>
        </ul>  
    </div>

</template>
<script>
export default {
  data() {
    return {
      items1: [
        {
          linkName: "New item"
        },
        {
          linkName: "Reports"
        }
      ],
      items2: [
        {
          linkName: "New Customer"
        },
        {
          linkName: "Create Contracts"
        },
        {
          linkName: "Reports"
        }
      ],
      items3: [
        {
          linkName: "Reports Suite"
        },
        {
          linkName: "Custom Reports"
        }
      ]
    };
  }
};
</script>


<style >
#navigation-container {
  padding-left: 50px;
}
#navigation-list {
  display: flex;
}
.icon {
  margin-right: 5px;
  color: rgb(53, 109, 192);
}
.navigation-title {
  font-weight: 700;
  color: rgb(53, 109, 192) !important;
  font-size: 0.91rem;
  text-decoration: none;
}
#navigation-items {
  display: flex;
  flex-direction: column;
}

.navigation-item {
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: #6c7385;
}
.navigation-item:first-child {
  margin-top: 15px;
}
.navigation-item:hover {
  color: #525f7f;
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
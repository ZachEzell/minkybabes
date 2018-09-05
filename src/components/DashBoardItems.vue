<template>

    <div id="inventory-items">
        <div class="inventory-item">
            <div id="drop-down">
                <div class="dropdown">
                    <button class="dropbtn">{{chartName}}<div id="chevrons"><i class="fas fa-chevron-up"></i><i class="fas fa-chevron-down"></i></div></button>
                    
                    <div class="dropdown-content">
                        <a href="#" @click="changeChart(1)">Chart 1</a>
                        <a href="#" @click="changeChart(2)">Chart 2</a>
                        <a href="#" @click="changeChart(3)">Chart 3</a>
                    </div>
                    
                </div>
            </div>
            <div id="chart">
                <charter :chart-data="chartData[currentChart]" :options="chartOptions"  :height="200"></charter>
             </div>
        </div>
    </div>
</template>



<script>
let _ = require("lodash");

import HeadHunterInput from "./HeadHunterInput.vue";
import BasicButton from "./BasicButton.vue";
import Searchbar from "./Searchbar.vue";
import Charter from "./Charter.vue";

export default {
  data() {
    return {
      name: ``,
      layoutType: "picture",
      listOfInventoryItems: [],
      chartData: [
        {
          labels: [
            "Januaried",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September"
          ],
          datasets: [
            {
              label: "ChangeX",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(0,161,217) ",
              data: [3500, 20, 40, 50, 0, 0, 600, 20, 4000]
            },
            {
              label: "ChangeY",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(242,208,59) ",
              data: [1, 15, 200, 4450, 98, 9, 100, 120, 200]
            },
            {
              label: "ChangeZ",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(71,217,191) ",
              data: [101, 151, 0, 21, 5, 91, 101, 11, 150]
            }
          ]
        },
        {
          labels: [
            "Januaried2",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September"
          ],
          datasets: [
            {
              label: "ChangeX",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(0,161,217) ",
              data: [1400, 20, 40, 50, 0, 0, 600, 20, 4000]
            },
            {
              label: "ChangeY",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(242,208,59) ",
              data: [1, 15, 20, 2, 98, 9, 100, 120, 200]
            },
            {
              label: "ChangeZ",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(71,217,191) ",
              data: [101, 151, 0, 21, 5, 91, 101, 11, 150]
            }
          ]
        },
        {
          labels: [
            "Januario",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September"
          ],
          datasets: [
            {
              label: "ChangeX",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(0,161,217) ",
              data: [4000, 2022, 40, 80, 0, 0, 150, 20, 2000]
            },
            {
              label: "ChangeY",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(242,208,59) ",
              data: [10, 15, 20, 2, 8, 100, 100, 1, 250]
            },
            {
              label: "ChangeZ",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(71,217,191) ",
              data: [101, 151, 3, 21, 81, 2, 101, 110, 150]
            }
          ]
        },
        {
          labels: [
            "January",
            "Februario",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September"
          ],
          datasets: [
            {
              label: "ChangeX",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(0,161,217) ",
              data: [40, 20, 40, 80, 0, 0, 150, 20, 350]
            },
            {
              label: "ChangeY",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(242,208,59) ",
              data: [10, 15, 20, 2, 8, 100, 100, 1, 250]
            },
            {
              label: "ChangeZ",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(71,217,191) ",
              data: [1, 44, 3, 21, 81, 2, 101, 942, 12]
            }
          ]
        },
        {
          labels: [
            "January",
            "Februario",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September"
          ],
          datasets: [
            {
              label: "ChangeX",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(0,161,217) ",
              data: [120, 220, 440, 820, 20, 20, 2150, 220, 2350]
            },
            {
              label: "ChangeY",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(242,208,59) ",
              data: [140, 145, 204, 24, 84, 1040, 1004, 12, 2502]
            },
            {
              label: "ChangeZ",
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgb(71,217,191) ",
              data: [11, 424, 33, 214, 812, 21, 1041, 9424, 142]
            }
          ]
        }
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: false,
        defaultFontColor: "white",
        legend: {
          labels: {
            fontColor: "white",
            defaultFontColor: "white"
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              color: "white",
              gridLines: {
                display: true,
                color: "rgba(255,255,255,0.15)"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              color: "white",
              gridLines: {
                display: true,
                color: "rgba(255,255,255,0.15)"
              }
            }
          ]
        }
      },
      currentChart: ``
    };
  },
  components: {
    HeadHunterInput,
    BasicButton,
    Searchbar,
    Charter
  },
  methods: {
    didChange(model) {
      console.log(_.isInteger(model));
    },
    changeChart(dataSet) {
      if (dataSet == 0) {
        this.currentChart = 0;
        console.log(this.currentChart);
        console.log(this.chartData[this.currentChart]);
        this.chartName = "chart0";
        return;
      }
      if (dataSet == 1) {
        this.currentChart = 1;
        console.log(this.currentChart);
        console.log(this.chartData[this.currentChart]);
        this.chartName = "chart1";
        return;
      }
      if (dataSet == 2) {
        this.currentChart = 2;
        console.log(this.currentChart);
        console.log(this.chartData[this.currentChart]);
        this.chartName = "chart2";
        return;
      }
      if ((dataSet = 3)) {
        this.currentChart = 3;
        this.chartName = "chart3";
        return;
      }
    }
  },
  mounted() {
    this.changeChart(0);

    this.chartName = "chart1";
  }
};
</script>

<style scoped>
#inventory-items {
  height: 100%;
  width: 85%;
  background: rgba(4, 81, 140, 0.08);
  -webkit-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  animation: 0.4s slideInLeft forwards;
}
#search {
  margin-bottom: 25px;
  border: 1px solid black;
}
#picture-mode {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
}
#chart {
  -webkit-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  background: rgba(4, 81, 140, 1);
  border-radius: 5px;
  width: 100%;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
}
#chevrons {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-size: 0.4rem;
  justify-content: center;
  align-items: center;
}
.inventory-item {
  border-radius: 3px;
  width: 95%;
  background: rgba(4, 81, 140, 1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  box-shadow: 2px 7px 30px -10px rgba(0, 0, 0, 0.26);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: column;
}

.rented {
  color: rgb(222, 65, 146);
}
.stock {
  color: rgb(44, 113, 216);
}
.spaced {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 0.65rem;
}
.item-description {
  font-size: 0.8rem;
  color: rgb(100, 100, 100);
  text-transform: none;
  font-weight: 700;
  margin-left: 5px;
}
.edit-button {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Dropdown Button */
#drop-down {
  align-self: flex-end;
  z-index: 0;
  animation: 1s appear forwards;
}
.dropbtn {
  background-color: rgb(0, 48, 86);
  color: rgb(0, 161, 217);
  text-transform: uppercase;
  padding: 12px;
  font-size: 0.62rem;
  font-weight: 700;
  border: 2px solid rgb(0, 48, 86);
  border-radius: 2px;
  animation: 1s appear forwards;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  animation: 1s appear forwards;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  animation: 1s appear forwards;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: rgb(0, 48, 86);
}

@keyframes appear {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
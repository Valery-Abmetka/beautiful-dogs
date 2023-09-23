let selectYers = document.getElementById("selectYers")
let selectWeight = document.getElementById("selectWeight")
let selectPeculiarities = document.getElementById("selectPeculiarities")
let selectActivity = document.getElementById("selectActivity")
let infoCalculate = document.getElementById("infoCalculate")
let btnСalculate = document.getElementById("btnСalculate")
let minTotal = document.getElementById("minTotal")
let maxTotal = document.getElementById("maxTotal")
let minTotalWeek = document.getElementById("minTotalWeek")
let maxTotalWeek = document.getElementById("maxTotalWeek")
let minProtein = document.getElementById("minProtein")
let maxProtein = document.getElementById("maxProtein")
let minVegetable = document.getElementById("minVegetable")
let maxVegetable = document.getElementById("maxVegetable")

btnСalculate.onclick = calculateDiet

function calculateDiet() {
  let firstMonthDiet = {
    minDailyNorm: 0.05,
    maxDailyNorm: 0.1,
    minWeekNorm: 0.35,
    maxWeekNorm: 0.7,
    minProteinNorm: 0.245,
    maxProteinNorm: 0.49,
    minVegetableNorm: 0.105,
    maxVegetableNorm: 0.21,
  }
  let fourthMonthDiet = {
    minDailyNorm: 0.03,
    maxDailyNorm: 0.05,
    minWeekNorm: 0.21,
    maxWeekNorm: 0.35,
    minProteinNorm: 0.147,
    maxProteinNorm: 0.24,
    minVegetableNorm: 0.063,
    maxVegetableNorm: 0.105,
  }
  let firsYearsDiet = {
    minDailyNorm: 0.03,
    maxDailyNorm: 0.03,
    minWeekNorm: 0.21,
    maxWeekNorm: 0.21,
    minProteinNorm: 0.15,
    maxProteinNorm: 0.15,
    minVegetableNorm: 0.06,
    maxVegetableNorm: 0.06,
  }

  let sevenYearsDiet = {
    minDailyNorm: 0.025,
    maxDailyNorm: 0.03,
    minWeekNorm: 0.175,
    maxWeekNorm: 0.21,
    minProteinNorm: 0.1225,
    maxProteinNorm: 0.147,
    minVegetableNorm: 0.0525,
    maxVegetableNorm: 0.063,
  }

  let selectDiet = firstMonthDiet
  if (selectYers.value === "1") {
    selectDiet = fourthMonthDiet
  } else if (selectYers.value === "2") {
    selectDiet = firsYearsDiet
  } else if (selectYers.value === "3") {
    selectDiet = sevenYearsDiet
  } else if (selectYers.value === "-1") {
    selectYers.style.color = "red"
    return
  }
  selectYers.style.color = "#151515"

  if (selectPeculiarities.value === "1") {
    selectDiet.minProteinNorm += 0.035
    selectDiet.maxProteinNorm += 0.07
    selectDiet.minVegetableNorm -= 0.03
    selectDiet.maxVegetableNorm -= 0.07
  } else if (selectPeculiarities.value === "2") {
    selectDiet.minProteinNorm -= 0.0175
    selectDiet.maxProteinNorm -= 0.035
    selectDiet.minVegetableNorm += 0.017
    selectDiet.maxVegetableNorm += 0.035
  }

  if (selectActivity.value === "2") {
    selectDiet.minDailyNorm += 0.0075
    selectDiet.maxDailyNorm += 0.015
    selectDiet.minWeekNorm += 0.0525
    selectDiet.maxWeekNorm += 0.105
    selectDiet.minProteinNorm += 0.03675
    selectDiet.maxProteinNorm += 0.07535
    selectDiet.minVegetableNorm += 0.025
    selectDiet.maxVegetableNorm += 0.025
  }

  for (let value in selectDiet) {
    selectDiet[value] *= selectWeight.value
    selectDiet[value] = selectDiet[value].toFixed(2)
  }

  minTotal.innerHTML = selectDiet.minDailyNorm
  maxTotal.innerHTML = selectDiet.maxDailyNorm
  minTotalWeek.innerHTML = selectDiet.minWeekNorm
  maxTotalWeek.innerHTML = selectDiet.maxWeekNorm
  minProtein.innerHTML = selectDiet.minProteinNorm
  maxProtein.innerHTML = selectDiet.maxProteinNorm
  minVegetable.innerHTML = selectDiet.minVegetableNorm
  maxVegetable.innerHTML = selectDiet.maxVegetableNorm
  infoCalculate.style.display = "block"
}

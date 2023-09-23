let $start = document.querySelector("#start")
let $game = document.querySelector("#game")
let $time = document.querySelector("#time")
let $result = document.querySelector("#result")
let $timeHeader = document.querySelector("#time-header")
let $resultHeader = document.querySelector("#result-header")
let $gameTime = document.querySelector("#game-time")

let images = [
  "../HTML/source/img/food-img/app-images/feed1.jpg",
  "../HTML/source/img/food-img/app-images/feed2.jpg",
  "../HTML/source/img/food-img/app-images/feed3.jpg",
  "../HTML/source/img/food-img/app-images/feed4.jpg",
  "../HTML/source/img/food-img/app-images/feed5.jpg",
  "../HTML/source/img/food-img/app-images/feed6.jpg",
  "../HTML/source/img/food-img/app-images/feed7.jpg",
]
let score = 0
let isGameStarted = false

$start.addEventListener("click", startGame)
$game.addEventListener("click", handleImageClick)
$gameTime.addEventListener("input", setGameTime)

function startGame() {
  score = 0
  setGameTime()
  $gameTime.setAttribute("disabled", "true")

  isGameStarted = true
  $game.style.backgroundColor = "#fff"
  $start.classList.add("hide")
  let interval = setInterval(function () {
    let time = parseFloat($time.textContent)

    if (time <= 0) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)
    }
  }, 100)
  renderImage()
}

function setGameScore() {
  $result.textContent = score.toString()
}

function setGameTime() {
  let time = +$gameTime.value
  $time.textContent = time.toFixed(1)
  $timeHeader.classList.remove("hide")
  $resultHeader.classList.add("hide")
}

function endGame() {
  isGameStarted = false
  setGameScore()
  $gameTime.removeAttribute("disabled")
  $start.classList.remove("hide")
  $game.innerHTML = ""
  $game.style.backgroundColor = "#ccc"
  $timeHeader.classList.add("hide")
  $resultHeader.classList.remove("hide")
}

function handleImageClick(event) {
  if (!isGameStarted) {
    return
  }

  if (event.target.dataset.image) {
    score++
    renderImage()
  }
}

function renderImage() {
  $game.innerHTML = ""
  let image = document.createElement("img")
  let imageSize = getRandom(30, 100)
  let gameSize = $game.getBoundingClientRect()
  let maxTop = gameSize.height - imageSize
  let maxLeft = gameSize.width - imageSize
  let randomImageIndex = getRandom(0, images.length)

  image.style.width = image.style.height = imageSize + "px"
  image.style.position = "absolute"
  image.src = images[randomImageIndex]
  image.style.top = getRandom(0, maxTop) + "px"
  image.style.left = getRandom(0, maxLeft) + "px"
  image.style.cursor =
    "url(../HTML/source/img/food-img/app-images/cursor-pointer.png), pointer"
  image.style.zIndex = "1"
  image.setAttribute("data-image", "true")

  $game.insertAdjacentElement("afterbegin", image)
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

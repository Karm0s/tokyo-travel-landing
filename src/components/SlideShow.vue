<script setup lang="ts">
import { onMounted, ref } from "vue"

let states: String[] = [
	'card--enter',
	'card--preview',
	'card--current',
	'card--leave'
]

// function getNextIndices(index: number) {
// 	return [(index - 1) % states.length, index, (index + 1) % states.length, (index + 2) % states.length]
// }
function incrementIndex(index: number) {
	return (index + 1) % states.length
}

let currentIndex = 2

let firstCardClass = ref(states[0])
let secondCardClass = ref(states[1])
let thirdCardClass = ref(states[2])
let fourthCardClass = ref(states[3])

onMounted(() => {
	setInterval(() => {

		// let [last, previous, current, next] = getNextIndices(currentIndex)
		console.log(incrementIndex(currentIndex - 2))
		firstCardClass.value = states[incrementIndex(currentIndex - 2)]
		secondCardClass.value = states[incrementIndex(currentIndex - 1)]
		thirdCardClass.value = states[incrementIndex(currentIndex)]
		fourthCardClass.value = states[incrementIndex(currentIndex + 1)]
		currentIndex++
	}, 3 * 1000)
})
</script>

<template>
	<div class="slideshow">
		<div class="card" :class="firstCardClass">
			<div class="card-content">
				<h3 class="card-name">Streets</h3>
				<img
					src="../assets/streets.jpg"
					class="slideshow-image"
					alt=""
				/>
			</div>
		</div>
		<div class="card" :class="secondCardClass">
			<div class="card-content">
				<h3 class="card-name">Tokyo Tower</h3>
				<img src="../assets/tower.jpg" class="slideshow-image" alt="" />
			</div>
		</div>
		<div class="card" :class="thirdCardClass">
			<div class="card-content">
				<h3 class="card-name">Night life</h3>
				<img src="../assets/night.jpg" class="slideshow-image" alt="" />
			</div>
		</div>
		<div class="card" :class="fourthCardClass">
			<div class="card-content">
				<h3 class="card-name">Sakura</h3>
				<img
					src="../assets/sakura.jpg"
					class="slideshow-image"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.slideshow {
	position: relative;
}
.slideshow-image {
	width: 230px !important;
	border-radius: 10px;
}
.card {
	position: absolute;
	left: 60%;
	bottom: 25%;
	transition: all 0.4s ease-in;
}
.card-content {
	position: relative;
}
.card-name {
	position: absolute;
	left: 5%;
	top: 5%;
	background-color: transparent;
	z-index: 10;
}
.card--enter {
	transform: scale(75%);
	opacity: 0;
}
.card--current {
	left: 10%;
	opacity: 1;
	transform: scale(100%);
}
.card--preview {
	left: 40%;
	opacity: 1;
	transform: scale(75%);
}
.card--leave {
	left: -15%;
	opacity: 0;
	transform: scale(100%);
}
.third {
	opacity: 0;
	left: 0;
}
</style>

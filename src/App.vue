<script setup lang="ts">
import Navbar from './components/Navbar.vue'

</script>

<template>
	<section class="h-screen flex flex-col justify-between">
		<Navbar></Navbar>
		<div class="w-full flex justify-center items-center">
			<div class="heading-wrapper bg-green-100">
				<h1 class="text-8xl font-bold">Tokyo</h1>
				<h2 class="text-2xl font-medium">... Not so far away</h2>
			</div>
			<div class="slideshow-wrapper bg-red-100">here slide show</div>
		</div>
		<div class="flex justify-between items-center">
			<div class="infos">informations</div>
			<div class="socials">socials</div>
		</div>
	</section>
</template>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
* {
	font-family: "Rubik";
}
</style>

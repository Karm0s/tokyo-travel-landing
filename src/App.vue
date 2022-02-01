<script setup lang="ts">
import Navbar from './components/Navbar.vue'

</script>

<template>
	<section class="h-screen flex flex-col justify-between pt-10">
		<Navbar></Navbar>
		<div class="w-full flex justify-center items-center">
			<div
				class="
					heading-wrapper
					w-1/2
					flex flex-col
					justify-center
					items-center
				"
			>
				<div>
					<h1 class="text-8xl font-bold">TOKYO</h1>
					<h2 class="text-2xl font-medium mt-2">
						...Not so far away
					</h2>
				</div>
			</div>
			<div class="slideshow-wrapper w-1/2">here slide show</div>
		</div>
		<div class="hero-bottom flex justify-between items-center mx-auto">
			<div class="infos flex items-center w-2/3">
				<div>
					<h3>Culture Festival</h3>
					<p>09-12 August</p>
				</div>
				<div class="separator mx-4"></div>
				<div class="w-2/3">
					<p class="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Inventore possimus architecto, dolor cum nihil
						necessitatibus?
					</p>
				</div>
			</div>
			<div class="socials">
				<font-awesome-icon :icon="['fab', 'youtube']" />
				<font-awesome-icon :icon="['fab', 'facebook-f']" />
				<font-awesome-icon :icon="['fab', 'instagram']" />
				<font-awesome-icon :icon="['fab', 'twitter']" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
* {
	font-family: "Rubik";
	background-color: black;
	color: white;
}
.separator {
	border-left: 2px solid white;
	height: 70px;
}
.hero-bottom {
	max-width: 80%;
}
.socials > * {
	@apply mx-2;
}
</style>

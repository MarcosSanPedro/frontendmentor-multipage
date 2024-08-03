<script lang="ts">
	import footerLogo from '$lib/assets/shared/desktop/logo-light.png';
	import Facebook from '$lib/assets/shared/desktop/icon-facebook.svelte';
	import YouTube from '$lib/assets/shared/desktop/icon-youtube.svelte';
	import Twitter from '$lib/assets/shared/desktop/icon-twitter.svelte';
	import Pinterest from '$lib/assets/shared/desktop/icon-pinterest.svelte';
	import Instagram from '$lib/assets/shared/desktop/icon-instagram.svelte';
</script>

<footer class=" relative z-0">
	<div
		class=" fondoBolita bg-right bg-no-repeat lg:bg-center lg:bg-repeat rounded-2xl w-5/6 m-auto flex flex-col items-center py-20 lg:py-24 px-7 text-center gap-8 md:gap-10 md:px-24 lg:px-52 bg-papaya z-40 absolute inset-x-0"
	>
		<p class=" text-4xl lg:text-5xl font-bold text-white">Let's talk about your project</p>
		<p class=" text-xl lg:text-2xl text-white">
			Ready to take it to the next level? Contact us today and find out how our expertise can help
			your buiness grow
		</p>
		<a href="/contact" class="  p-4 text-xl bg-white rounded-xl hover:text-white hover:bg-black duration-300">GET IN TOUCH</a>
	</div>
	<div
		class=" flex flex-col gap-9 justify-center items-center bg-black w-full text-white pt-80 absolute top-[225px]"
	>
		<div
			class=" md:w-full flex flex-col gap-10 md:gap-10 md:justify-between md:flex-row lg:px-32 md:px-20"
		>
			<a class="duration-300 transform hover:scale-110" href="/"><img src={footerLogo} alt="logo" class="w-72 md:w-60 m-auto md:m-0 lg:w-72" /></a>

			<div class="w-96 border-t opacity-20 md:hidden"></div>

			<ul
				class=" flex flex-col md:flex-row gap-4 md:gap-10 whitespace-nowrap text-xl text-center lg:gap-28"
			>
				<li class="duration-300 transform hover:scale-110"><a href="/our-company">OUR COMPANY</a></li>
				<li class="duration-300 transform hover:scale-110"><a href="/locations">LOCATIONS</a></li>
				<li class="duration-300 transform hover:scale-110"><a href="/contact">CONTACT</a></li>
			</ul>
		</div>


		<div class=" pb-10 flex gap-10 flex-col lg:gap-28 md:flex-row md:m-20">
			<ul class=" flex flex-col gap-2 whitespace-nowrap text-lg text-gray-400 text-center">
				<li class="text-xl text-gray-300">Designo Central Ofiice</li>
				<li>3886 Wellignton Street</li>
				<li>Toronto, Ontario M9C 3j5</li>
			</ul>
			<ul class=" flex flex-col gap-2 whitespace-nowrap text-lg text-gray-400 text-center">
				<li class=" text-xl text-gray-300">Contact Us (Central Office)</li>
				<li><a href="tel:+1234567890">P:+1 (253)862-2930</a></li>
				<li>M: contact@designo.co</li>
			</ul>
			<ul class=" flex gap-7 pb-7">
				<li class="duration-300 transform hover:scale-125"><Facebook /></li>
				<li class="duration-300 transform hover:scale-125"><YouTube /></li>
				<li class="duration-300 transform hover:scale-125"><Twitter /></li>
				<li class="duration-300 transform hover:scale-125"><Pinterest /></li>
				<li class="duration-300 transform hover:scale-125"><Instagram /></li>
			</ul>
		</div>
	</div>
</footer>

<style>
	.fondoBolita {
		background-image: url('../assets/app-design/desktop/bg-pattern-intro-app.svg');
	}
</style>

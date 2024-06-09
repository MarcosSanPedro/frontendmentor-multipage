<script lang="ts">
	import footerLogo from '$lib/assets/shared/desktop/logo-light.png';
	import Facebook from '$lib/assets/shared/desktop/icon-facebook.svelte';
	import YouTube from '$lib/assets/shared/desktop/icon-youtube.svelte';
	import Twitter from '$lib/assets/shared/desktop/icon-twitter.svelte';
	import Pinterest from '$lib/assets/shared/desktop/icon-pinterest.svelte';
	import Instagram from '$lib/assets/shared/desktop/icon-instagram.svelte';
</script>

<footer class="">
	<div class=" bg-orange-200">
		<p>Let's talk about your project</p>
		<p>
			Ready to take it to the next level? Contact us today and find out how our expertise can help
			your buiness grow
		</p>
	</div>
	<div
		class=" flex flex-col gap-9 justify-center absolute bottom-0 items-center bg-black w-full text-white pt-24"
	>
		<div
			class=" md:w-full flex flex-col gap-8 md:gap-10 md:justify-between md:flex-row lg:px-32 md:px-20"
		>
			<img src={footerLogo} alt="logo" class="w-72 md:w-60 m-auto md:m-0 lg:w-72" />

			<div class="w-96 border-t opacity-20 md:hidden"></div>

			<ul
				class=" flex flex-col md:flex-row gap-4 md:gap-10 whitespace-nowrap text-xl text-center lg:gap-28"
			>
				<li >OUR COMPANY</li>
				<li>LOCATIONS</li>
				<li>CONTACT</li>
			</ul>
		</div>

		<div class="w-full border-t opacity-20 hidden md:block"></div>

		<div class=" pb-10 flex flex-col lg:gap-28 md:flex-row md:m-20">
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
				<li><Facebook /></li>
				<li><YouTube /></li>
				<li><Twitter /></li>
				<li><Pinterest /></li>
				<li><Instagram /></li>
			</ul>
		</div>
	</div>
</footer>

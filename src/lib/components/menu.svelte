<script lang="ts">
	import logo from '$lib/assets/shared/desktop/logo-dark.png';
	import Hamburger from '$lib/assets/shared/mobile/icon-hamburger.svelte';
	let openMenu = $state(false);

	function toggleMenu(): any {
		openMenu = !openMenu;
	}
</script>

<nav class="  md:hidden flex justify-between px-7 py-4 sticky top-0 bg-white z-50">
	<img src={logo} alt="logo" class=" w-64" />
	<button onclick={toggleMenu}><Hamburger /></button>
</nav>
{#if openMenu}
	<ul class=" z-50 bg-black sticky top-16 w-full text-white text-2xl p-7 flex flex-col gap-5 md:hidden">
		<li>WEB DESIGN</li>
		<li>APP DESIGN</li>
		<li>GRAPHIC DESIGN</li>
		<hr />
		<li><a href="/our-company">OUR COMPANY</a></li>
		<li><a href="/locations">LOCATIONS</a></li>
		<li><a href="/contact">CONTACT</a></li>
	</ul>
	<button
		onclick={toggleMenu}
		class="fixed inset-0 bg-black/40 z-10 md:hidden {openMenu
			? 'block'
			: 'hidden'} "
	></button>
{/if}

<nav class=" hidden md:flex justify-between text-xl px-10 py-8 lg:px-40 gap-8 lg:gap-32">
	<img src={logo} alt="logo" class=" w-64 lg:w-64" />
	<ul class=" flex gap-10 whitespace-nowrap">
		<li><a href="/our-company">OUR COMPANY</a></li>
		<li><a href="/locations">LOCATIONS</a></li>
		<li><a href="/contact">CONTACT</a></li>
	</ul>
</nav>

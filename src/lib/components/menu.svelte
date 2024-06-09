<script lang="ts">
	import logo from '$lib/assets/shared/desktop/logo-dark.png';
	import Hamburger from '$lib/assets/shared/mobile/icon-hamburger.svelte';
	let openMenu = $state(false);

	function toggleMenu(): any {
		openMenu = !openMenu;
	}
</script>

<nav class=" z-auto md:hidden flex justify-between px-7 py-4 relative">
	<img src={logo} alt="logo" class=" w-64" />
	<button onclick={toggleMenu}><Hamburger /></button>
</nav>
{#if openMenu}
	<ul class=" z-50 bg-black absolute w-full text-white text-2xl p-7 flex flex-col gap-5 md:hidden">
		<li>WEB DESIGN</li>
		<li>APP DESIGN</li>
		<li>GRAPHIC DESIGN</li>
		<hr />
		<li>OUR COMPANY</li>
		<li>LOCATIONS</li>
		<li>CONTACT</li>
	</ul>
	<button
		onclick={toggleMenu}
		class=" h-screen overflow-x-hidden absolute  w-screen top-20 left-0 bg-black/40 z-10 md:hidden {openMenu
			? 'block'
			: 'hidden'} "
	></button>
{/if}

<nav class=" hidden md:flex justify-between text-xl px-10 py-8 lg:px-40 gap-8 lg:gap-32">
	<img src={logo} alt="logo" class=" w-64 lg:w-64" />
	<ul class=" flex gap-10 whitespace-nowrap">
		<li>OUR COMPANY</li>
		<li>LOCATIONS</li>
		<li>CONTACT</li>
	</ul>
</nav>

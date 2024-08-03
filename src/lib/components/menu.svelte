<script lang="ts">
	import logo from '$lib/assets/shared/desktop/logo-dark.png';
	import Hamburger from '$lib/assets/shared/mobile/icon-hamburger.svelte';
	let openMenu = $state(false);

	function toggleMenu(): any {
		openMenu = !openMenu;
	}
</script>

<nav class="  md:hidden flex justify-between px-7 py-4 sticky top-0 bg-white z-50">
	<a href="/"><img src={logo} alt="logo" class=" w-64" /></a>
	<button onclick={toggleMenu}><Hamburger /></button>
</nav>
{#if openMenu}
	<ul class=" z-50 bg-black sticky top-16 w-full text-white text-2xl p-7 flex flex-col gap-5 md:hidden ">
		<li><a onclick={toggleMenu} href="/web-design">WEB DESIGN</a></li>
		<li><a onclick={toggleMenu} href="/app-design">APP DESIGN</a></li>
		<li><a onclick={toggleMenu} href="/graphic-design">GRAPHIC DESIGN</a></li>
		<hr />
		<li ><a onclick={toggleMenu} href="/our-company">OUR COMPANY</a></li>
		<li><a onclick={toggleMenu} href="/locations">LOCATIONS</a></li>
		<li><a onclick={toggleMenu} href="/contact">CONTACT</a></li>
	</ul>
	<button
		onclick={toggleMenu}
		class="fixed inset-0 bg-black/40 z-10 md:hidden {openMenu
			? 'block'
			: 'hidden'} "
	></button>
{/if}

<nav class=" hidden md:flex justify-between text-xl px-10 py-8 lg:px-40 gap-8 lg:gap-32">
	<a href="/"><img src={logo} alt="logo" class=" w-64 lg:w-64 duration-300 transform hover:scale-110" /></a>
	<ul class=" flex gap-10 whitespace-nowrap">
		<li class="  duration-300 transform hover:scale-110"><a href="/our-company">OUR COMPANY</a></li>
		<li  class="  duration-300 transform hover:scale-110"><a href="/locations">LOCATIONS</a></li>
		<li  class="  duration-300 transform hover:scale-110"><a href="/contact">CONTACT</a></li>
	</ul>
</nav>

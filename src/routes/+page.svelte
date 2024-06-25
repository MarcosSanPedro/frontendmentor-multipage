<script lang="ts">
	export let data;
	const { items } = data;
	const { components } = data;
	const [leftItem, ...rightItems] = Object.values(components);
</script>

<div
	class=" fondoBolota bg-no-repeat bg-right bg-papaya text-center flex flex-col items-center px-6 text-white gap-6 mb-12 pt-6 md:w-5/6 md:px-20 m-auto md:rounded-3xl lg:gap-8 xl:w-full xl:flex-row xl:items-start xl:pt-32 xl:gap-64 xl:rounded-none"
>
	<div class="text-center flex flex-col items-center gap-6 xl:px-5 xl:text-left xl:gap-12 ">
		<h2 class=" text-4xl xl:text-6xl">Award-winning custom designs and digital branding solutions</h2>
		<p class=" text-2xl">
			With over 10 years in the industry, we are experienced in creating fully responsive websites,
			app design, and engaging brand experiences. Find out more about our services.
		</p>
		<button class="bg-white py-4 px-7 rounded-md text-2xl text-black">Learn More</button>
	</div>
	<img
		src="/shared/framePhone.png"
		alt="img"
		class="   rounded-t-3xl xl:hidden"
	/>
	<img
		src="/shared/frameHome.png"
		alt="img"
		class="   rounded-t-3xl hidden xl:block"
	/>
</div>

<div class=" flex flex-col lg:gap-">
	{#each Object.entries(components) as [id, a]}
		<div class=" flex flex-col relative items-center h-80 md:h-64 w-5/6 m-auto justify-center">
			<img
				src={a.srcPhone}
				alt="img"
				class=" rounded-xl absolute top-0 z-0 w-fit filter brightness-50 md:hidden"
			/>
			<img
				src={a.srcTablet}
				alt="img"
				class=" rounded-xl absolute top-0 z-0 w-full filter brightness-50 hidden md:block lg:hidden"
			/>

			<img
				src={a.srcTablet}
				alt="img"
				class=" rounded-xl hidden lg:block absolute top-0 z-0 w-fit filter brightness-50"
			/>

			<h2 class="z-20 absolute top-24 text-white md:top-16 text-4xl">{a.tittle}</h2>
			<p class="absolute top-40 md:top-28 z-20 text-xl text-white tracking-widest flex gap-4">
				VIEW PROJECTS <img src="/shared/icon-right-arrow.svg" alt="" />
			</p>
		</div>
	{/each}
</div>

<div class=" flex flex-col items-center justify-center px-10 gap-12 py-12 xl:flex-row">
	{#each Object.entries(items) as [id, product]}
		<div
			class=" flex flex-col items-center justify-center text-center gap-4 md:flex-row md:text-left xl:flex-col xl:text-center"
		>
			<img src={product.src} alt="img" class="fondoBolita bg-center bg-no-repeat" />
			<div class=" flex flex-col gap-4">
				<h2 class=" text-3xl">{product.tittle}</h2>
				<p class=" text-lg">{product.text}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.fondoBolota{
		background-image: url('../lib/assets/home/desktop/bg-pattern-hero-home.svg');

	}
	.fondoBolita {
		background-image: url('../lib/assets/shared/desktop/bg-pattern-small-circle.svg');
	}
</style>

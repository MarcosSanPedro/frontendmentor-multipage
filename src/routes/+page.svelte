<script lang="ts">
	export let data;
	const { items } = data;
	const { components } = data;
    const [leftItem, ...rightItems] = Object.values(components);
</script>

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

<div>
	{#each Object.entries(components) as [id, a]}
		<div class=" flex  flex-col relative items-center h-  md:h-64 w-5/6 m-auto justify-center ">
			<img src={a.srcPhone} alt="img" class=" rounded-xl  absolute top-0 z-0 w-fit filter brightness-50 md:hidden"/>
			<img src={a.srcTablet} alt="img" class=" rounded-xl  absolute top-0 z-0 w-full filter brightness-50 hidden md:block lg:hidden"/>
            <div class="hidden lg:flex lg:flex-col h-96 relative  items-center  w-5/6 m-auto justify-center">
			<img src={a.srcTablet} alt="img" class=" rounded-xl  absolute top-0 z-0 w-full filter brightness-50  "/>
        </div>
			<h2 class="z-20 absolute top-24 text-white md:top-16 text-4xl">{a.tittle}</h2>
            <p class="absolute top-40 md:top-28 z-20 text-xl text-white tracking-widest flex gap-4">VIEW PROJECTS <img src="/shared/icon-right-arrow.svg" alt=""></p>
		</div>
	{/each}
    
</div>

<style>
	.fondoBolita {
		background-image: url('../lib/assets/shared/desktop/bg-pattern-small-circle.svg');

	}
    
</style>

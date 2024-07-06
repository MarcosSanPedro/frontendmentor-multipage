<script>
	import Country from "$lib/components/country.svelte";

</script>


<div class="  mb-16 md:w-11/12 m-auto xl:w-4/5 flex flex-col xl:flex-row">
	<img src="/aboutUs/mobile/image-about-hero.jpg" class=" w-full md:hidden" alt="images" />
	<img
		src="/aboutUs/tablet/image-about-hero.jpg"
		class=" w-full hidden md:block rounded-t-3xl xl:hidden"
		alt="images"
	/>
	<div
		class=" fondoBolota bg-center bg-no-repeat bg-papaya flex flex-col items-center md:rounded-b-3xl xl:rounded-br-none lg:px-24 py-14 gap-4 px-10 text-center text-white xl:gap-8 xl:rounded-l-2xl"
	>
		<h2 class=" font-bold text-4xl lg:text-5xl">About Us</h2>
		<p class=" text-xl lg:text-2xl">
			Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve
			partnered with many startups, corporations, and nonprofits alike to craft designs that make
			real impact. We’re always looking forward to creating brands, products, and digital
			experiences that connect with our clients’ audiences.
		</p>
	</div>
	<img
		src="/aboutUs/desktop/image-about-hero.jpg"
		class=" w-full hidden xl:block rounded-r-2xl"
		alt="images"
	/>
</div>

<div class="mb-16 md:w-11/12 m-auto xl:w-4/5 flex flex-col xl:flex-row-reverse">
	<img src="/aboutUs/mobile/image-world-class-talent.jpg" class=" w-full md:hidden" alt="images" />
	<img
		src="/aboutUs/tablet/image-world-class-talent.jpg"
		class=" w-full hidden md:block rounded-zt-3xl xl:hidden"
		alt="images"
	/>
	<div
		class=" bg-lighGray flex flex-col items-center md:rounded-b-3xl xl:rounded-bl-none lg:px-24 py-14 gap-4 px-10 text-center xl:gap-8 xl:rounded-r-2xl"
	>
		<h2 class=" font-bold text-papaya text-4xl lg:text-5xl">World-class talent</h2>
		<p class=" text-xl lg:text-2xl">
			We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully
			crafted from concept to launch, ensuring success in its given market. We are constantly
			updating our skills in a myriad of platforms.
		</p>
		<p class=" text-xl lg:text-2xl">
			Our team is multi-disciplinary and we are not merely interested in form — content and meaning
			are just as important. We give great importance to craftsmanship, service, and prompt
			delivery. Clients have always been impressed with our high-quality outcomes that encapsulates
			their brand’s story and mission.
		</p>
	</div>
	<img
		src="/aboutUs/desktop/image-world-class-talent.jpg"
		class=" w-full hidden xl:block rounded-l-2xl"
		alt="images"
	/>
</div>
 
<Country/>

<div class="mb-16 md:w-11/12 m-auto xl:w-4/5 flex flex-col xl:flex-row">
	<img src="/aboutUs/mobile/image-real-deal.jpg" class=" w-full md:hidden" alt="images" />
	<img
		src="/aboutUs/tablet/image-real-deal.jpg"
		class=" w-full hidden md:block rounded-zt-3xl xl:hidden"
		alt="images"
	/>

	<div
		class=" bg-lighGray flex flex-col items-center md:rounded-b-3xl xl:rounded-br-none lg:px-24 py-14 gap-4 px-10 text-center xl:gap-8 xl:rounded-l-2xl"
	>
		<h2 class=" font-bold text-papaya text-4xl lg:text-5xl">The real deal</h2>
		<p class=" text-xl lg:text-2xl">
			As strategic partners in our clients’ businesses, we are ready to take on any challenge as our
			own. Solving real problems require empathy and collaboration, and we strive to bring a fresh
			perspective to every opportunity. We make design and technology more accessible and give you
			tools to measure success.
		</p>
		<p class=" text-xl lg:text-2xl">
			We are visual storytellers in appealing and captivating ways. By combining business and
			marketing strategies, we inspire audiences to take action and drive real results.
		</p>
	</div>
	<img
		src="/aboutUs/desktop/image-real-deal.jpg"
		class=" w-full hidden xl:block rounded-r-2xl"
		alt="images"
	/>
</div>

<style>
	.fondoBolota {
		background-image: url('../../lib/assets/home/desktop/bg-pattern-hero-home.svg');
	}

	
</style>

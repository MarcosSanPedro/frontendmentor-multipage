<script lang="ts">
	import Country from "$lib/components/country.svelte";

</script>

<div class=" fondoBolota bg-no-repeat bg-center xl:bg-left  bg-papaya text-white w-11/12 m-auto rounded-2xl flex flex-col gap-6 my-5 pb-6 xl:flex-row  xl:items-center xl:p-24  ">
	<div class="p-7 md:px-12 flex flex-col gap-6 items-center text-center xl:text-left xl:items-start xl:gap-12">
		<h2 class=" text-5xl xl:text-6xl">Contact Us</h2>
		<p class=" text-xl xl:text-2xl">
			Ready to take it to the next level? Let’s talk about your project or idea and find out how we
			can help your business grow. If you are looking for unique digital experiences that’s
			relatable to your users, drop us a line.
		</p>
	</div>
	<form class=" flex flex-col px-5 gap-5 md:px-16 xl:w-full xl:gap-10 ">
		<input type="text" required placeholder=" Name" class=" bg-transparent text-xl border-0 border-b-2 border-white pb-4 placeholder:text-gray-200 focus:outline-none xl:w-96" />
		<input type="email" required placeholder="Email Address" class=" bg-transparent   text-xl border-0 border-b-2 border-white pb-4 placeholder:text-gray-200 focus:outline-none" />
		<input type="tel" required placeholder="Phone"  class=" bg-transparent  text-xl border-0 border-b-2 border-white pb-4 placeholder:text-gray-200 focus:outline-none"/>
		<textarea  name="boniato" id="info" class=" bg-transparent  text-xl  border-0 border-b-2 border-white pb-6 placeholder:text-gray-200 focus:outline-none" placeholder="Your Message"></textarea>
		
		<button type="submit" class="px-8 text-xl py-3 rounded-xl m-auto mt-5 bg-white text-black hover:text-white hover:bg-black duration-300 ">SUBMIT</button>
	</form>
</div>
 

<Country/>


<style>
.fondoBolota {
	background-image: url('../../lib/assets/home/desktop/bg-pattern-hero-home.svg');
}

</style>
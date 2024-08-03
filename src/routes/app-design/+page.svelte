<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { projects } from '$lib/data/projects';

	const appProjects = projects.appDesign;
</script>

<div
	class=" fondoBolota bg-center bgrepeat bg-papaya flex flex-col items-center rounded-2xl w-11/12 m-auto  lg:px-24 py-14 gap-4 px-10 text-center text-white xl:gap-8 mb-10"
>
	<h2 class=" font-bold text-4xl lg:text-5xl">App Design</h2>
	<p class=" text-xl lg:text-2xl">
		Our mobile designs bring intuitive digital solutions <br> to your customers right at their
		fingertips.
	</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-auto mb-16">
	{#each appProjects as project (project.id)}
		<Card image={project.image} title={project.title} description={project.description} />
	{/each}
</div>

<style>
  .fondoBolota {
    background-image: url('../../lib/assets/shared/desktop/bg-pattern-call-to-action.svg');
  }
  
  </style>

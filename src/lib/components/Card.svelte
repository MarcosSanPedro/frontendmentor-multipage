<script lang="ts">
    export let image: string;
    export let title: string;
    export let description: string;

    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
  </script>
  
  <div class=" rounded-xl shadow-md w-96 md:w-80 xl:w-96 m-auto  ">
    <img src={image} alt={title}  />
    <div class="p-4 text-center py-8 ">
      <h2 class="text-2xl font-semibold mb-2 ">{title}</h2>
      <p class="text-gray-600 text-xl">{description}</p>
    </div>
  </div>
<script lang="ts">

	type Country = {
		src: string,
		name: string,
        enlace:string
	}

const country: Record<number, Country> = {
    1: {
        src: "/aboutUs/desktop/illustration-canada.svg",
        name: 'CANADA',
        enlace: "/locations#canada"
    },
    2: {
        src: '/aboutUs/desktop/illustration-australia.svg',
        name: 'AUSTRALIA',
        enlace: "/locations#australia"
    },
    3: {
        src: '/aboutUs/desktop/illustration-united-kingdom.svg',
        name: 'UNITED KINGDOM',
        enlace: "/locations#uk"
    }

}
</script>


<div class=" flex flex-col items-center justify-center px-10 gap-12 lg:gap-32 xl:gap-52 py-12 md:flex-row  ">
    {#each Object.entries(country) as [id, product]}
            <div
                class=" flex flex-col items-center justify-center text-center gap-6 "
            >
                <img src={product.src} alt="img" class="fondoBolita bg-center bg-no-repeat" />
                    <h2 class=" text-2xl whitespace-nowrap">{product.name}</h2>
                <a href={product.enlace} class="text-2xl py-4 px-6 bg-papaya text-white rounded-xl  hover:bg-black duration-300">Learn More</a>
            </div>
        {/each}
    </div>
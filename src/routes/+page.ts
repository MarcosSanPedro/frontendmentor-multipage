export const prerender = true;


type HomeGadgets = {
    src: string,
    tittle: string,
    text: string,
}

type Components = {
    srcDesktop: string,
    srcTablet: string,
    srcPhone: string,
    tittle: string,
    secondTittle: string,
    text: string,
    enlace:string,
}

const items: Record<number, HomeGadgets> = {
    1: {
        src: "/items/illustration-passionate.svg",
        tittle: 'PASSIONATE',
        text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    2: {
        src: '/items/illustration-resourceful.svg',
        tittle: 'RESOURCEFUL',
        text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",

    },
    3: {
        src: '/items/illustration-friendly.svg',
        tittle: 'FRIENDLY',
        text:"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",

    }

}

type SpecialComponents = Components & {
    srcDesktopLarge: string,
}
 
const components: Record<number, Components | SpecialComponents> = {
    1: {
        srcDesktop: "/components/image-web-design-small-desktop.jpg",
        srcDesktopLarge: "/components/image-web-design-large-desktop.jpg",
        srcTablet: "/components/image-web-design-tablet.jpg",
        srcPhone: "/components/image-web-design-mobile.jpg",
        tittle: 'WEB DESIGN',
        secondTittle: 'Web Design',
        text: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        enlace: 'web-design'
    },
    2: {
        srcDesktop: '/components/image-app-design-desktop.jpg',
        srcTablet: '/components/image-app-design-tablet.jpg',
        srcPhone: '/components/image-app-design-mobile.jpg',
        tittle: 'APP DESIGN',
        secondTittle: 'App Design',
        text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
        enlace: 'app-design'
    },
    3: {
        srcDesktop: '/components/image-graphic-design-desktop.jpg',
        srcTablet: '/components/image-graphic-design-tablet.jpg',
        srcPhone: '/components/image-graphic-design-mobile.jpg',
        tittle: 'GRAPHIC DESIGN',
        secondTittle: 'Graphic Design',
        text:"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
        enlace: 'graphic-design'
    }
}


export const load = async () => {
    return {
        items,
        components
    }
}

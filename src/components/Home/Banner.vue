<template>
    <vueper-slides 
        class="no-shadow"
        :touchable="false" 
        :fixed-height="true"
        autoplay
    >
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
        />
    </vueper-slides>
</template>

<script  setup>
    import { ref } from "vue";
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    const slides = ref([
        {
            image: require('@/assets//sish-banner2.png')
        },
        {
            image: require('@/assets//sish-banner1.jpg')
        }
    ]);
 
</script>

<style scoped>

    .vueperslides--fixed-height{
        height: 600px;
    }
    @media(max-width: 600px){
        .vueperslides--fixed-height{
            height: 400px;
        }
    }

</style>


<template>
    <div>
        <vueper-slides class="no-shadow" :fixed-height="true">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
                :video="slide.video" />
        </vueper-slides>
    </div> 
</template>

<script setup>

    import { ref } from 'vue';
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css'; 

    const parallax = ref(1);
    const parallaxFixedContent = ref(false);

    const image = Image; 

    const slides = ref([
        {
            video: {
                url: 'https://www.youtube.com/embed/FU9B3j_d3T4?si=qeZP8II1FTY1OHKB',  
            }
        },
    ]);
</script>

<style scoped>

    .vueperslides--fixed-height{
        height: 600px;
    }
    @media(max-width: 600px){
        .vueperslides--fixed-height{
            height: 250px;
        }
    }

</style>
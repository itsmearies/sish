<template>
    <div>
        <vueper-slides ref="myVueperSlides" 
            class="no-shadow"
            :parallax="parallax" 
            :parallax-fixed-content="parallaxFixedContent"
            :fixed-height="true"
        >
            <vueper-slide :image="image" id="image"/>
        </vueper-slides>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css'; 
    import Image from '@/assets/sish-banner1.jpg';

    const parallax = ref(1);
    const parallaxFixedContent = ref(false);

    const image = Image; 

</script>

<style scoped>

    .vueperslides--fixed-height{
        height: 800px;
    }
    @media(max-width: 600px){
        .vueperslides--fixed-height{
            height: 400px;
        }
    }

</style>

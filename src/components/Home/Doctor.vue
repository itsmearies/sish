<template>
    <div>
        <div class="w-100 mx-auto" style="max-width: 500px;">
            <h1 class="text-h3 text-capitalize text-center">Meet Our Doctors</h1>
            <p class="font-weight-light text-subtitle-1 text-center mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore vero unde eum, deserunt quas accusantium odio distinctio laborum illum.</p>
        </div>
        <div class="mt-16">
            <vue-marquee-slider
                :speed="50000"
                :width="170"
                :space="60"
            >
                <img v-for="doctor in doctors" :key="doctor.Image" :src="doctor.Image"/>
            </vue-marquee-slider>
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { VueMarqueeSlider } from 'vue3-marquee-slider';
    import '/node_modules/vue3-marquee-slider/dist/style.css';
    import Image from '@/assets/logo.png';

    const doctors = ref([
        { Image }, { Image }, { Image },  
        { Image }, { Image }, { Image },
        { Image }, { Image }, { Image }    
    ]);

</script>

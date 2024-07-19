<template>
    <div>
        <div class="w-100 mx-auto" style="max-width: 500px;">
            <h1 class="text-h3 text-capitalize text-center">Services</h1>
            <p class="font-weight-light text-subtitle-1 text-center mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore vero unde eum, deserunt quas accusantium odio distinctio laborum illum.</p>
        </div>
        <vueper-slides
            class="no-shadow mt-10"
            :visible-slides="3"
            slide-multiple
            :gap="2"
            :dragging-distance="200"
            :breakpoints="breakpoints"
            fixed-height="420px"
        >
            <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" class="border"/>
        </vueper-slides>
    </div>
</template>

<script setup>

    import { ref } from "vue";
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    const breakpoints = {
        1800: { visibleSlides: 3, slideMultiple: 3 },
        800: { visibleSlides: 2, slideMultiple: 2 },
        600: { visibleSlides: 1, slideMultiple: 1, arrows: false, bullets: false}
    };
 
</script>

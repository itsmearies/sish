<template>
    <div class="mx-4 mx-dm-15">
        <div class="mx-md-16 px-md-16">
            <h1 class="text-h3">Latest Articles</h1>
            <v-row class="my-3">
                <v-col cols="12" sm="12" md="6">
                    <p class="font-weight-light text-subtitle-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore vero unde eum, deserunt quas accusantium odio distinctio laborum illum.</p>
                </v-col>
                <v-col class="d-flex justify-start justify-md-end align-center" cols="12" sm="12" md="6">
                    <v-btn class="text-capitalize" variant="flat" text="Explore More" color="#41B883"></v-btn>
                </v-col>
            </v-row>
            
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
    </div>
</template>

<script  setup>

    import { ref } from "vue";
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    const breakpoints = {
        1800: { visibleSlides: 3, slideMultiple: 3 },
        800: { visibleSlides: 2, slideMultiple: 2 },
        600: { visibleSlides: 1, slideMultiple: 1, arrows: false, bullets: false}
    };
 
</script>

<style scoped>
</style>

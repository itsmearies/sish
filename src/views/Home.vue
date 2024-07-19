<template>
    <div class="d-flex flex-column" style="gap: 5rem;"> 
        <Banner />
        <div class="d-flex flex-column" style="gap: 9rem;">
            <About />
            <Statistic />
            <Service />
            <Video />
            <Doctor />
            <Article />
            <Event />
            <Partnership />
            <Contact />
            <Footer />
        </div>
    </div>
</template>

<script setup>
    
    import Banner from '@/components/Home/Banner.vue'
    import About from '@/components/Home/About.vue'
    import Statistic from '@/components/Home/Statistic.vue'
    import Service from '@/components/Home/Service.vue'
    import Video from '@/components/Home/Video.vue'
    import Doctor from '@/components/Home/Doctor.vue'
    import Article from '@/components/Home/Article.vue'
    import Event from '@/components/Home/Event.vue'
    import Partnership from '@/components/Home/Partnership.vue'
    import Contact from '@/components/Home/Contact.vue'
    import Footer from '@/components/Footer.vue'

</script>


<template>
  <v-app class="mx-auto" style="max-width: 1920px;">
    <Navigation />
    <ScrollingButton />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>

  import Navigation from '@/components/Navigation.vue'
  import ScrollingButton from '@/components/ScrollingButton.vue'

</script>

<style>
  
  .v-main{
    padding-top: 90px;
  }

</style>

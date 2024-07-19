<template>
  <div class="scroll-button d-flex flex-column" style="gap: .7rem;">
    <v-btn
        class="border bg-white"
        size="45"
        icon="mdi-chevron-up"
        variant="text"
        @click="scrollToTop"
    />
    <v-btn
        class="border bg-white"
        size="45"
        icon="mdi-chevron-down"
        variant="text"
        @click="scrollToBottom"
    />
  </div>
</template>

<script setup>
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
</script>

<style scoped>
.scroll-button {
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 10000;
}
</style>

<template>
  <div class="container p-4 mx-auto">
    <h2 class="text-2xl font-semibold">ABOUT</h2>
    <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consectetur cum eveniet ex facere maxime nemo numquam optio voluptas?</p>
    <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consectetur cum eveniet ex facere maxime nemo numquam optio voluptas?</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>

const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
</style>
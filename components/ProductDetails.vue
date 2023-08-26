<template>
<div>
  <p> {{ product.title }}</p>
  <p> {{ product.price }}</p>
  <p> {{ product.id }}</p>
  <p> {{ product.category }}</p>
</div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>

<style scoped>

</style>
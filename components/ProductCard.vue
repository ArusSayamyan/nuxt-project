<template>
<div>
  <img :src="product.image" alt="" class="image">
  <p>{{ product.title }}</p>
  <NuxtLink :to="`/products/${product.id}`">
    <p>view details</p>
  </NuxtLink>
</div>
</template>

<script setup lang="ts">
const { product } = defineProps(['product']);
</script>



<style scoped>
.image {
  max-width: 150px;
  width: 100%;
}
</style>
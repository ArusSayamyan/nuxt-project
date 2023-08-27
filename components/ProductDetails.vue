<template>
<div>
  <p> {{ product.title }}</p>
  <p> {{ product.price }}</p>
  <p> {{ product.id }}</p>
  <p> {{ product.category }}</p>
  <button>
    <i class="material-icons mr-2"></i>
    <span>add to cart</span>
  </button>
</div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>

<style scoped>

</style>
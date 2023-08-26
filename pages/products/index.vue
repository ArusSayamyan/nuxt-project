<template>
<div>
  <h1>
    PRODUCTS
  </h1>
  <div class="container">
    <div v-for="p in products" class="content">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.content {
  width: 25%;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
}
</style>
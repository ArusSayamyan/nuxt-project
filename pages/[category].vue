<template>
<div class="filteredProds grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
  <ProductCard v-for="item in filteredProds" :key="item.id" :product="item"/>
</div>
</template>


<script setup>
const { category } = useRoute().params;
let filteredProds = [];
const url = 'https://fakestoreapi.com/products'

//fetch the products

const {data: product} = await useFetch(url);
if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}

filteredProds = product.value.filter(prod => {
  return prod.category === category;
})

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>
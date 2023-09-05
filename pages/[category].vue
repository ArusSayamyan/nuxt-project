<template>
<div class="filteredProds grid grid-cols-4 gap-2 md:grid-cols-3 sm:grid-cols-1">
  <ProductCard v-for="item in filteredProds" :key="item.id" :product="item"/>
</div>
</template>


<script setup>
const { category } = useRoute().params;
const url = 'https://fakestoreapi.com/products'

//fetch the products

const {data: product} = await useFetch(url);
if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}


//FILTER PRODUCTS WITH CATEGORIES
const filteredProds = computed(() => {
  return product.value.filter(prod => {
    return prod.category === category;
  })
})

definePageMeta({
  layout: 'products',
})


//CHANGE TITLE OF PAGE
useHead({
  titleTemplate: (titleChunk) => {
    titleChunk = category
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
})
</script>

<style scoped>

</style>
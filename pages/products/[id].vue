<template>
  <div>
<ProductDetails :product="product"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url  = 'https://fakestoreapi.com/products/' + id
definePageMeta({
  layout: 'products'
})

//fetch the products

const {data: product} = await useFetch(url)
</script>

<style scoped>
</style>
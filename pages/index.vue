<template>
<div class="container p-4 mx-auto text">
  <h2 class="text-2xl font-semibold mb-5">HOME</h2>
  <div class="h-96 container flex justify-between items-center mb-5 gap-2 flex-wrap sm:flex-wrap">
    <div v-for="category in filteredArray" :key="category" class="basis-2/5  relative h-full md:basis-1/5">
      <span class="text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-full w-full  text-white bg-slate-800/50 flex justify-center items-center text-[28px]">{{ category.category.toUpperCase() }}</span>
      <img :src="category.image" alt="image" class="p-5 absolute max-h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    </div>
  </div>
  <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consectetur cum eveniet ex facere maxime nemo numquam optio voluptas?</p>
  <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi autem cupiditate delectus deserunt in inventore odit recusandae repellendus tempore.</p>
</div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
const addedCategories = {};

const filteredArray = [];

for (const item of products.value) {
  const { category } = item;
  if (!addedCategories[category]) {
    addedCategories[category] = true;
    filteredArray.push(item);
  }
}

</script>

<style scoped>
</style>
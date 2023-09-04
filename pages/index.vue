<template>
  <head>
    <Title>Home page</Title>
  </head>
<div class="container p-4 mx-auto text">
 <div class="relative">
   <h1 class="text-center font-mono text-6xl max-w-[816px] mx-auto mt-5">
     Make Your <img src="~/assets/img/titleImg.png" alt="titleImg" class="inline"> <span class="text-[#FF413D]">Fashion</span> More Perfect<span class="text-[#FF413D]">.</span>
   </h1>
   <div class="relative max-w-[490px] mx-auto">
   <p class="text-[#636B8A] text-center max-w-[488px] mx-auto text-[20px] mt-[12px]">With our clothing collection, you can take your style to the next level.</p>
   <div class="absolute left-20 top-20">
     <img src="~/assets/img/arrow.svg" alt="">
   </div>
   <MainBtn>
     <p class="btn my-4 max-w-[120px] text-center bg-[#FF413D] mx-auto mt-[65px]">Shop Now</p>
   </MainBtn>
   </div>
   <div class="absolute left-0 top-[120px]">
     <img src="~/assets/img/img1.png" alt="">
   </div>
   <div class="absolute right-0 top-20">
     <img src="~/assets/img/img2.png" alt="">
   </div>
 </div>
  <div class="h-50 container flex justify-between items-center mb-5 gap-2 flex-wrap sm:flex-wrap pt-[150px]">
    <p class="font-mono text-[20px] capitalize">exclusive collection</p>
    <NuxtLink v-for="category in filteredArray" :key="category" :to="`/${category.category}`"  class="basis-2/5  relative h-full md:basis-1/5">
      <div class="h-[250px] relative flex justify-end flex-col">
        <img :src="category.image" alt="image" class="p-5 h-full right-0 absolute z-10">
        <div class="h-32 bg-blue-400 box-border p-[15px] absolute w-full">
          <p class="text-white">{{ category.price }}$</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</div>
</template>

<script setup>
const { product } = defineProps(['product']);
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
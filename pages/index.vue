<template>
  <head>
    <Title>Home page</Title>
  </head>
<div class="container p-4 mx-auto text">
 <div class="relative">
   <h1 class="text-center font-mono text-6xl max-w-[816px] md:text-4xl mx-auto mt-5">
     Make Your <img src="~/assets/img/titleImg.png" alt="titleImg" class="inline"> <span class="text-[#FF413D]">Fashion</span> More Perfect<span class="text-[#FF413D]">.</span>
   </h1>
   <div class="relative max-w-[490px] mx-auto">
   <p class="text-[#636B8A] text-center max-w-[488px] mx-auto text-[20px] mt-[12px]">With our clothing collection, you can take your style to the next level.</p>
   <div class="absolute left-[18%] top-20 sm:left-[8%]">
     <img src="~/assets/img/arrow.svg" alt="">
   </div>
   <MainBtn>
     <p class="btn my-4 max-w-[120px] text-center bg-[#FF413D] mx-auto mt-[65px]">Shop Now</p>
   </MainBtn>
   </div>
   <div class="absolute left-0 top-[120px] md:hidden xl:top-[180px]">
     <img src="~/assets/img/img1.png" alt="" class="xl:w-[70%]" >
   </div>
   <div class="absolute right-0 top-20 md:hidden xl:right-[-25px] xl:top-[180px]" >
     <img src="~/assets/img/img2.png" alt="" class="xl:w-[70%]">
   </div>
 </div>
  <div class="h-50 container flex justify-between items-center mb-5 mx-auto pt-[200px] flex-wrap md:pt-[20px] max-w-[970px]">
    <NuxtLink v-for="category in filteredArray" :key="category" :to="`/${category.category}`"  class="basis-1/4 h-full md:basis-[48%]  hover:scale-110 ease-in-out transition-all">
      <figure class="h-[250px] flex justify-end flex-col">
        <img :src="category.image" alt="image" class="p-5 h-full object-contain">
        <figcaption class="text-center font-mono">{{ category.category.toUpperCase() }}</figcaption>
      </figure>
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
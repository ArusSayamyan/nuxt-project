<template>
  <div class="h-screen grid grid-rows-[auto_1fr_auto]">
    <header class="shadow-sm bg-green">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold uppercase">Nuxt products</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot/>
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">HOME</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">ABOUT</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">PRODUCTS</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p {
  padding: 20px;
}
</style>
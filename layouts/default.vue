<template>
  <div>
    <header class="shadow-sm bg-green">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold uppercase">Nuxt theory</NuxtLink>
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
      </nav>
    </header>

    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>

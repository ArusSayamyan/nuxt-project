<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt</NuxtLink>
        <ul>
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

<script setup lang="ts">

</script>

<style scoped>
p {
  padding: 20px;
}
</style>
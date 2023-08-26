<template>
  <div>
    <header>
      <nav>
<NuxtLink to="/products">Nuxt products</NuxtLink>
      </nav>
    </header>

    <div>
      <slot/>
    </div>

    <footer>
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
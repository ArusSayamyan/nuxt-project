<template>
<div>
  <p>
    {{ error.statusCode }}
  </p>
  <p>oooops...</p>
  <p>{{ error.message }}</p>
  <button @click="handleClearError">go home</button>
</div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>
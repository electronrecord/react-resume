<template>
  <div>
    <ul>
      <li v-for="hobby in hobbies">
        {{ hobby }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  const hobbies = [1]
</script>

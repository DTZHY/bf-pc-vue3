<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <bep-button type="primary">底色按钮</bep-button>
    <bep-button type="secondary">边框按钮</bep-button>
    <bep-button type="dashed">虚线按钮</bep-button>
    <bep-button type="danger">警示按钮</bep-button>
    <bep-button type="text">文字按钮</bep-button>
  </main>
</template>

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>脚手架最新支持技术</template>
    <span>Vue3、Ts、Scss、Pinia、Vite、Axios</span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>官网文档参考链接</template>
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue3</a>
    <span>、</span>
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>
    <span>、</span>
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
    <span>、</span>
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>
    <span>、</span>
    <a href="https://github.com/axios/axios" target="_blank" rel="noopener">Axios</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>代码规范</template>
    <span>eslint、prettier</span>
  </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> -->
</template>

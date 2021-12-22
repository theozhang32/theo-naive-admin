<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const redirct: RouteLocationRaw = route.query.redirect
    ? JSON.parse(window.atob(String(route.query.redirect)))
    : { path: '/' };
</script>

<template>
  <div>登录</div>
</template>

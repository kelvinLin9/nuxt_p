<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'

const route = useRoute()

const layouts = {
  UserLayout: defineAsyncComponent(() => import('./layout/UserLayout.vue')),
  AdminLayout: defineAsyncComponent(() => import('./layout/AdminLayout.vue')),
}

const currentLayout = computed(() => {
  if (route.path.startsWith('/admin')) {
    return layouts.AdminLayout
  }
  return layouts.UserLayout
})
</script>

<template>
  <UApp>
    <UContainer>
      <UHeader />
      <component :is="currentLayout">
        <RouterView />
      </component>
    </UContainer>
  </UApp>
</template>

<style scoped></style>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <ULink to="/" class="flex items-center gap-2 font-bold text-xl">
          XENIA PROPERTY MANAGEMENT
        </ULink>
      </template>

      <template #right>
        <UNavigationMenu :items="navigationItems" class="hidden lg:flex" />
      </template>
    </UHeader>
    <NuxtPage />
    <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="navigationItems" class="hidden lg:flex" />
    </UFooter>
  </UApp>
</template>

<script setup>
const navigationItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home',
  },
  {
    label: 'Proprietà',
    to: '/login',
    icon: 'i-lucide-home',
  },
  {
    label: 'Contatti',
    to: '/contact',
    icon: 'i-lucide-phone',
  },
]
</script>
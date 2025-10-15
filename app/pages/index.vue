<template>
  <UPage>
    <UPageHero title="CI PENSIAMO NOI. SEMPRE" 
    description="Affidati a Xenia per gestire il tuo immobile per affitti brevi in maniera professionale e personalizzata. Noi gestiamo, tu ci guadagni."
    :links="links"
    orientation="horizontal"
    >
    <img
      src="~/assets/img/hero.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>

<script setup>
import heroImage from '~/assets/img/hero.jpg'

const links = [
  {
    label: 'Esplora le proprietà',
    to: '/',
    variant: 'text',
    trailingIcon: 'i-lucide-arrow-right'
  },
  
]
</script>
<template>
  <div class="pt-6 px-4 md:px-10 lg:px-30 xl:px-40">
    <navbar />
    <Nuxt
      class="px-4 md:px-24 lg:px-56 text-2xl font-light tracking-wide mb-16"
    />
  </div>
</template>

<script>
import Navbar from '@/components/generics/Navbar.vue';

export default {
  name: 'Article',
  components: {
    Navbar,
  },
};
</script>

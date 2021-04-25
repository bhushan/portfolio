<template>
  <nav class="flex justify-between items-center mb-16">
    <div>
      <nuxt-link
        :to="{ path: '/' }"
        class="uppercase text-2xl tracking-tight text-blue-900 logo"
      >
        RB
      </nuxt-link>
    </div>
    <div class="uppercase text-sm tracking-tight text-blue-900">
      <nuxt-link :to="{ path: '/' }">
        Home
      </nuxt-link>
      <span>|</span>
      <nuxt-link :to="{ path: '/resume' }">
        Resume
      </nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  font-weight: 700;
}
</style>

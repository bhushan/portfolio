<template>
  <nav class="flex justify-between items-center mb-16">
    <div>
      <nuxt-link
        :to="{ path: '/' }"
        class="font-black tracking-widest text-xl"
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

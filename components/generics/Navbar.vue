<template>
  <nav class="flex justify-between items-center mb-16">
    <div>
      <a
        href="/"
        class="font-black tracking-widest text-xl"
      >bhushang.dev</a>
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

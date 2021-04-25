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
      <template v-for="(navItem, index) in navbarLinks">
        <nuxt-link
          :key="`link-${navItem.path}-${index}`"
          :to="{ path: navItem.path }"
        >
          {{ navItem.name }}
        </nuxt-link>
        <span
          v-if="showPipe(index)"
          :key="`pipe-${navItem.path}-${index}`"
        >|</span>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navbarLinks: [
        {
          name: 'Articles',
          path: '/articles',
        },
        {
          name: 'Resume',
          path: '/resume',
        },
      ],
    };
  },

  methods: {
    showPipe (itemIndex) {
      return this.navbarLinks.length - 1 > itemIndex;
    },
  },
};
</script>

<style scoped>
.logo {
  font-weight: 700;
}
</style>

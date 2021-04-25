<template>
  <ul>
    <li
      v-for="article in articlesList"
      :key="article.path"
    >
      <nuxt-link :to="{ path: article.path }">
        {{ article.name.toString().toUpperCase() }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticlesList',
  layout: 'article',
  computed: {
    articlesList () {
      const prefix = '/articles/';
      return [
        {
          name: 'SOLID Principles',
          path: prefix + 'solid-principles',
        },
      ];
    },
  },
};
</script>

<template>
  <div>
    <article-title>
      Som Title
    </article-title>
    <article-author />
    <article-body>
      article
    </article-body>
  </div>
</template>

<script>
import ArticleTitle from '@/components/articles/ArticleTitle';
import ArticleAuthor from '@/components/articles/ArticleAuthor';
import ArticleBody from '@/components/articles/ArticleBody';

export default {
  name: 'ArticlesList',
  layout: 'article',

  components: {
    ArticleBody,
    ArticleTitle,
    ArticleAuthor,
  },
};
</script>

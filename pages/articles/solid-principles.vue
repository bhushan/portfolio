<template>
  <div>
    <article-title>
      🔥 SOLID PRINCIPLES 🔥
    </article-title>
    <article-author>
      <template #published-at>
        {{ publishedAt }}
      </template>
      <template #time-to-read>
        1 min read
      </template>
    </article-author>
    <article-body>
      <img
        class="rounded-2xl"
        src="https://pbs.twimg.com/media/EyHPOo7VIAAbFRn?format=jpg&name=large"
        alt="SOLID-PRINCIPLES"
      />
      <article class="mt-8">
        <p>First of all, It is an acronym.</p>
        <p>S => Single Responsibility Principle</p>
        <p>O => Open Close Principle</p>
        <p>L => Liskov Substitution Principle</p>
        <p>I => Interface Segregation</p>
        <p>D => Dependency Inversion</p>
      </article>
      <article class="mt-8">
        <p class="mb-6">
          So let’s dig in to the SOLID principles at a glance.
        </p>
        <hr />
        <b>Single Responsibility:</b>
        <p>
          A Class should be responsible for a single task.
        </p>
        <hr />
        <b>Open-Close Principle:</b>
        <p>
          A Class should be open to extension and close to modification.<br />
        </p>
        <hr />
        <b>Liskov Substitution:</b>
        <p>
          A derived Class can be substituted at places where base Class is used.<br />
        </p>
        <hr />
        <b>Interface Segregation:</b>
        <p>
          Don’t make FAT Interfaces. i.e. Classes don’t have to override extra agreements that are not needed for that Class simply because it is there in interface.<br />
        </p>
        <hr />
        <b>Dependency Inversion:</b>
        <p>
          Depend on abstractions, not on concretions. Not only high level Classes but low level Classes also depend on the abstractions in order to decouple the code.<br />
        </p>
        <hr />
      </article>
    </article-body>
  </div>
</template>

<script>
import formatDistance from 'date-fns/formatDistance';

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

  computed: {
    publishedAt () {
      const april = 3;
      const duration = formatDistance(
        new Date(),
        new Date(2021, april, 25, 23, 28, 0),
      );

      return `published ${duration} ago...`;
    },
  },
};
</script>

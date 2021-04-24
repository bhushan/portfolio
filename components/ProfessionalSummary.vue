<template>
  <p class="text-sm">
    Developer who thinks about
    <span class="font-bold">re-usability</span> and
    <span class="font-bold">readability</span> of
    <span class="font-bold">code</span> and how
    <span class="font-bold">extensible</span>
    is code, how to leverage
    <span class="font-bold">TDD (Test Driven Development)</span>. Working in
    <span class="font-bold">web domain</span> for
    <span class="font-bold">more than {{ yearsOfExperience }} years</span> and
    have expert level expertise in
    <span class="font-bold">Laravel, Vue</span> stack. I am a self taught
    developer. I know how to <span class="font-bold">find answers </span> and
    self motivator.
  </p>
</template>

<script>
export default {
  name: 'ProfessionalSummary',
  computed: {
    yearsOfExperience () {
      return new Date().getFullYear() - 2015;
    },
  },
};
</script>

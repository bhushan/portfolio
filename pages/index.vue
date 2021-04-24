<template>
  <div class="max-w-4xl flex items-center h-auto flex-wrap mx-auto">
    <div
      class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-xl bg-white lg:mx-0"
    >
      <div class="p-4 md:p-8 text-center lg:text-left">
        <div
          class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center avatar-sm"
        ></div>
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">
          Bhushan Gaikwad
        </h1>
        <h2 class="text-sm font-semibold text-gray-500 uppercase">
          Full Stack Developer
        </h2>
        <div
          class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"
        ></div>
        <professional-summary class="pt-4" />
        <info-list class="mt-4" />
      </div>
    </div>
    <div class="w-full lg:w-2/5">
      <img
        src="~/assets/images/profile/avatar.jpeg"
        class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      />
    </div>
  </div>
</template>

<script>
import ProfessionalSummary from '@/components/ProfessionalSummary';
import InfoList from '@/components/InfoList';

export default {
  components: {
    InfoList,
    ProfessionalSummary,
  },
};
</script>

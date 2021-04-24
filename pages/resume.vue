<template>
  <div class="md:flex md:flex-row md:gap-10">
    <div class="md:w-1/4">
      <h1 class="text-center font-semibold text-2xl md:hidden">
        Full Stack Developer
      </h1>
      <div
        class="block rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center mt-4 avatar-sm"
      ></div>
      <h2 class="text-center font-semibold text-2xl mt-4">
        Bhushan Gaikwad
      </h2>
      <h3
        class="text-center font-bold hidden md:block text-sm uppercase text-gray-500"
      >
        Full Stack Developer
      </h3>
      <info-list class="mt-12" />
      <!--
      <div class="mt-12">
        <button
          class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-6 py-4 rounded-lg shadow hover:shadow-md outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
        >
          Download Resume
        </button>
      </div>
      -->
    </div>
    <div class="md:w-3/3">
      <h2 class="hidden md:block md:mt-4 font-semibold text-2xl">
        Professional Summary
      </h2>
      <professional-summary class="mt-8 md:mt-5" />
      <h2 class="mt-12 font-semibold text-2xl">
        Work Experience
      </h2>
      <work-experience>
        <template v-slot:designation>
          Module Lead
        </template>
        <template v-slot:company>
          Oostelijke Onderneming, LLP
        </template>
        <template v-slot:location>
          Pune
        </template>
        <template v-slot:type>
          Full Time
        </template>
        <template v-slot:duration>
          September, 2020 - Present
        </template>
      </work-experience>
      <work-experience>
        <template v-slot:designation>
          Senior Software Developer
        </template>
        <template v-slot:company>
          Oostelijke Onderneming, LLP
        </template>
        <template v-slot:location>
          Pune
        </template>
        <template v-slot:type>
          Full Time
        </template>
        <template v-slot:duration>
          March, 2020 - September, 2020
        </template>
      </work-experience>
      <work-experience>
        <template v-slot:designation>
          Founder & Full Stack Freelancer
        </template>
        <template v-slot:company>
          Enlight Technologies
        </template>
        <template v-slot:location>
          Remote Works
        </template>
        <template v-slot:type>
          Full Time
        </template>
        <template v-slot:duration>
          Jan, 2018 - Feb, 2020
        </template>
      </work-experience>
      <work-experience>
        <template v-slot:designation>
          Team Lead
        </template>
        <template v-slot:company>
          Impel Infotech Pvt. Ltd.
        </template>
        <template v-slot:location>
          Nandurbar
        </template>
        <template v-slot:type>
          Full Time
        </template>
        <template v-slot:duration>
          Jan, 2017 - Oct, 2017
        </template>
      </work-experience>
      <work-experience>
        <template v-slot:designation>
          Freelancer
        </template>
        <template v-slot:company>
          -
        </template>
        <template v-slot:location>
          Remote Works
        </template>
        <template v-slot:type>
          Part Time
        </template>
        <template v-slot:duration>
          Aug, 2015 - Nov, 2016
        </template>
      </work-experience>

      <h2 class="mt-12 font-semibold text-2xl">
        Education
      </h2>
      <education>
        <template v-slot:degree>
          Bachelor of Engineering, Computer Science (B.E.) -
          <span class="text-gray-600 font-black">63.73%</span>
        </template>
        <template v-slot:institute>
          North Maharashtra University
        </template>
        <template v-slot:duration>
          2010 - 2015
        </template>
      </education>
      <education>
        <template v-slot:degree>
          Higher Secondary Certificate (H.S.C.) -
          <span class="text-gray-600 font-black">74.33%</span>
        </template>
        <template v-slot:institute>
          Maharashtra State Board of Secondary and Higher Secondary Education
        </template>
        <template v-slot:duration>
          2009
        </template>
      </education>
      <education>
        <template v-slot:degree>
          Secondary School Certificate (S.S.C.) -
          <span class="text-gray-600 font-black">77.84%</span>
        </template>
        <template
          v-slot:institute
        >
          Maharashtra State Board of Secondary and Higher Secondary
          Education
        </template>
        <template v-slot:duration>
          2007
        </template>
      </education>
    </div>
  </div>
</template>

<script>
import InfoList from '@/components/InfoList';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import ProfessionalSummary from '@/components/ProfessionalSummary';

export default {
  components: {
    InfoList,
    Education,
    WorkExperience,
    ProfessionalSummary,
  },
};
</script>

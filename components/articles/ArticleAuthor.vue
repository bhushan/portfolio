<template>
  <div class="flex flex-col md:flex-row items-center my-12">
    <img
      src="~/assets/images/profile/avatar-sm.jpeg"
      class="rounded-full h-8 shadow-outline shadow-xl mr-2"
      alt="avatar-sm"
    />
    <span class="text-sm mr-2 text-blue-700">
      Bhushan Gaikwad
    </span>
    <span class="text-sm mr-2">
      <slot name="published-at"></slot>
    </span>
    <span class="text-sm mr-2">
      <slot name="time-to-read"></slot>
    </span>
  </div>
</template>

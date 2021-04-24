<template>
  <div
    class="flex flex-col md:flex-row justify-between border-b-2 border-gray-200 mt-2 py-4"
  >
    <div>
      <p class="font-hairline text-lg">
        <slot name="designation"></slot>
      </p>
      <div
        class="flex justify-start items-center gap-3 text-gray-500 text-sm mt-4"
      >
        <span class="inline-flex justify-center items-center">
          <svg
            class="h-4 fill-current text-gray-500 pr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            />
          </svg>
          <slot name="company"></slot>
        </span>
        <span class="inline-flex justify-center items-center">
          <svg
            class="h-4 fill-current text-gray-500 pr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
            />
          </svg>
          <slot name="location"></slot>
        </span>
      </div>
    </div>
    <div class="flex flex-row md:flex-col items-center mt-4 md:mt-0">
      <div class="md:ml-auto">
        <span
          class="bg-green-200 text-green-800 px-4 py-2 rounded-full text-center text-xs font-semibold"
        >
          <slot name="type"></slot>
        </span>
      </div>
      <span
        class="inline-flex items-center text-gray-500 text-sm ml-4 md:ml-0 md:mt-4"
      >
        <svg
          class="h-4 fill-current text-gray-500 pr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <circle
            cx="386"
            cy="210"
            r="20"
          />
          <path
            d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
          />
          <path
            d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
          />
          <path
            d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
          />
          <circle
            cx="299"
            cy="210"
            r="20"
          />
          <circle
            cx="212"
            cy="297"
            r="20"
          />
          <circle
            cx="125"
            cy="210"
            r="20"
          />
          <circle
            cx="125"
            cy="297"
            r="20"
          />
          <circle
            cx="125"
            cy="384"
            r="20"
          />
          <circle
            cx="212"
            cy="384"
            r="20"
          />
          <circle
            cx="212"
            cy="210"
            r="20"
          />
        </svg>
        <slot name="duration"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
};
</script>

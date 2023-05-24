<template>
  <div
    id="home"
    class="mt-0 flex h-full flex-col-reverse items-center justify-center lg:-mt-20 lg:h-screen xl:flex-row"
  >
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      class="mt-24 flex-1 space-y-8 text-center dark:text-gray-400 xl:mt-0 xl:text-left"
    >
      <div class="space-y-2">
        <h2 class="text-2xl">Greetings, Earthlings!</h2>
        <h1 class="dark:glow-text text-7xl font-bold dark:text-gray-300">
          I'm Nehry Dedoro
        </h1>
        <TextTyping />
      </div>
      <p>
        Fuelled by an insatiable curiosity, I constantly explore the
        ever-expanding universe of technology and it's galactic information.
        Just as galaxies collide and form new wonders, I blend my diverse skills
        and experiences to create innovative solutions that transcend the
        boundaries of possibility
      </p>

      <div class="group relative mx-auto w-36 xl:mx-0">
        <div
          class="absolute -inset-1 rounded-full from-yellow-600 to-yellow-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
        ></div>
        <a
          href="~/assets/files/John_Nehry_C_Dedoro_Resume.pdf"
          download
          class="relative flex w-full items-center justify-center rounded-full border-2 border-white bg-gray-100 px-4 py-4 text-sm font-semibold leading-none text-gray-900 shadow-lg ring-1 ring-gray-900/5 transition duration-200 ease-in-out dark:border-0 dark:bg-gray-900 dark:text-gray-500 dark:shadow-none dark:group-hover:text-white dark:group-hover:ring-2 dark:group-hover:ring-gray-900"
        >
          Download CV
        </a>
      </div>
    </div>

    <div class="h-96 flex-1">
      <div class="relative flex h-full items-center justify-center">
        <div
          class="absolute -top-5 left-24 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none sm:h-52 sm:w-52"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-red-600 to-yellow-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_5.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-16 right-16 h-32 w-32 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-blue-600 to-blue-300 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_4.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute -bottom-12 left-48 h-20 w-20 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none sm:h-36 sm:w-36"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-red-600 to-orange-300 opacity-25 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_3.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-20 left-24 h-20 w-20 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-gray-200 to-gray-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/moon.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-2 left-28 h-12 w-12 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="from-purple-600-600 absolute -inset-1 rounded-full to-pink-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_1.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute -bottom-4 left-12 h-10 w-10 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-blue-600 to-blue-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_0.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="z-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            class="relative h-52 w-52 rounded-full border-2 border-stone-700 sm:h-72 sm:w-72"
            src="~/assets/images/nehry.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.glow-text {
  text-shadow: 0 0 8px rgb(184, 184, 255);
}
</style>

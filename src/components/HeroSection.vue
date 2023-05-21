<template>
  <div
    id="home"
    class="flex xl:flex-row lg:-mt-20 mt-0 flex-col-reverse items-center justify-center lg:h-screen h-full"
  >
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      class="flex-1 space-y-8 xl:text-left text-center xl:mt-0 mt-24 dark:text-gray-400"
    >
      <div class="space-y-2">
        <h2 class="text-2xl">Greetings, Earthlings!</h2>
        <h1 class="font-black text-7xl dark:text-gray-300 glow-text">
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

      <div class="xl:mx-0 mx-auto relative group w-36">
        <div
          class="absolute -inset-1 dark:bg-gradient-to-r from-yellow-600 to-yellow-100 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        ></div>
        <button
          class="dark:bg-gray-900 dark:text-gray-500 shadow-lg dark:shadow-none border-2 border-white dark:border-0 bg-gray-100 flex items-center justify-center w-full relative px-4 py-4 rounded-full ring-1 ring-gray-900/5 leading-none font-semibold text-sm text-gray-900 transition duration-200 ease-in-out dark:group-hover:ring-2 dark:group-hover:ring-gray-900 dark:group-hover:text-white"
        >
          Download CV
        </button>
      </div>
    </div>

    <div class="flex-1 h-96">
      <div class="relative h-full flex items-center justify-center flex-1">
        <div
          class="absolute h-52 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-52 rounded-full -top-5 left-24"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-red-600 to-yellow-100 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
              src="~/assets/images/planet_5.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute h-32 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-32 rounded-full bottom-16 right-16"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-blue-600 to-blue-300 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
              src="~/assets/images/planet_4.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute h-36 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-36 rounded-full -bottom-12 left-48"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-red-600 to-orange-300 rounded-full blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
              src="~/assets/images/planet_3.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute h-20 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-20 rounded-full bottom-20 left-24"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
              src="~/assets/images/moon.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute h-12 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-12 rounded-full bottom-2 left-28"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-purple-600-600 to-pink-100 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
              src="~/assets/images/planet_1.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute h-10 dark:bg-none from-[#FFE99A] to-[#FFF6D6] bg-gradient-to-b w-10 rounded-full -bottom-4 left-12"
        >
          <div class="lg:mx-0 mx-auto relative group">
            <div
              class="absolute -inset-1 dark:bg-gradient-to-r from-blue-600 to-blue-100 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              class="dark:block hidden w-full h-full object-contain transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12"
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
            class="h-72 w-72 rounded-full border-stone-700 border-2"
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
@keyframes glowing {
  0% {
    text-shadow: 0 0 2px #fff;
  }
  25% {
    text-shadow: 0 0 4px #fff;
  }
  35% {
    text-shadow: 0 0 6px #fff;
  }
  50% {
    text-shadow: 0 0 8px #5c99f2;
  }
  75% {
    text-shadow: 0 0 6px #fff;
  }
  85% {
    text-shadow: 0 0 4px #fff;
  }
  100% {
    text-shadow: 0 0 2px #fff;
  }
}

.glow-text {
  animation: glowing 4s linear infinite;
}
</style>

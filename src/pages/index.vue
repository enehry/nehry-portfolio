<template>
  <div class="mx-auto max-w-7xl xl:px-0 px-4">
    <HeroSection />
    <AboutMe />
  </div>
</template>

<script setup>
onMounted(() => {
  // check if dark mode is enabled on local storage
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
<style scoped></style>

<template>
  <div class="nav-logo">
    <epic-games class="w-9 h-9" />
  </div>
</template>

<script>
import EpicGames from "../icons/EpicGames.vue";

export default {
    components: {
        EpicGames,
    },
}
</script>


<style scoped>
.nav-logo {
  @apply relative 
      flex items-center 
      opacity-90 hover:opacity-100 
      transition duration-200 
      z-10 h-full pl-4 cursor-pointer;
}
</style>
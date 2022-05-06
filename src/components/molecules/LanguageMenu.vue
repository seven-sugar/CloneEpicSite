<template>
    <ul class="language-menu group-hover:md:flex">
        <language-item language="العربية"></language-item>
        <language-item language="Deutsch"></language-item>
        <language-item language="English"></language-item>
        <language-item language="简体中文"></language-item>
    </ul>
</template>

<script>
import LanguageItem from '../atoms/LanguageItem.vue'

export default {
  components: { LanguageItem },

}
</script>

<style>
.language-menu {
    @apply hidden md:fixed flex-col justify-center items-center w-32 bg-epic-gray-100 top-12 right-64
}
</style>
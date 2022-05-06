<template>
    <button
    @click="$emit('toggle')"
    class="toggle-button w-13"
    :class="isMenuOpen ? 'bg-epic-gray-200' : 'bg-epic-blue'"
    >
        <cross-icon class="w-8 h-8" v-if="isMenuOpen" />
        <hamburger-menu v-else />
    </button>
</template>

<script>
import CrossIcon from "../icons/CrossIcon.vue";
import HamburgerMenu from "../icons/HamburgerMenu.vue";

export default {
    props: {
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        CrossIcon,
        HamburgerMenu,
    },
}
</script>

<style>
.toggle-button {
    @apply absolute top-0 right-0 
    grid place-items-center 
    text-white
    md:hidden h-full text-2xl
    transition;
}
</style>
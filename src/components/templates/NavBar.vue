<template>
    <nav class="nav-container">
        <logo />
        <div class="nav-menu md:translate-x-0" :class="!isMenuOpen && 'translate-x-full'">
            <ul class="nav-menu-list">
                <menu-item title="store" active />
                <menu-item title="news" />
                <menu-item title="faq" />
                <menu-item title="help" />
                <menu-item title="unreal engine" />
            </ul>
            <div class="nav-second-menu shadow-top md:shadow-none">
                <div
                class="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
                >
                <button class=" group w-1/3 h-full md:mr-5 flex justify-center items-center  md:w-auto opacity-70 hover:opacity-100">
                    <globe class="w-8 h-8 md:w-5 md:h-5" />
                    <language-menu class="group-hover:md:flex"></language-menu>
                </button>
                <router-link to="/signin" class="flex justify-center items-center signin-button">
                    <user class="w-7 md:w-4 h-7 md:h-4" />SIGN IN
                </router-link>
                </div>
                <router-link to="#" class="get-epic-games-button">GET EPIC GAMES</router-link>
            </div>
        </div>
        <toggle-menu @toggle="openMenu" :isMenuOpen="isMenuOpen" />
    </nav>
</template>

<script>
import MenuItem from "../atoms/MenuItem.vue";
import ToggleMenu from "../atoms/ToggleMenu.vue";
import Globe from "../icons/Globe.vue";
import User from "../icons/User.vue";

import state from '@/data/state.js';
import Logo from "../atoms/Logo.vue";
import LanguageMenu from "../molecules/LanguageMenu.vue";

export default {
    components: {
    MenuItem,
    ToggleMenu,
    Globe,
    User,
    Logo,
    LanguageMenu
},
    data() {
        return {
            isMenuOpen: state.isMenuOpen,
        };
    },
    methods: {
        openMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style>
.nav-container {
    @apply fixed flex
      h-13 w-full 
      bg-epic-gray-100 text-white
      text-[0.7rem]
      z-40 select-none;
}
.nav-menu {
    @apply fixed md:static top-0 right-0 
      flex flex-col md:flex-row 
      h-screen md:h-auto
      w-[90%] md:w-full
      justify-between gap-5
      pt-14 md:pt-0 pl-0 md:pl-5 flex-grow
      bg-epic-gray-100
      transition-transform duration-300;
}
.nav-menu-list {
    @apply flex flex-col md:flex-row 
      uppercase 
      text-xs md:text-[10.5px]  
      divide-y md:divide-none divide-white/5;
}
.nav-second-menu {
    @apply
      fixed bottom-0 right-0  md:static 
      flex flex-col md:flex-row 
      text-[8.75px]
      w-[90%] md:w-auto 
      border-t md:border-none border-white/10 
      h-[6.5rem] md:h-auto;
}
.signin-button {
    @apply h-full w-2/3 md:w-auto 
      opacity-70 hover:opacity-100 
      px-5 gap-5 md:gap-3 
      tracking-widest font-bold
      border-r border-white/10 md:border-none;
}
.get-epic-games-button {
    @apply flex items-center justify-center 
      px-6 pt-1 md:pt-0
      bg-epic-blue font-bold
      bg-opacity-90 hover:bg-opacity-100 
      h-full tracking-widest;
}
</style>

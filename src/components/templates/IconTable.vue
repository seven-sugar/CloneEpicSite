<template>
  <div class=" w-screen h-screen grid grid-cols-4 gap-4 place-items-center content-start bg-slate-400">
        <add-icon class="icon"></add-icon>
        <arrow-down-icon class="icon"></arrow-down-icon>
        <arrow-left-icon class="icon"></arrow-left-icon>
        <arrow-right-icon class="icon"></arrow-right-icon>
        <arrow-up-icon class="icon"></arrow-up-icon>
        <check-icon class="icon"></check-icon>
        <cross-icon class="icon"></cross-icon>
        <epic-games-icon class="icon"></epic-games-icon>
        <eye-icon class="icon"></eye-icon>
        <eye-off-icon class="icon"></eye-off-icon>
        <facebook-icon class="icon"></facebook-icon>
        <filter-icon class="icon"></filter-icon>
        <globe-icon class="icon"></globe-icon>
        <hamburger-menu-icon class="icon"></hamburger-menu-icon>
        <icon-gift class="icon"></icon-gift>
        <search-icon class="icon"></search-icon>
        <twitter-icon class="icon"></twitter-icon>
        <unreal-engine-icon class="icon"></unreal-engine-icon>
        <user-icon class="icon"></user-icon>
        <youtube-icon class="icon"></youtube-icon>
  </div>
</template>

<script>
import AddVue from '../icons/Add.vue'
import ArrowDownVue from '../icons/ArrowDown.vue'
import ArrowLeftVue from '../icons/ArrowLeft.vue'
import ArrowRightVue from '../icons/ArrowRight.vue'
import ArrowUpVue from '../icons/ArrowUp.vue'
import CheckIconVue from '../icons/CheckIcon.vue'
import CrossIconVue from '../icons/CrossIcon.vue'
import EpicGamesVue from '../icons/EpicGames.vue'
import EyeIconVue from '../icons/EyeIcon.vue'
import EyeOffIconVue from '../icons/EyeOffIcon.vue'
import FacebookIconVue from '../icons/Facebook.vue'
import FilterIconVue from '../icons/FilterIcon.vue'
import GlobeVue from '../icons/Globe.vue'
import HamburgerMenuVue from '../icons/HamburgerMenu.vue'
import IconGiftVue from '../icons/IconGift.vue'
import SearchVue from '../icons/Search.vue'
import TwitterVue from '../icons/Twitter.vue'
import UnrealEngineVue from '../icons/UnrealEngine.vue'
import UserVue from '../icons/User.vue'
import YoutubeVue from '../icons/Youtube.vue'
export default {
    components: {
        'add-icon': AddVue,
        'arrow-down-icon': ArrowDownVue,
        'arrow-left-icon': ArrowLeftVue,
        'arrow-right-icon': ArrowRightVue,
        'arrow-up-icon': ArrowUpVue,
        'check-icon': CheckIconVue,
        'cross-icon': CrossIconVue,
        'epic-games-icon': EpicGamesVue,
        'eye-icon': EyeIconVue,
        'eye-off-icon': EyeOffIconVue,
        'facebook-icon': FacebookIconVue,
        'filter-icon': FilterIconVue,
        'globe-icon': GlobeVue,
        'hamburger-menu-icon': HamburgerMenuVue,
        'icon-gift': IconGiftVue,
        'search-icon': SearchVue,
        'twitter-icon': TwitterVue,
        'unreal-engine-icon': UnrealEngineVue,
        'user-icon': UserVue,
        'youtube-icon': YoutubeVue,
    }
}
</script>

<style>
.icon {
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>


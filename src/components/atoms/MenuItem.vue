<template>
    <li class="relative h-full px-8 md:px-3.5 group overflow-hidden py-3">
        <div
            class="absolute bottom-0 inset-x-0 w-full h-1.5 bg-epic-blue group-hover:translate-y-0 transition-all duration-150 hidden md:block"
            :class="active ? 'translate-y-0' : 'translate-y-full'"
        ></div>
        <router-link
            :to="href"
            class="flex items-center h-full tracking-widest group-hover:opacity-100"
            :class="active ? 'opacity-100' : 'opacity-70'"
        >{{ title }}</router-link>
  </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        href: {
            type: String,
            default: '#',
        },
        active: {
            type: Boolean,
        },
    }
}
</script>

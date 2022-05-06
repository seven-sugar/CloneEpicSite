<template>
    <li class="language-item">
        <router-link to="#">
            <span class="language">{{ language }}</span>
        </router-link>
    </li> 
</template>

<script>
export default {
    props: {
        language: {
            type: String,
        },
    }
}
</script>

<style>
.language-item {
    @apply h-12 p-2;
}
.language {
    @apply text-center align-middle text-[1rem] opacity-70 hover:opacity-100;
}
</style>
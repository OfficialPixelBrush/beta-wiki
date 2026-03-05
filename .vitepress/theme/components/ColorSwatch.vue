<template>
    <span class="color-swatch-wrapper">
        <span class="swatch" :style="{ backgroundColor: color }"></span>
        <code v-if="showLabel">{{ color }}</code>
    </span>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        required: true
    },

    showLabel: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
    .color-swatch-wrapper {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .swatch {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: 1px solid var(--vp-c-divider);
        vertical-align: middle;
    }
</style>
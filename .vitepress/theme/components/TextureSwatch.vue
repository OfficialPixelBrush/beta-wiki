<template>
  <span class="texture-swatch-wrapper">
    <span v-if="label && showLabel">{{ label }}</span>
    <span class="swatch" :style="{ backgroundImage: `url(${texture_name})` }"></span>
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  texture_name: {
    type: String,
    required: true,
  },

  showLabel: {
    type: Boolean,
    default: true,
  }
});
</script>

<style scoped>
.texture-swatch-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
}

.swatch {
  display: inline-block;
  width: 21px;
  height: 21px;
  border-radius: 4px;
  image-rendering: crisp-edges;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid var(--vp-c-divider);
  vertical-align: middle;
}
</style>

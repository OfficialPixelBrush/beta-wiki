<template>
  <span class="texture-swatch-wrapper">
    <span v-if="label && showLabel">{{ label }}</span>
    <span class="swatch" :style="swatchStyle"></span>
  </span>
</template>

<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";
import {
  ATLAS_FILES,
  ATLAS_TILES,
  isAtlasKind,
  lookupTexture,
  normalizeTextureName,
} from "../textureAtlas";

const props = defineProps({
  label: {
    type: String,
  },
  texture_name: {
    type: String,
  },
  atlas: {
    type: String,
  },
  index: {
    type: Number,
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});

const swatchStyle = computed(() => {
  const mapped = props.texture_name
    ? lookupTexture(props.texture_name)
    : undefined;
  const atlas =
    props.atlas && isAtlasKind(props.atlas) ? props.atlas : mapped?.atlas;
  const index = props.index ?? mapped?.index;
  const size = props.size;

  if (atlas && index != null) {
    const col = index % ATLAS_TILES;
    const row = Math.floor(index / ATLAS_TILES);

    return {
      width: `${size}px`,
      height: `${size}px`,
      backgroundImage: `url(${withBase(ATLAS_FILES[atlas])})`,
      backgroundSize: `${size * ATLAS_TILES}px ${size * ATLAS_TILES}px`,
      backgroundPosition: `${-col * size}px ${-row * size}px`,
      backgroundRepeat: "no-repeat",
    };
  }

  if (props.texture_name) {
    const name = normalizeTextureName(props.texture_name);

    return {
      width: `${size}px`,
      height: `${size}px`,
      backgroundImage: `url(${withBase("/textures/" + name + ".png")})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }

  return {
    width: `${size}px`,
    height: `${size}px`,
  };
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
  flex-shrink: 0;
  box-sizing: content-box;
  border-radius: 4px;
  image-rendering: pixelated;
  border: 1px solid var(--vp-c-divider);
  background-origin: padding-box;
  background-clip: padding-box;
  vertical-align: middle;
}
</style>

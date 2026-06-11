<template>
  <span class="crafting-swatch-wrapper">
    <div class="crafting-frame">
      <div v-if="title" class="crafting-title">
        {{ title }}
      </div>

      <table class="crafting-grid">
        <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
          <td
            v-for="(cell, colIndex) in row"
            :key="colIndex"
            class="cell"
          >
            <TextureSwatch
              v-if="getTexture(cell)"
              :texture_name="getTexture(cell)"
            />
          </td>

          <td
            v-if="rowIndex === 0"
            class="result"
            :rowspan="3"
          >
            <div class="result-wrapper">
              <TextureSwatch :texture_name="getTexture(resultTexture)" />

              <span v-if="resultCount > 1" class="result-count">
                {{ resultCount }}
              </span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </span>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  title: String,

  grid: {
    type: Array,
    required: true,
  },

  resultTexture: {
    type: [String, Array],
    required: true,
  },

  // NEW: optional stack size
  resultCount: {
    type: Number,
    default: 1,
  },
});

const tick = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    tick.value++;
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

function getTexture(cell) {
  if (!cell) return null;

  if (Array.isArray(cell)) {
    if (cell.length === 0) return null;
    return cell[tick.value % cell.length];
  }

  return cell;
}
</script>

<style scoped>
.crafting-frame {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  border: 0px solid #555;
  background: #0f0f0f;
}

.crafting-title {
  font-size: 20px;
  margin-bottom: -15px;
  text-align: center;
}

.crafting-grid {
  border-collapse: separate;
  border-spacing: 6px;
  table-layout: fixed;
  width: auto;
}

.cell,
.result {
  width: 16px;
  height: 16px;
  text-align: center;
  vertical-align: middle;
}

.result-wrapper {
  position: relative;
  display: inline-block;
}

.result-count {
  position: absolute;
  bottom: 2px;
  right: 3px;
  font-size: 10px;
  color: white;
  text-shadow: 1px 1px 0 black;
  pointer-events: none;
}
</style>
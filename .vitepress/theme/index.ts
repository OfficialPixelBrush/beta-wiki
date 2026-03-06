import { type Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ColorSwatch from "./components/ColorSwatch.vue";
import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";
import "./index.css";

export default {
    extends: DefaultTheme,

    enhanceApp: ({ app }) => {
        app.component("ColorSwatch", ColorSwatch);
    },

    // TODO: this is deprecated
    setup: () => {
        const route = useRoute();
        const initZoom = () => {
            mediumZoom("img.zoom", { background: "var(--vp-c-bg)" });
            mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
        };

        onMounted(() => initZoom());

        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    }
} satisfies Theme;

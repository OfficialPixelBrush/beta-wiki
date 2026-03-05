import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ColorSwatch from "./components/ColorSwatch.vue";

export default {
    extends: DefaultTheme,

    enhanceApp: ({ app }) => {
        app.component("ColorSwatch", ColorSwatch);
    }
} satisfies Theme;
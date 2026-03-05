import VitePluginVitePressAutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import { defineConfig } from "vitepress";

export default defineConfig({
    vite: {
        plugins: [
            VitePluginVitePressAutoSidebar({
                titleFromFile: true,
                path: ".",
                scanRootMdFiles: true,
                ignoreList: [
                    ".github",
                    ".vitepress",
                    ".vscode",
                    "node_modules"
                ]
            })
        ]
    },

    title: "Beta Wiki",
    description: "A wiki documenting Minecraft Beta 1.7.3's network protocol and other technical specifications.",

    // MPA builds without javascript, but has to do full-page reload when you navigate between pages
    mpa: false,

    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/mudkipdev/beta-wiki"
            }
        ]
    }
})

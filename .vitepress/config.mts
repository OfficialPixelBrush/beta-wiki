import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(withSidebar({
    title: "Beta Wiki",
    description: "A wiki documenting Minecraft Beta 1.7.3's network protocol and other technical specifications.",
    // MPA builds without javascript, but has to do full-page reload when you navigate between pages
    mpa: false,
    themeConfig: {
        search: {
            provider: "local"
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/mudkipdev/beta-wiki"
            }
        ]
    },
    markdown: {
        math: true
    }
}, {
    documentRootPath: "/",
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    excludeByGlobPattern: ["CONTRIBUTING.md", "TODO.md"],
    manualSortFileNameByPriority: ["legal.md"],
    collapsed: true,
    collapseDepth: 2
}));

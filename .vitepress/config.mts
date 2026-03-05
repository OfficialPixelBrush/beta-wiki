import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(withSidebar({
    title: "Beta Wiki",
    description: "A wiki documenting Minecraft Beta 1.7.3's network protocol and other technical specifications.",
    // MPA builds without javascript, but has to do full-page reload when you navigate between pages
    mpa: false,
    themeConfig: {
        lang: "en",
        logo: "/favicon.ico",
        search: {
            provider: "local"
        },
        nav: [
            {
                text: "Contributing",
                link: "/contributing"
            },
            {
                text: "Projects",
                link: "/projects"
            },
            {
                text: "Resources",
                link: "/resources"
            },
            {
                text: "Credits",
                link: "/credits"
            },
            {
                text: "Legal",
                link: "/legal"
            }
        ],
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/OfficialPixelBrush/beta-wiki"
            }
        ],
        editLink: {
            pattern: "https://github.com/OfficialPixelBrush/beta-wiki/edit/main/:path"
        }
    },
    markdown: {
        math: true
    }
}, {
    documentRootPath: "/",
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    excludeByGlobPattern: [
        "CONTRIBUTING.md",
        "credits.md",
        "legal.md",
        "projects.md",
        "resources.md",
        "todo.md"
    ],
    collapsed: true,
    collapseDepth: 2
}));

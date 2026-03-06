import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(withSidebar({
    base: "/beta-wiki/",
    title: "Beta Wiki",
    description: "A wiki documenting Minecraft Beta 1.7.3's network protocol and other technical specifications.",
    
    head: [
        ['link', { rel: 'icon', href: '/beta-wiki/assets/favicon.ico' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image', content: '/beta-wiki/assets/banner.webp' }],

        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: '/beta-wiki/assets/banner.webp' }]
    ],

    // MPA builds without javascript, but has to do full-page reload when you navigate between pages
    mpa: false,
    themeConfig: {
        lang: "en",
        logo: "/beta-wiki/assets/favicon.ico",
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
            },
            {
                icon: "discord",
                link: "https://discord.gg/JHTz2HSKrf"
            }
        ],
        editLink: {
            pattern: "https://github.com/OfficialPixelBrush/beta-wiki/edit/main/:path"
        }
    },
    markdown: {
        math: true,
        image: {
            lazyLoading: true
        }
    }
}, {
    documentRootPath: "/",
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    sortMenusByFrontmatterOrder: true,
    rootGroupText: "Beta Wiki",
    useFolderLinkFromIndexFile: true,
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

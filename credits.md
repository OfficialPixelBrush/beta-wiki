---
layout: page
---
<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";

const members = [
    {
        avatar: "https://avatars.githubusercontent.com/u/23031327",
        name: "Pixel Brush",
        title: "Maintainer",
        links: [
            {
                icon: "github",
                link: "https://github.com/OfficialPixelBrush"
            }
        ]
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/86132148",
        name: "mudkip",
        title: "Creator of the Original Wiki",
        links: [
            {
                icon: "github",
                link: "https://github.com/mudkipdev"
            }
        ]
    },
    // add yourself here
];
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Credits
        </template>
        <template #lead>
            People who have helped Beta Wiki in some way. You can contribute too!
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members />
</VPTeamPage>
import { Newspaper, Calendar, Trophy, Leaf, Globe, Award } from "lucide-react";

const newsEventsData = [
    {
        id: 1,
        type: "Event",
        icon: Trophy,
        date: "2024",
        title: "Agro Ventures Opens Coconut Processing Factory in Makandura",
        summary: "Following the acquisition of the business, Agro Ventures officially opened its modern coconut processing facility in Makandura, marking a major milestone in expanding its value-added coconut product operations.",
        tag: "Expansion",

        images: Array.from({ length: 29 }, (_, i) => `https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Events/${i + 1}.webp`),

        content: `Agro Ventures celebrated the official opening of its coconut processing factory in Makandura after successfully acquiring the business and integrating it into the company's growing agricultural portfolio.

The new facility strengthens Agro Ventures' capacity to produce high-quality value-added coconut products for both local and international markets while supporting sustainable sourcing practices and operational efficiency.

The investment represents the company's commitment to expanding Sri Lanka's agricultural processing sector, creating employment opportunities in the region, and delivering premium coconut products that meet international quality standards.

The Makandura factory is expected to play a key role in Agro Ventures' long-term growth strategy, enhancing export capabilities and reinforcing the company's position as a leading player in the agribusiness industry.`
    }

];

export default newsEventsData;

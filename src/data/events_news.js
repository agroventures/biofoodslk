import { Newspaper, Calendar, Trophy, Leaf, Globe, Award } from "lucide-react";

const newsEventsData = [
    {
        id: 1,
        type: "Event",
        icon: Trophy,
        date: "2026 May",
        title: "Bio Foods Agro Ventures Opens Coconut Processing Factory in Makandura",
        summary: "Following the acquisition of the business, Agro Ventures officially opened its modern coconut processing facility in Makandura, marking a major milestone in expanding its value-added coconut product operations.",

        images: Array.from({ length: 29 }, (_, i) => `https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Events/1/${i + 1}.webp`),

        content: `Agro Ventures celebrated the official opening of its coconut processing factory in Makandura after successfully acquiring the business and integrating it into the company's growing agricultural portfolio.

The new facility strengthens Agro Ventures' capacity to produce high-quality value-added coconut products for both local and international markets while supporting sustainable sourcing practices and operational efficiency.

The investment represents the company's commitment to expanding Sri Lanka's agricultural processing sector, creating employment opportunities in the region, and delivering premium coconut products that meet international quality standards.

The Makandura factory is expected to play a key role in Agro Ventures' long-term growth strategy, enhancing export capabilities and reinforcing the company's position as a leading player in the agribusiness industry.`
    },
    {
        id: 2,
        type: "Event",
        icon: Trophy,
        date: "2026 July",
        title: "Bio Foods Agroventures 1st consignment of organic spices exported to international markets",
        summary: "Agro Ventures successfully exported its first consignment of premium organic spices to international markets, marking a significant milestone in the company's global expansion and commitment to sustainable agriculture.",

        images: Array.from({ length: 29 }, (_, i) => `https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Events/2/${i + 1}.webp`),

        content: `Agro Ventures proudly announced the successful export of its first consignment of premium organic spices to international markets, showcasing the company's dedication to sustainable agriculture and high-quality production.

The shipment included a variety of carefully cultivated organic spices, meeting stringent international quality standards and reflecting Agro Ventures' commitment to environmentally responsible farming practices.

This milestone represents a significant step in the company's global expansion strategy, opening new opportunities for Agro Ventures to establish its presence in key international markets and strengthen its reputation as a trusted supplier of organic agricultural products.

The successful export underscores Agro Ventures' focus on delivering exceptional value to customers worldwide while promoting sustainable farming methods that benefit both the environment and local communities.`
    }

];

export default newsEventsData;

// Product images are sourced from Unsplash (free, high-quality images)
// For local images, replace the URLs with local paths: /images/product-name.jpg
// and store the actual image files in: public/images/

export const collectionsData = {
    indoor: {
        title: "Architectural Indoor",
        subtitle:
            "Statement pieces for the modern interior. Hand-selected for structure, form, and resilience.",
        feature: "Feature Collection",
        heroImage:
            "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
        products: [
            {
                id: "indoor-1",
                name: "Monstera Albo Borsigiana",
                description: "High variegation, rooted",
                price: "$285",
                image:
                    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2664&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Rare",
                category: "indoor",
            },
            {
                id: "indoor-2",
                name: 'Ficus Lyrata "Bambino"',
                description: "Compact form, perfect for desktops",
                price: "$45",
                image:
                    "https://images.unsplash.com/photo-1596500589255-a083393962d3?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "indoor",
            },
            {
                id: "indoor-3",
                name: "Strelitzia Nicolai",
                description: "Giant White Bird of Paradise",
                price: "$120",
                image:
                    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2664&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "indoor",
            },
            {
                id: "indoor-4",
                name: "Philodendron Pink Princess",
                description: "Splashed pink variegation",
                price: "$65",
                image:
                    "https://images.unsplash.com/photo-1596500589255-a083393962d3?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Bestseller",
                category: "indoor",
            },
            {
                id: "indoor-5",
                name: "Alocasia Polly",
                description: "African Mask Plant",
                price: "$35",
                image:
                    "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2787&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "indoor",
            },
            {
                id: "indoor-6",
                name: "Calathea Orbifolia",
                description: "Large round striped leaves",
                price: "$55",
                image:
                    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2664&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "indoor",
            },
        ],
    },
    outdoor: {
        title: "Hardy Outdoor",
        subtitle:
            "Resilient species that thrive under the sky. Perfect for patios, balconies, and gardens.",
        feature: "Garden Collection",
        heroImage:
            "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
        products: [
            {
                id: "outdoor-1",
                name: "Japanese Maple 'Bloodgood'",
                description: "Striking red foliage year-round",
                price: "$145",
                image:
                    "https://images.unsplash.com/photo-1543132715-c2664b4c4832?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Seasonal",
                category: "outdoor",
            },
            {
                id: "outdoor-2",
                name: "Olive Tree 'Olea Europaea'",
                description: "Symbol of peace and longevity",
                price: "$110",
                image:
                    "https://images.unsplash.com/photo-1563245464-90aa3ff3439b?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "outdoor",
            },
            {
                id: "outdoor-3",
                name: "Lavender 'Munstead'",
                description: "Fragrant and pollinator-friendly",
                price: "$25",
                image:
                    "https://images.unsplash.com/photo-1502780736173-e380e227d825?q=80&w=2636&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "outdoor",
            },
            {
                id: "outdoor-4",
                name: "Boxwood Topiary",
                description: "Sculpted for formal elegance",
                price: "$85",
                image:
                    "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2787&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "outdoor",
            },
            {
                id: "outdoor-5",
                name: "Hydrangea 'Endless Summer'",
                description: "Blooms all season long",
                price: "$45",
                image:
                    "https://images.unsplash.com/photo-1560733857-4b953d395015?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "outdoor",
            },
            {
                id: "outdoor-6",
                name: "Agave Americana",
                description: "Dramatic architectural succulent",
                price: "$95",
                image:
                    "https://images.unsplash.com/photo-1533446979601-209cc28af9e7?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Drought Tolerant",
                category: "outdoor",
            },
        ],
    },
    desert: {
        title: "Desert Gems",
        subtitle:
            "Low-maintenance wonders from arid lands. Sculptural forms and unique textures.",
        feature: "Arid Collection",
        heroImage:
            "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2805&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
        products: [
            {
                id: "desert-1",
                name: "Golden Barrel Cactus",
                description: "Echinocactus grusonii",
                price: "$55",
                image:
                    "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=2649&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Slow Grower",
                category: "desert",
            },
            {
                id: "desert-2",
                name: "Blue Glow Agave",
                description: "Glowing red margins backlit by sun",
                price: "$45",
                image:
                    "https://images.unsplash.com/photo-1555547614-2224df06900f?q=80&w=2673&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "desert",
            },
            {
                id: "desert-3",
                name: "Bunny Ear Cactus",
                description: "Opuntia microdasys",
                price: "$25",
                image:
                    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "desert",
            },
            {
                id: "desert-4",
                name: "Aloe Vera",
                description: "Medicinal and easy to care for",
                price: "$20",
                image:
                    "https://images.unsplash.com/photo-1628771485078-d421255e4bf5?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "desert",
            },
            {
                id: "desert-5",
                name: "Snake Plant 'Laurentii'",
                description: "Indestructible air purifier",
                price: "$35",
                image:
                    "https://images.unsplash.com/photo-1616690248270-466d713c77d4?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Best for Low Light",
                category: "desert",
            },
            {
                id: "desert-6",
                name: "Echeveria 'Perle von Nurnberg'",
                description: "Rosette with purple/pink hues",
                price: "$15",
                image:
                    "https://images.unsplash.com/photo-1520302630591-a6e1572c6307?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "desert",
            },
        ],
    },
    textures: {
        title: "Botanic Textures",
        subtitle:
            "A showcase of nature's finest details. Velvety leaves, intricate patterns, and tactile forms.",
        feature: "Foliage Art",
        heroImage:
            "https://images.unsplash.com/photo-1596726649725-d918338901ad?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
        products: [
            {
                id: "textures-1",
                name: "Calathea Musaica",
                description: "Network-like mosaic pattern",
                price: "$45",
                image:
                    "https://images.unsplash.com/photo-1610452392769-90b8f44d186f?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Rare Pattern",
                category: "textures",
            },
            {
                id: "textures-2",
                name: "Alocasia 'Black Velvet'",
                description: "Deep black, velvety leaves",
                price: "$55",
                image:
                    "https://images.unsplash.com/photo-1616167195825-961456d68378?q=80&w=2666&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "textures",
            },
            {
                id: "textures-3",
                name: "Begonia Maculata",
                description: "Polka dot begonia",
                price: "$40",
                image:
                    "https://images.unsplash.com/photo-1612361490237-775c7fb231d8?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "textures",
            },
            {
                id: "textures-4",
                name: "Maidenhair Fern",
                description: "Delicate and airy fronds",
                price: "$25",
                image:
                    "https://images.unsplash.com/photo-1631481845173-097560416972?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "textures",
            },
            {
                id: "textures-5",
                name: "Peperomia 'Watermelon'",
                description: "Leaves resembling watermelon rinds",
                price: "$28",
                image:
                    "https://images.unsplash.com/photo-1647895240292-bdde1103c62a?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "textures",
            },
            {
                id: "textures-6",
                name: "Ficus Elastica 'Tineke'",
                description: "Camouflage variegation",
                price: "$48",
                image:
                    "https://images.unsplash.com/photo-1610214620021-3973c93ee005?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "textures",
            },
        ],
    },
    vines: {
        title: "Trailing Vines",
        subtitle:
            "Cascading greenery to elevate your space. Perfect for shelves, hanging planters, and vertical gardens.",
        feature: "Hanging Plants",
        heroImage:
            "https://images.unsplash.com/photo-1597055181300-e30ba1546d2d?q=80&w=2787&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
        products: [
            {
                id: "vines-1",
                name: "String of Pearls",
                description: "Senecio rowleyanus",
                price: "$35",
                image:
                    "https://images.unsplash.com/photo-1502970725539-787df0c33a90?q=80&w=2670&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Best Seller",
                category: "vines",
            },
            {
                id: "vines-2",
                name: "Pothos 'Marble Queen'",
                description: "Highly variegated hardy vine",
                price: "$25",
                image:
                    "https://images.unsplash.com/photo-1596500589255-a083393962d3?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                tag: "Beginner Friendly",
                category: "vines",
            },
            {
                id: "vines-3",
                name: "Philodendron Brasil",
                description: "Heart-shaped leaves with lime stripe",
                price: "$30",
                image:
                    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2664&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "vines",
            },
            {
                id: "vines-4",
                name: "Monstera Adansonii",
                description: "Swiss Cheese Vine",
                price: "$45",
                image:
                    "https://images.unsplash.com/photo-1615456957582-7232230a1081?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "vines",
            },
            {
                id: "vines-5",
                name: "String of Hearts",
                description: "Ceropegia woodii",
                price: "$40",
                image:
                    "https://images.unsplash.com/photo-1634568652615-5af15444e27f?q=80&w=2370&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "vines",
            },
            {
                id: "vines-6",
                name: "Hoya Carnosa 'Compacta'",
                description: "Hindu Rope Plant",
                price: "$55",
                image:
                    "https://images.unsplash.com/photo-1649984649495-947b1c312788?q=80&w=2574&auto=format&fit=crop&crop=entropy&cs=tinysrgb&dl=&fm=jpg",
                category: "vines",
            },
        ],
    },
};

export const allProducts = Object.values(collectionsData).flatMap(
    (collection) => collection.products
);
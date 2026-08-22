export type FurnitureProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: "living-room" | "bedroom" | "dining" | "lighting";
  material: string;
  rating: number;
  stock: number;
  searchTerm: string;
  img: string;
};

export const products: FurnitureProduct[] = [
  // =====================================================
  // LIVING ROOM
  // =====================================================

  {
    id: "H8ATMkhYnIo",
    title: "Modern Linen Sofa",
    price: 899,
    description:
      "A comfortable linen sofa with a clean modern silhouette and soft cushions.",
    category: "living-room",
    material: "Linen",
    rating: 4.7,
    stock: 8,
    searchTerm: "modern linen sofa living room",
    img: "https://images.unsplash.com/photo-1649511134921-67afc567280c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MXx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "CgjBaRKroEY",
    title: "Scandinavian Lounge Sofa",
    price: 749,
    description:
      "A Scandinavian-inspired sofa featuring deep seating and natural wooden legs.",
    category: "living-room",
    material: "Fabric",
    rating: 4.6,
    stock: 12,
    searchTerm: "scandinavian lounge sofa",
    img: "https://images.unsplash.com/photo-1623353283172-2518d7e6f5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Mnx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "PO6n1RM_pbY",
    title: "Classic Velvet Sofa",
    price: 1099,
    description:
      "A luxurious velvet sofa with plush cushions and an elegant timeless design.",
    category: "living-room",
    material: "Velvet",
    rating: 4.9,
    stock: 5,
    searchTerm: "classic velvet sofa",
    img: "https://images.unsplash.com/photo-1759722667550-81316a23d723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8M3x8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "_veirRXwPOQ",
    title: "Contemporary Sectional Sofa",
    price: 1299,
    description:
      "A spacious sectional sofa designed for comfortable family gatherings and relaxing evenings.",
    category: "living-room",
    material: "Polyester",
    rating: 4.8,
    stock: 4,
    searchTerm: "contemporary sectional sofa",
    img: "https://images.unsplash.com/photo-1515275844947-c28f9c617443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NHx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "wBIIJKfjG1g",
    title: "Minimal Accent Chair",
    price: 349,
    description:
      "A stylish accent chair with a compact design that adds comfort to modern interiors.",
    category: "living-room",
    material: "Cotton",
    rating: 4.5,
    stock: 15,
    searchTerm: "minimal accent chair",
    img: "https://images.unsplash.com/photo-1714872245785-674ae3038d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NXx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "i4WbkwwvRj4",
    title: "Boucle Lounge Chair",
    price: 429,
    description:
      "A soft boucle lounge chair designed to create a cozy reading or relaxation corner.",
    category: "living-room",
    material: "Boucle",
    rating: 4.8,
    stock: 7,
    searchTerm: "boucle lounge chair",
    img: "https://images.unsplash.com/photo-1666532937489-331f2f8f4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Nnx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "MfuqFoaDtlU",
    title: "Leather Recliner Chair",
    price: 699,
    description:
      "A comfortable leather recliner offering excellent support for relaxing after a long day.",
    category: "living-room",
    material: "Leather",
    rating: 4.7,
    stock: 6,
    searchTerm: "leather recliner chair",
    img: "https://images.unsplash.com/photo-1648425731270-ebd373a19149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8N3x8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "0Xf6dWg-6yI",
    title: "Curved Cloud Sofa",
    price: 1199,
    description:
      "A generously cushioned curved sofa with a soft contemporary appearance.",
    category: "living-room",
    material: "Polyester",
    rating: 4.9,
    stock: 3,
    searchTerm: "curved cloud sofa",
    img: "https://images.unsplash.com/photo-1571189416642-9d145805cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OHx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "bP3XVjC5T_A",
    title: "Mid-Century Sofa",
    price: 849,
    description:
      "A mid-century inspired sofa with tapered wooden legs and refined upholstery.",
    category: "living-room",
    material: "Fabric",
    rating: 4.6,
    stock: 9,
    searchTerm: "mid century sofa",
    img: "https://images.unsplash.com/photo-1653340513561-3ef95d9e4d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OXx8c29mYSUyMGNoYWlyJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3ODcyNjkwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "iTCqcJ1sPwk",
    title: "Compact Two-Seater Sofa",
    price: 649,
    description:
      "A compact two-seater sofa perfect for apartments and smaller living spaces.",
    category: "living-room",
    material: "Linen",
    rating: 4.5,
    stock: 11,
    searchTerm: "compact two seater sofa",
    img: "https://images.unsplash.com/photo-1635104159939-4b2545da6981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTB8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "wTnXfIqHW0c",
    title: "Modern Fabric Armchair",
    price: 389,
    description:
      "A comfortable fabric armchair with wide armrests and a contemporary frame.",
    category: "living-room",
    material: "Fabric",
    rating: 4.6,
    stock: 14,
    searchTerm: "modern fabric armchair",
    img: "https://images.unsplash.com/photo-1655992108235-b9bbf5bb18cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTF8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "bdRQqJWoAug",
    title: "Deep Seat Lounge Sofa",
    price: 999,
    description:
      "A deep-seat sofa designed for maximum comfort with generously padded cushions.",
    category: "living-room",
    material: "Velvet",
    rating: 4.8,
    stock: 5,
    searchTerm: "deep seat lounge sofa",
    img: "https://images.unsplash.com/photo-1759722667456-71e7bfd118b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTJ8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "I8uGzNNj1tw",
    title: "Woven Accent Chair",
    price: 319,
    description:
      "A decorative woven chair combining natural textures with a modern frame.",
    category: "living-room",
    material: "Rattan",
    rating: 4.4,
    stock: 10,
    searchTerm: "woven accent chair",
    img: "https://images.unsplash.com/photo-1688152512755-974e88c07550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTN8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "d74sP6dnt_I",
    title: "Three-Seater Fabric Sofa",
    price: 799,
    description:
      "A versatile three-seater sofa with durable fabric upholstery and comfortable seating.",
    category: "living-room",
    material: "Polyester",
    rating: 4.7,
    stock: 8,
    searchTerm: "three seater fabric sofa",
    img: "https://images.unsplash.com/photo-1563637329737-328724d1394d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTR8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "jhB_BLVGQB0",
    title: "Oak Frame Lounge Chair",
    price: 459,
    description:
      "A lounge chair featuring a solid oak frame and soft upholstered seating.",
    category: "living-room",
    material: "Oak",
    rating: 4.8,
    stock: 6,
    searchTerm: "oak frame lounge chair",
    img: "https://images.unsplash.com/photo-1747885297124-21fa67e2debb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTV8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "njotOXzZruc",
    title: "Luxury Modular Sofa",
    price: 1599,
    description:
      "A modular sofa that can be rearranged to suit different living room layouts.",
    category: "living-room",
    material: "Velvet",
    rating: 4.9,
    stock: 3,
    searchTerm: "luxury modular sofa",
    img: "https://images.unsplash.com/photo-1688152512762-d7bbf58c3b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTZ8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "bo7rC9mBUHk",
    title: "Boucle Accent Armchair",
    price: 399,
    description:
      "A contemporary boucle armchair with a rounded shape and plush seating.",
    category: "living-room",
    material: "Boucle",
    rating: 4.7,
    stock: 9,
    searchTerm: "boucle accent armchair",
    img: "https://images.unsplash.com/photo-1638191376884-f371a22c719f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTd8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "NHB35M8X4MY",
    title: "Modern Corner Sofa",
    price: 1399,
    description:
      "A spacious corner sofa designed to maximize seating while maintaining a modern aesthetic.",
    category: "living-room",
    material: "Fabric",
    rating: 4.8,
    stock: 4,
    searchTerm: "modern corner sofa",
    img: "https://images.unsplash.com/photo-1782511639845-09d736ad6543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTh8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "oUF0heqVFwc",
    title: "Classic Leather Sofa",
    price: 1249,
    description:
      "A sophisticated leather sofa combining durable materials with timeless styling.",
    category: "living-room",
    material: "Leather",
    rating: 4.9,
    stock: 5,
    searchTerm: "classic leather sofa",
    img: "https://images.unsplash.com/photo-1544474560-d34322bf2021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTl8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "mpAwTGM9tDc",
    title: "Soft Cloud Armchair",
    price: 479,
    description:
      "A generously padded armchair designed to provide a soft and relaxing seating experience.",
    category: "living-room",
    material: "Boucle",
    rating: 4.8,
    stock: 7,
    searchTerm: "soft cloud armchair",
    img: "https://images.unsplash.com/photo-1768262437064-d86ee512c968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MjB8fHNvZmElMjBjaGFpciUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzg3MjY5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  // =====================================================
  // BEDROOM
  // =====================================================

  {
    id: "3AvEi1EoIyM",
    title: "Oak Platform Bed",
    price: 899,
    description:
      "A sturdy oak platform bed with a minimalist frame and natural wood finish.",
    category: "bedroom",
    material: "Oak",
    rating: 4.7,
    stock: 8,
    searchTerm: "oak platform bed",
    img: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MXx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "8wDnylxemkk",
    title: "Upholstered King Bed",
    price: 1199,
    description:
      "A comfortable king-size bed featuring a soft upholstered headboard.",
    category: "bedroom",
    material: "Fabric",
    rating: 4.8,
    stock: 6,
    searchTerm: "upholstered king bed",
    img: "https://images.unsplash.com/photo-1632829401795-2745c905ac77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Mnx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "u88zDvr5V6g",
    title: "Walnut Storage Bed",
    price: 1349,
    description:
      "A stylish walnut bed with integrated storage compartments for extra organization.",
    category: "bedroom",
    material: "Walnut",
    rating: 4.9,
    stock: 4,
    searchTerm: "walnut storage bed",
    img: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8M3x8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "QJLms7X8oJU",
    title: "Modern Wooden Bed",
    price: 799,
    description:
      "A simple wooden bed frame combining natural materials with minimalist styling.",
    category: "bedroom",
    material: "Wood",
    rating: 4.6,
    stock: 10,
    searchTerm: "modern wooden bed",
    img: "https://images.unsplash.com/photo-1698517486200-e89403ea2738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NHx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "h0j-H2jyFj4",
    title: "Canopy Bedroom Bed",
    price: 1499,
    description:
      "An elegant canopy bed with a refined frame that creates a luxurious bedroom atmosphere.",
    category: "bedroom",
    material: "Wood",
    rating: 4.9,
    stock: 3,
    searchTerm: "luxury canopy bedroom bed",
    img: "https://images.unsplash.com/photo-1517862774645-dd398fbfaffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NXx8YmVkJTIwYmVkcm9vb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "ghPHKipv790",
    title: "Minimal Platform Bed",
    price: 699,
    description:
      "A low-profile platform bed designed for modern minimalist bedrooms.",
    category: "bedroom",
    material: "Oak",
    rating: 4.5,
    stock: 12,
    searchTerm: "minimal platform bed",
    img: "https://images.unsplash.com/photo-1560185128-e173042f79dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Nnx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "u-RIsXlI8Q8",
    title: "Natural Oak Double Bed",
    price: 849,
    description:
      "A natural oak double bed with a warm finish and clean contemporary lines.",
    category: "bedroom",
    material: "Oak",
    rating: 4.7,
    stock: 9,
    searchTerm: "natural oak double bed",
    img: "https://images.unsplash.com/photo-1757344454333-cc666252e596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8N3x8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "f9O-1eKGlQM",
    title: "Velvet Upholstered Bed",
    price: 1099,
    description:
      "A luxurious upholstered bed with a soft velvet headboard and elegant detailing.",
    category: "bedroom",
    material: "Velvet",
    rating: 4.9,
    stock: 5,
    searchTerm: "velvet upholstered bed",
    img: "https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OHx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "ZqqwJA71Ke4",
    title: "Floating Platform Bed",
    price: 999,
    description:
      "A modern floating-style platform bed that creates a light and spacious bedroom aesthetic.",
    category: "bedroom",
    material: "Wood",
    rating: 4.8,
    stock: 6,
    searchTerm: "floating platform bed",
    img: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OXx8YmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3ODcyNzIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "KXy7hKJ3EMc",
    title: "King Storage Bed",
    price: 1299,
    description:
      "A practical king-size bed with generous under-bed storage for bedroom essentials.",
    category: "bedroom",
    material: "Wood",
    rating: 4.7,
    stock: 7,
    searchTerm: "king storage bed",
    img: "https://images.unsplash.com/photo-1765862835193-3c37388a409e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTB8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "H2NpsZJe2IA",
    title: "Scandinavian Bed Frame",
    price: 749,
    description:
      "A Scandinavian-inspired bed featuring natural wood and a simple elegant frame.",
    category: "bedroom",
    material: "Pine",
    rating: 4.6,
    stock: 11,
    searchTerm: "scandinavian bed frame",
    img: "https://images.unsplash.com/photo-1678978866819-306ed8608e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTF8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "-qOa0YYfdGo",
    title: "Tufted Headboard Bed",
    price: 1149,
    description:
      "A sophisticated bed with a padded tufted headboard and durable wooden frame.",
    category: "bedroom",
    material: "Velvet",
    rating: 4.8,
    stock: 5,
    searchTerm: "tufted headboard bed",
    img: "https://images.unsplash.com/photo-1623944431758-e856760d7b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTJ8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "Yo28aVLWkdU",
    title: "Solid Pine Bed",
    price: 649,
    description:
      "A durable solid pine bed with a natural finish suitable for contemporary bedrooms.",
    category: "bedroom",
    material: "Pine",
    rating: 4.5,
    stock: 14,
    searchTerm: "solid pine bed",
    img: "https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTN8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "_5AGnG4Mh5E",
    title: "Contemporary Queen Bed",
    price: 899,
    description:
      "A contemporary queen-size bed with clean lines and a sturdy construction.",
    category: "bedroom",
    material: "Oak",
    rating: 4.7,
    stock: 8,
    searchTerm: "contemporary queen bed",
    img: "https://images.unsplash.com/photo-1635321349359-333da6bb6da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTR8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "KFHsoQGT6uk",
    title: "Rattan Headboard Bed",
    price: 949,
    description:
      "A stylish bed featuring a natural rattan headboard and warm wooden frame.",
    category: "bedroom",
    material: "Rattan",
    rating: 4.8,
    stock: 6,
    searchTerm: "rattan headboard bed",
    img: "https://images.unsplash.com/photo-1718894071402-fb944e2a1849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTV8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "AT1AqItpuOI",
    title: "Luxury King Bed",
    price: 1599,
    description:
      "A premium king-size bed designed with a substantial frame and luxurious upholstered headboard.",
    category: "bedroom",
    material: "Velvet",
    rating: 4.9,
    stock: 3,
    searchTerm: "luxury king size bed",
    img: "https://images.unsplash.com/photo-1766733041960-0de62f403e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTZ8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "l6m1qfobbdI",
    title: "Compact Single Bed",
    price: 499,
    description:
      "A practical single bed designed for smaller bedrooms and guest rooms.",
    category: "bedroom",
    material: "Pine",
    rating: 4.4,
    stock: 15,
    searchTerm: "compact single bed",
    img: "https://images.unsplash.com/photo-1722409196415-d9ad14ee9ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTd8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "Ps3VqTGfWhU",
    title: "Modern Four Poster Bed",
    price: 1399,
    description:
      "A contemporary four-poster bed combining a strong architectural frame with elegant styling.",
    category: "bedroom",
    material: "Oak",
    rating: 4.8,
    stock: 4,
    searchTerm: "modern four poster bed",
    img: "https://images.unsplash.com/photo-1663811397561-32239541a455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTh8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "tN2PUhQQWgc",
    title: "Oak Slatted Bed",
    price: 799,
    description:
      "A natural oak bed featuring a slatted headboard and minimalist construction.",
    category: "bedroom",
    material: "Oak",
    rating: 4.7,
    stock: 9,
    searchTerm: "oak slatted bed",
    img: "https://images.unsplash.com/photo-1740842311434-522bb411af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTl8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "gooFl1sx3ow",
    title: "Soft Fabric Bed",
    price: 999,
    description:
      "A modern fabric-covered bed with a comfortable padded headboard and clean silhouette.",
    category: "bedroom",
    material: "Fabric",
    rating: 4.7,
    stock: 7,
    searchTerm: "soft fabric bed",
    img: "https://images.unsplash.com/photo-1775241186452-c3d99b09f223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MjB8fGJlZCUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzg3MjcyMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  // =====================================================
  // DINING
  // =====================================================

  {
    id: "NFbwes_e-jI'",
    title: "Solid Oak Dining Table",
    price: 999,
    description:
      "A durable solid oak dining table with a natural finish for everyday family dining.",
    category: "dining",
    material: "Oak",
    rating: 4.8,
    stock: 7,
    searchTerm: "solid oak dining table",
    img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "zGKRmwzplVc",
    title: "Modern Round Dining Table",
    price: 699,
    description:
      "A contemporary round dining table with a smooth tabletop and sculptural base.",
    category: "dining",
    material: "Wood",
    rating: 4.6,
    stock: 10,
    searchTerm: "modern round dining table",
    img: "https://images.unsplash.com/photo-1657524398377-567034729507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "hi3SkqB9rMI",
    title: "Extendable Dining Table",
    price: 1199,
    description:
      "A versatile dining table that extends to provide additional seating for guests.",
    category: "dining",
    material: "Oak",
    rating: 4.8,
    stock: 5,
    searchTerm: "extendable dining table",
    img: "https://images.unsplash.com/photo-1600623050499-84929aad17c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8M3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "x3BCSWCAtrY",
    title: "Walnut Dining Table",
    price: 1299,
    description:
      "A premium walnut dining table featuring rich wood tones and timeless styling.",
    category: "dining",
    material: "Walnut",
    rating: 4.9,
    stock: 4,
    searchTerm: "walnut dining table",
    img: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "kjh70RMHDco",
    title: "Minimalist Dining Table",
    price: 649,
    description:
      "A clean minimalist dining table designed for modern and Scandinavian interiors.",
    category: "dining",
    material: "Oak",
    rating: 4.5,
    stock: 12,
    searchTerm: "minimalist dining table",
    img: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "GQQyH0yNqLk",
    title: "Industrial Dining Table",
    price: 799,
    description:
      "A sturdy industrial dining table combining a solid wood top with a metal base.",
    category: "dining",
    material: "Wood & Metal",
    rating: 4.6,
    stock: 8,
    searchTerm: "industrial dining table",
    img: "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Nnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "xstTzTRiJ4k",
    title: "Marble Dining Table",
    price: 1499,
    description:
      "A sophisticated dining table featuring a smooth marble tabletop and modern base.",
    category: "dining",
    material: "Marble",
    rating: 4.9,
    stock: 3,
    searchTerm: "marble dining table",
    img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8N3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "AAy5l4-oFuw",
    title: "Scandinavian Dining Table",
    price: 849,
    description:
      "A Scandinavian dining table with natural wood tones and elegantly tapered legs.",
    category: "dining",
    material: "Oak",
    rating: 4.7,
    stock: 9,
    searchTerm: "scandinavian dining table",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "0dszrg9-V1o",
    title: "Round Oak Dining Table",
    price: 749,
    description:
      "A compact round oak dining table perfect for smaller dining areas.",
    category: "dining",
    material: "Oak",
    rating: 4.6,
    stock: 11,
    searchTerm: "round oak dining table",
    img: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8fHwxNzg3MTk3NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "fZ1vlupgdSY",
    title: "Farmhouse Dining Table",
    price: 1099,
    description:
      "A traditional farmhouse-inspired table built with solid wood and a warm finish.",
    category: "dining",
    material: "Pine",
    rating: 4.8,
    stock: 6,
    searchTerm: "farmhouse dining table",
    img: "https://images.unsplash.com/photo-1614597445336-8a67e9314d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTB8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "Uaf1g970Hrk",
    title: "Glass Top Dining Table",
    price: 899,
    description:
      "A contemporary dining table featuring a transparent glass top and modern frame.",
    category: "dining",
    material: "Glass",
    rating: 4.5,
    stock: 7,
    searchTerm: "glass top dining table",
    img: "https://images.unsplash.com/photo-1636138388621-258a72ecb07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTF8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "9dRBM8Qw2TE",
    title: "Dark Walnut Dining Table",
    price: 1149,
    description:
      "A dark walnut dining table offering rich color and a sophisticated modern appearance.",
    category: "dining",
    material: "Walnut",
    rating: 4.8,
    stock: 5,
    searchTerm: "dark walnut dining table",
    img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTJ8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "16SJwUFgWCw",
    title: "Compact Dining Table",
    price: 549,
    description:
      "A practical compact dining table designed for apartments and smaller homes.",
    category: "dining",
    material: "Wood",
    rating: 4.4,
    stock: 13,
    searchTerm: "compact dining table",
    img: "https://images.unsplash.com/photo-1606660023296-81d67734170a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTN8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "COzqEKjaxqo",
    title: "Modern Pedestal Table",
    price: 949,
    description:
      "A modern pedestal dining table with a spacious tabletop and sculptural central base.",
    category: "dining",
    material: "Wood",
    rating: 4.7,
    stock: 8,
    searchTerm: "modern pedestal dining table",
    img: "https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTR8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "0hAdietsUrE",
    title: "Reclaimed Wood Dining Table",
    price: 1049,
    description:
      "A characterful dining table crafted from reclaimed wood with a natural rustic finish.",
    category: "dining",
    material: "Reclaimed Wood",
    rating: 4.7,
    stock: 5,
    searchTerm: "reclaimed wood dining table",
    img: "https://images.unsplash.com/photo-1562050344-f7ad946cee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTV8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "cXmER3VNxUA",
    title: "Luxury Extendable Table",
    price: 1399,
    description:
      "A premium extendable dining table designed for both everyday meals and larger gatherings.",
    category: "dining",
    material: "Oak",
    rating: 4.9,
    stock: 4,
    searchTerm: "luxury extendable dining table",
    img: "https://images.unsplash.com/photo-1615920606214-6428b3324c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTZ8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "PCE0T5i4pDI",
    title: "Natural Pine Dining Table",
    price: 599,
    description:
      "A simple pine dining table with a warm natural finish and sturdy construction.",
    category: "dining",
    material: "Pine",
    rating: 4.5,
    stock: 12,
    searchTerm: "natural pine dining table",
    img: "https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTd8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "yLfsEMVbOWA",
    title: "Contemporary Black Table",
    price: 749,
    description:
      "A contemporary black dining table featuring a clean geometric frame.",
    category: "dining",
    material: "Wood",
    rating: 4.6,
    stock: 9,
    searchTerm: "contemporary black dining table",
    img: "https://images.unsplash.com/photo-1630527152680-500b5453fb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTh8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "fkugMBhVf1c",
    title: "Oval Dining Table",
    price: 899,
    description:
      "An elegant oval dining table offering comfortable seating and a softer silhouette.",
    category: "dining",
    material: "Oak",
    rating: 4.7,
    stock: 7,
    searchTerm: "oval dining table",
    img: "https://images.unsplash.com/photo-1605239435870-67df4c54a0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTl8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "acDi0vsnuCc",
    title: "Luxury Oak Dining Table",
    price: 1249,
    description:
      "A premium oak dining table combining substantial construction with refined modern design.",
    category: "dining",
    material: "Oak",
    rating: 4.9,
    stock: 4,
    searchTerm: "luxury oak dining table",
    img: "https://images.unsplash.com/photo-1627992491080-793188b1cf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MjB8fGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc4NzE5NzQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },

  // =====================================================
  // LIGHTING
  // =====================================================

  {
    id: "aPdUKy65qWE",
    title: "Modern Table Lamp",
    price: 129,
    description:
      "A compact modern table lamp providing warm ambient lighting for living spaces.",
    category: "lighting",
    material: "Metal",
    rating: 4.6,
    stock: 18,
    searchTerm: "modern table lamp",
    img: "https://images.unsplash.com/photo-1555488205-d5e67846cf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MXx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "KP7p0-DRGbg",
    title: "Minimal Floor Lamp",
    price: 249,
    description:
      "A tall minimalist floor lamp designed to provide soft ambient lighting.",
    category: "lighting",
    material: "Metal",
    rating: 4.7,
    stock: 11,
    searchTerm: "minimal floor lamp",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Mnx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "Ry9WBo3qmoc",
    title: "Ceramic Bedside Lamp",
    price: 99,
    description:
      "A decorative ceramic bedside lamp with a warm glow and neutral finish.",
    category: "lighting",
    material: "Ceramic",
    rating: 4.5,
    stock: 20,
    searchTerm: "ceramic bedside lamp",
    img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8M3x8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "_bzFLkJyY6o",
    title: "Industrial Pendant Lamp",
    price: 189,
    description:
      "An industrial-style pendant lamp featuring a simple metal shade.",
    category: "lighting",
    material: "Metal",
    rating: 4.6,
    stock: 14,
    searchTerm: "industrial pendant lamp",
    img: "https://images.unsplash.com/photo-1621177555630-b861919c864f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NHx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "wsvCC6UyKjs",
    title: "Contemporary Arc Lamp",
    price: 329,
    description:
      "A contemporary arc floor lamp perfect for reading corners and sofas.",
    category: "lighting",
    material: "Metal",
    rating: 4.8,
    stock: 8,
    searchTerm: "contemporary arc floor lamp",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8NXx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "toX2sYnycCw",
    title: "Brass Table Lamp",
    price: 159,
    description:
      "An elegant brass table lamp designed to add warmth and sophistication to interiors.",
    category: "lighting",
    material: "Brass",
    rating: 4.7,
    stock: 13,
    searchTerm: "brass table lamp",
    img: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8N3x8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "pdIwPL3HU2s",
    title: "Glass Globe Lamp",
    price: 179,
    description:
      "A modern glass globe lamp providing soft diffused lighting for contemporary spaces.",
    category: "lighting",
    material: "Glass",
    rating: 4.6,
    stock: 16,
    searchTerm: "glass globe lamp",
    img: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8Nnx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "9UR3Zafm328",
    title: "Wooden Floor Lamp",
    price: 289,
    description:
      "A warm wooden floor lamp combining natural materials with minimalist styling.",
    category: "lighting",
    material: "Wood",
    rating: 4.7,
    stock: 9,
    searchTerm: "wooden floor lamp",
    img: "https://images.unsplash.com/photo-1636368208791-17b81ed832d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OHx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "pxoZSTdAzeU",
    title: "Black Dome Lamp",
    price: 139,
    description:
      "A sleek black dome lamp designed for desks, side tables, and bedside spaces.",
    category: "lighting",
    material: "Metal",
    rating: 4.5,
    stock: 17,
    searchTerm: "black dome lamp",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8OXx8bGFtcHxlbnwwfHx8fDE3ODcyNzI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "_kdTyfnUFAc",
    title: "Rattan Pendant Light",
    price: 219,
    description:
      "A natural rattan pendant light that adds texture and warmth to dining areas.",
    category: "lighting",
    material: "Rattan",
    rating: 4.8,
    stock: 10,
    searchTerm: "rattan pendant light",
    img: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTB8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "-yLHx_Qm-lo'",
    title: "Marble Base Lamp",
    price: 199,
    description:
      "A sophisticated table lamp featuring a solid marble base and elegant shade.",
    category: "lighting",
    material: "Marble",
    rating: 4.8,
    stock: 8,
    searchTerm: "marble base table lamp",
    img: "https://images.unsplash.com/photo-1592622515232-6e3e2a0d3d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTF8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "AgU9-qsNc1Y",
    title: "Modern Tripod Floor Lamp",
    price: 269,
    description:
      "A stylish tripod floor lamp combining a fabric shade with a modern wooden frame.",
    category: "lighting",
    material: "Wood & Fabric",
    rating: 4.7,
    stock: 9,
    searchTerm: "modern tripod floor lamp",
    img: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "xe_f__fOBNs",
    title: "Pendant Cluster Lamp",
    price: 349,
    description:
      "A decorative cluster pendant lamp designed to create a striking focal point.",
    category: "lighting",
    material: "Glass",
    rating: 4.8,
    stock: 6,
    searchTerm: "pendant cluster lamp",
    img: "https://images.unsplash.com/photo-1592622515232-6e3e2a0d3d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTF8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "7rvkxLAraU8",
    title: "Minimal Desk Lamp",
    price: 89,
    description:
      "A compact adjustable desk lamp designed for focused workspace lighting.",
    category: "lighting",
    material: "Metal",
    rating: 4.4,
    stock: 22,
    searchTerm: "minimal desk lamp",
    img: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "BCNO7JuNi1w",
    title: "Soft Fabric Floor Lamp",
    price: 229,
    description:
      "A fabric-shaded floor lamp that creates a soft and relaxing ambient glow.",
    category: "lighting",
    material: "Fabric",
    rating: 4.6,
    stock: 12,
    searchTerm: "soft fabric floor lamp",
    img: "https://images.unsplash.com/photo-1600421684846-e7ebc943403b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTN8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "NGb91VwnOWY",
    title: "Ceramic Sculptural Lamp",
    price: 249,
    description:
      "A decorative sculptural ceramic lamp designed to work as both lighting and interior decor.",
    category: "lighting",
    material: "Ceramic",
    rating: 4.8,
    stock: 7,
    searchTerm: "ceramic sculptural lamp",
    img: "https://images.unsplash.com/photo-1620812067822-899be8a6a9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTR8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "VDPauwJ_sHo",
    title: "Modern Wall Lamp",
    price: 119,
    description:
      "A contemporary wall-mounted lamp providing subtle accent lighting for interiors.",
    category: "lighting",
    material: "Metal",
    rating: 4.5,
    stock: 15,
    searchTerm: "modern wall lamp",
    img: "https://images.unsplash.com/photo-1552529232-9e6cb081de19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTV8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "3LTht2nxd34",
    title: "Nordic Pendant Lamp",
    price: 199,
    description:
      "A Nordic-inspired pendant lamp featuring a clean shape and understated design.",
    category: "lighting",
    material: "Metal",
    rating: 4.7,
    stock: 11,
    searchTerm: "nordic pendant lamp",
    img: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTZ8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "NFbwes_e-jI",
    title: "Vintage Table Lamp",
    price: 149,
    description:
      "A vintage-inspired table lamp combining classic styling with warm ambient illumination.",
    category: "lighting",
    material: "Ceramic",
    rating: 4.6,
    stock: 13,
    searchTerm: "vintage table lamp",
    img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MTl8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },

  {
    id: "ulh3-dLSXjI",
    title: "Luxury Brass Floor Lamp",
    price: 399,
    description:
      "A premium brass floor lamp with an elegant structure designed for sophisticated interiors.",
    category: "lighting",
    material: "Brass",
    rating: 4.9,
    stock: 5,
    searchTerm: "luxury brass floor lamp",
    img: "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM0Njc4fDB8MXxzZWFyY2h8MjB8fGxhbXB8ZW58MHx8fHwxNzg3MjcyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

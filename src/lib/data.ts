interface Product {
  id: string
  name: string
  price: number
  brand: string
  image: string
  description: string
}

interface Subcategory {
  name: string
  products: Product[]
}

interface Category {
  name: string
  subcategories: Record<string, Subcategory>
}

export const categories: Record<string, Category> = {
  tennis: {
    name: "Tennis",
    subcategories: {
      "tennis-rackets": {
        name: "Tennis Rackets",
        products: [
          {
            id: "wilson-pro-staff",
            name: "Wilson Pro Staff RF97 v14",
            price: 75000,
            brand: "Wilson",
            image:
              "/1.jpg",
            description: "Roger Federer's signature racket with precision and control",
          },
          {
            id: "babolat-pure-drive",
            name: "Babolat Pure Drive 2023",
            price: 45000,
            brand: "Babolat",
            image:
              "/1.jpg",
            description: "Perfect blend of power and control",
          },
        ],
      },
    },
  },
  basketball: {
    name: "Basketball",
    subcategories: {
      basketballs: {
        name: "Basketballs",
        products: [
          {
            id: "wilson-nba",
            name: "Wilson NBA Official Game Ball",
            price: 12000,
            brand: "Wilson",
            image:
              "/1.jpg",
            description: "Official NBA game basketball",
          },
          {
            id: "spalding-street",
            name: "Spalding Street Basketball",
            price: 4500,
            brand: "Spalding",
            image:
              "/1.jpg",
            description: "Durable street basketball",
          },
        ],
      },
      "basketball-shoes": {
        name: "Basketball Shoes",
        products: [
          {
            id: "nike-lebron",
            name: "Nike LeBron XIX",
            price: 18000,
            brand: "Nike",
            image:
              "/1.jpg",
            description: "LeBron James signature basketball shoes",
          },
        ],
      },
    },
  },
  football: {
    name: "Football",
    subcategories: {
      footballs: {
        name: "Footballs",
        products: [
          {
            id: "nike-premier",
            name: "Nike Premier League Strike",
            price: 8000,
            brand: "Nike",
            image:
              "/1.jpg",
            description: "Official Premier League replica ball",
          },
          {
            id: "adidas-ucl",
            name: "adidas UEFA Champions League Pro",
            price: 12000,
            brand: "adidas",
            image:
              "/1.jpg",
            description: "Official Champions League match ball",
          },
        ],
      },
      "football-boots": {
        name: "Football Boots",
        products: [
          {
            id: "nike-mercurial",
            name: "Nike Mercurial Vapor 14",
            price: 22000,
            brand: "Nike",
            image:
              "/1.jpg",
            description: "Speed boots for forwards",
          },
        ],
      },
    },
  },
  cricket: {
    name: "Cricket",
    subcategories: {
      "cricket-bats": {
        name: "Cricket Bats",
        products: [
          {
            id: "gray-nicolls-pro",
            name: "Gray-Nicolls Pro Performance",
            price: 35000,
            brand: "Gray-Nicolls",
            image:
              "/1.jpg",
            description: "English willow cricket bat",
          },
          {
            id: "kookaburra-ghost",
            name: "Kookaburra Ghost Pro",
            price: 32000,
            brand: "Kookaburra",
            image:
              "/1.jpg",
            description: "Premium grade 1 English willow",
          },
        ],
      },
      "cricket-balls": {
        name: "Cricket Balls",
        products: [
          {
            id: "kookaburra-red",
            name: "Kookaburra Red King",
            price: 2500,
            brand: "Kookaburra",
            image:
              "/1.jpg",
            description: "Premium red leather cricket ball",
          },
        ],
      },
    },
  },
  footwear: {
    name: "Footwear",
    subcategories: {
      "sports-shoes": {
        name: "Sports Shoes",
        products: [
          { id: "1", name: "Running Shoes", price: 3000, brand: "Nike", image: "/shoes.jpg", description: "Comfortable running shoes." },
        ],
      },
    },
  },
}








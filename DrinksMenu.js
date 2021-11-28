export const DrinksMenu = [
  {
    category: "Pressed Juices",
    drinks: [
      {
        id: "1",
        name: "Sunrise",
        basePrice: 6.5,
        ingrediants: [
          "carrot",
          "apple",
          "ginger",
          "lemon",
          "turmeric",
          "black pepper",
        ],
      },
      {
        id: "2",
        name: "Detox",
        basePrice: 6.5,
        ingrediants: [
          "fennel",
          "romain",
          "cucumber",
          "lime",
          "basil",
          "apple",
          "spinach",
        ],
      },
      {
        id: "3",
        name: "Kickstart",
        basePrice: 6.5,
        ingrediants: [
          "beet",
          "apple",
          "cucumber",
          "lemon",
          "orange",
          "cayenne",
        ],
      },
      {
        id: "4",
        name: "Refresh",
        basePrice: 6.5,
        ingrediants: [
          "pineapple",
          "mint",
          "chard",
          "cucumber",
          "celery",
          "apple",
        ],
      },
      {
        id: "5",
        name: "Celery",
        basePrice: 5,
        ingrediants: ["celery"],
      },
    ],
  },
  {
    category: "Smoothie",
    drinks: [
      {
        id: "1",
        name: "Strawberry Ginger",
        basePrice: 7,
        ingrediants: [
          "strawberry",
          "mango",
          "ginger",
          "apple juice",
          "cranberry juice",
        ],
      },
      {
        id: "2",
        name: "Acai Pomegranate",
        basePrice: 7,
        ingrediants: [
          "acai",
          "strawberry",
          "banana",
          "pomegranate juice",
          "agave",
        ],
      },
      {
        id: "3",
        name: "Greens And Apples",
        basePrice: 7,
        ingrediants: [
          "apple",
          "spinach",
          "mango",
          "cinnamon",
          "coconut milk",
          "agave",
        ],
      },
      {
        id: "4",
        name: "Aloha Pineapple",
        basePrice: 7,
        ingrediants: ["orange", "apple", "pineapple", "coconut flakes"],
      },
      {
        id: "5",
        name: "Banana Oat",
        basePrice: 7,
        ingrediants: [
          "oat milk",
          "banana",
          "cinnamon",
          "turmeric",
          "ginger",
          "dates",
        ],
      },
    ],
  },
  {
    category: "Elixirs and Tonics",
    drinks: [
      {
        id: "1",
        name: "Lemon Ginger Tonic",
        basePrice: 5,
        ingrediants: [
          "lemon",
          "ginger",
          "honey",
          "turmeric",
          "black pepper",
          "served hot",
        ],
      },
      {
        id: "2",
        name: "Golden Latte",
        basePrice: 5,
        ingrediants: ["house blend turmeric tea"],
      },
      {
        id: "3",
        name: "Spiced Carob",
        basePrice: 4.5,
        ingrediants: ["carob", "spices", "agave"],
      },
      {
        id: "4",
        name: "Yerba Mate Latte",
        basePrice: 4.5,
        ingrediants: ["yerba mate tea"],
      },
      {
        id: "5",
        name: "Chlorophyll Water",
        basePrice: 3,
        ingrediants: ["lemon", "ginger", "chlorophyll", "h20"],
      },
      {
        id: "6",
        name: "Carrot Ginger Elixir",
        basePrice: 5,
        ingrediants: ["carrot", "ginger shrub", "mint", "berries", "seltzer"],
      },
      {
        id: "7",
        name: "Spirulina Matcha",
        basePrice: 7,
        ingrediants: ["spirulina", "matcha", "oat milk", "pineapple"],
      },
      {
        id: "8",
        name: "Yuzu Tea Tonic",
        basePrice: 5,
        ingrediants: ["yuzu", "white tea", "mint"],
      },
    ],
  },
  {
    category: "Healing Teas",
    drinks: [
      {
        id: "1",
        name: "Fortify",
        ingrediants: ["hibiscus", "chamomile", "marshmallow", "spearmint"],
        basePrice: 4,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
        ],
      },

      {
        id: "2",
        name: "Rejuvenate",
        basePrice: 4,
        ingrediants: [
          "lemongrass",
          "rose petals",
          "peppermint",
          "candula petals",
        ],
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
        ],
      },
      {
        id: "3",
        name: "Serenitea",
        basePrice: 4,
        ingrediants: [
          "lemon verbena",
          "peppermint",
          "lemongrass",
          "lavender",
          "schisandra",
          "cedar berries",
          "orange peel",
          "st johns wort",
        ],
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
        ],
      },
      {
        id: "4",
        name: "Revive",
        basePrice: 4,
        ingrediants: [
          "tulsi",
          "turmeric",
          "cardamom",
          "ginger",
          "licorice",
          "cayenne",
          "black pepper",
        ],
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
        ],
      },
    ],
  },
  {
    category: "Hot Chocolate",
    drinks: [
      {
        id: "1",
        name: "Belgian Hot Chocolate",
        basePrice: 5,
        options: [
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "blend",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
          },
        ],
      },
    ],
  },
  {
    category: "Coffee Bar",
    drinks: [
      {
        id: "1",
        name: "Drip Coffee",
        basePrice: 2.25,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "2",
        name: "Espresso",
        basePrice: 2.5,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "3",
        name: "Americano",
        basePrice: 2.75,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "4",
        name: "Cappucchino",
        basePrice: 3.75,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "5",
        name: "Latte",
        basePrice: 4,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "6",
        name: "Lavender Latte",
        basePrice: 4.5,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "7",
        name: "Cardamom Latte",
        basePrice: 4.5,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "8",
        name: "Mocha Latte",
        basePrice: 4.5,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },
      {
        id: "9",
        name: "Dirty Chai",
        basePrice: 5.25,
        options: [
          {
            type: "sizes",
            values: ["small", "large"],
            addedPrice: [0, 1],
            formTyoe: "single",
          },
          {
            type: "milk",
            values: ["whole", "soy", "oat"],
            addedPrice: [0, 0, 0],
            formType: "single",
          },
          {
            type: "flavors",
            values: ["Caramel", "Vanilla", "Hazelnut", "Seasonal"],
            addedPrice: [0, 1],
            formType: "multi",
          },
          {
            type: "hot or iced",
            values: ["hot", "iced"],
            addedPrice: [0, 0],
            formType: "single",
          },
        ],
      },

    ],
  },
  {
    category: "Other Teas",
    drinks: [
  {  
    id: "39",
    name: "Matcha Latte",
    basePrice: 4.5,
    ingrediants: ["organic matcha "],
    size: ["small ", "large "],
    milk: ["whole", "soy", "oat"],
  },
  {
    id: "40",
    name: "Chai Latte",
    basePrice: 4.5,
    ingrediants: ["housemade chai base "],
    size: ["small ", "large "],
    milk: ["whole", "soy", "oat"],
  },
  {
    category: "White Heron Loose Leaf",
    id: "41",
    basePrice: 2.25,
    size: ["small ", "large "],
  },
  {
    id: "42",
    type: "Caffinated",
  },
  {
    id: "43",
    name: "Oolong",
  },
  {
    id: "44",
    name: "Dubliners",
  },
  {
    id: "45",
    name: "Earl Grey",
  },
  {
    id: "46",
    name: "Chai",
  },
  {
    id: "47",
    name: "White Pomegranate",
  },
  {
    id: "48",
    name: "Green",
  },
  {
    id: "49",
    type: "Herbal",
  },
  {
    id: "50",
    name: "Cranberry Apple Ginger",
  },
  {
    id: "51",
    name: "Mintology",
  },
  {
    id: "52",
    name: "Lemon Berry",
  },
  {
    id: "53",
    name: "Chamomile Lavender",
  },
  {
    id: "54",
    name: "Rooibos",
  },
  {
    id: "55",
    name: "Spicy Licorice Mint",
  },
  {
    id: "56",
    name: "Any tea iced",
    basePrice: 2.75,
    size: ["small ", "large "],
  },
]
  },
  {
    category: "Bottled Drinks",
    drinks: [
      {
        id: "57",
        basePrice: 2.5,
      },
      {
        id: "58",
        name: "Smart Water",
      },
      {
        id: "59",
        name: "San Pellegrino",
      },
      {
        id: "60",
        name: "Lemonade",
      },
      {
        id: "61",
        name: "Cranberry Juice",
      },
    
    ]
  }
]

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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
        },
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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
        },
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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
        },
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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
        },
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
        options: {
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          blends: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Light", price: 0 },
              { id: 2, name: "Medium", price: 0 },
              { id: 3, name: "Dark", price: 0 },
            ],
          },
        },
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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "2",
        name: "Espresso",
        basePrice: 2.5,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "3",
        name: "Americano",
        basePrice: 2.75,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "4",
        name: "Cappucchino",
        basePrice: 3.75,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "5",
        name: "Latte",
        basePrice: 4,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "6",
        name: "Lavender Latte",
        basePrice: 4.5,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "7",
        name: "Cardamom Latte",
        basePrice: 4.5,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "8",
        name: "Mocha Latte",
        basePrice: 4.5,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "9",
        name: "Dirty Chai",
        basePrice: 5.25,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
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
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        id: "1",
        name: "Chai Latte",
        basePrice: 4.5,
        ingrediants: ["housemade chai base "],
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
        },
      },
      {
        category: "White Heron Loose Leaf",
        id: "3",
        basePrice: 2.25,
        options: {
          sizes: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Small", price: 0 },
              { id: 2, name: "Large", price: 1 },
            ],
          },
          milks: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oat", price: 0 },
              { id: 2, name: "Soy", price: 0 },
              { id: 3, name: "Whole", price: 0 },
            ],
          },
          flavors: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Caramel", price: 0.5 },
              { id: 2, name: "Vanilla", price: 0.5 },
              { id: 3, name: "Hazelnut", price: 0.5 },
              { id: 4, name: "Seasonal", price: 0.5 },
            ],
          },
          iced: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Hot", price: 0 },
              { id: 2, name: "Iced", price: 0.5 },
            ],
          },
          caffinated: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Oolong", price: 0 },
              { id: 2, name: "Dubliners", price: 0 },
              { id: 3, name: "Earl Grey", price: 0 },
              { id: 4, name: "Chai", price: 0 },
              { id: 5, name: "White Pomegranate", price: 0 },
              { id: 6, name: "Green", price: 0 },
            ],
          },
          herbal: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Cranberry Apple Ginger", price: 0 },
              { id: 2, name: "Mintology", price: 0 },
              { id: 3, name: "Lemon Berry", price: 0 },
              { id: 4, name: "Rooibos", price: 0 },
              { id: 5, name: "Chamomile Lavender", price: 0 },
              { id: 6, name: "Spicy Licorice Mint", price: 0 },
            ],
          },
        },
      },
    ],
  },
  {
    category: "Bottled Drinks",
    drinks: [
      {
        id: "1",
        basePrice: 2.5,
        options: {
          bottles: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Smart Water", price: 0 },
              { id: 2, name: "San Pellegrino", price: 0 },
              { id: 2, name: "Lemonade", price: 0 },
              { id: 2, name: "Cranberry Juice", price: 0 },
            ],
          },
        },
      },
    ],
  },
]

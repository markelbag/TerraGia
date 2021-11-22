export const Drinks = [
    {
      type: "Pressed Juices",
      items: [
        {
            id: "1",
            name: "Sunrise",
            price: "$6.5",
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
            price: "$6.5",
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
            price: "$6.5",
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
            price: "$6.5",
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
            price: "$5",
            ingrediants: ["celery"],
          },
      ],
    },
    {
      type: "Smoothie",
      items: [
        {
        id: "1",
        name: "Strawberry Ginger",
        price: "$7",
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
        price: "$7",
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
        price: "$7",
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
        price: "$7",
        ingrediants: ["orange","apple","pineapple","coconut flakes"],
      },
      {
        id: "5",
        name: "Banana Oat",
        price: "$7",
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
      type: "Elixirs and Tonics",
      items: [
          {
        id: "1",
        name: "Lemon Ginger Tonic",
        price: "$5",
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
        price: "$5",
        ingrediants: ["house blend turmeric tea",],
      },
      {
        id: "3",
        name: "Spiced Carob",
        price: "$4.5",
        ingrediants: ["carob","spices","agave",],
      },
      {
        id: "4",
        name: "Yerba Mate Latte",
        price: "$4.5",
        ingrediants: ["yerba mate tea",],
      },
      {
        id: "5",
        name: "Chlorophyll Water",
        price: "$3",
        ingrediants: ["lemon","ginger","chlorophyll","h20"],
      },
      {
        id: "6",
        name: "Carrot Ginger Elixir",
        price: "$5",
        ingrediants: [
          "carrot",
          "ginger shrub",
          "mint",
          "berries",
          "seltzer",
        ],
      },
      {
        id: "7",
        name: "Spirulina Matcha",
        price: "$7",
        ingrediants: ["spirulina","matcha","oat milk","pineapple"],
      },
      {
        id: "8",
        name: "Yuzu Tea Tonic",
        price: "$5",
        ingrediants: ["yuzu","white tea","mint"],
      },
      ],
    },
    {
      type: "Healing Teas",
      items: [
        {
        id: "1",
        name: "Fortify",
        ingrediants: ["hibiscus","chamomile","marshmallow","spearmint"],
        price: ["$4 ","$5 "],
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
        price: ["$4","$5"],
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
        price: ["$4 ","$5"],
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
        price: ["$4 ","$5"],
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
      type: "Hot Chocolate",
      items: [
        {
            id: "1",
            name: "Belgian Hot Chocolate",
            price: "$5",
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
        ]
          },
      ],
    },

    {
      type: "Coffee Bar",
      items: [
          {
        id: "1",
        name: "Drip Coffee",
        price: ["$2.25 ","$2.75"],
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
        price: ["$2.50 ","$3.25"],
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
        price: ["$2.75 ","$2.50"],
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
        price: ["$3.75 ","$4.75"],
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
        price: ["$4 ","$5"],
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
        price: ["$4.5 ","$5.5"],
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
        price: ["$4.5 ","$5.5"],
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
        price: ["$4.5 ","$5.5"],
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
        price: ["$5.25 ","$6"],
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
      type: "Other Teas",
      id: "39",
      name: "Matcha Latte",
      price: ["$4.5 ","$5.5"],
      ingrediants: ["organic matcha ",],
      size: [
        "small ",
        "large "
      ],
      milk: ["whole", "soy", "oat"]
    },
    {
      id: "40",
      name: "Chai Latte",
      price: ["$4.5 ","$5.5"],
      ingrediants: ["housemade chai base ",],
      size: [
        "small ",
        "large "
      ],
      milk: ["whole", "soy", "oat"]
    },
    {
      type: "White Heron Loose Leaf",
      id: "41",
      price: ["$2.25 ","$2.75"],
      size: [
        "small ",
        "large "
      ]
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
      price: ["$2.75 ","$3.25"],
      size: [
        "small ",
        "large "
      ]
    },
  
    {
      id: "57",
      type: "Bottled Drinks",
      price: "$2.5",
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
  ],
},
]
  export const Food = [
    {
      type: "Breakfast",
      items: [
          {
            id: "1",
            name: "Breakfast Sandwich",
            price: "$8",
            ingrediants: [
                "herbed aioli",
                "irish cheddar",
                "egg",
                "tomato",
                "spinach ",
            ],
        options: [
            {
                type: "bread",
                values: ["whole", "soy", "oat"],
                addedPrice: [0, 0, 0],
                formType: "single",
            },
            {
                type: "protien",
                values: ["bacon", "ham"],
                addedPrice: [0, 0, 0],
            },
        ]
          },
          {
            id: "2",
            name: "Green Eggs And Ham",
            price: "$10",
            ingrediants: [
              "couscous",
              "quinoa",
              "feta",
              "avocado",
              "bacon",
              "poached eggs",
              "chimichurri",
              "seven grain toast",
            ],
          },
          {
            id: "3",
            name: "Burnt Onion Bowl",
            price: "$10",
            ingrediants: [
              "sweet potato",
              "avocado",
              "poached eggs",
              "bacon",
              "burnt onion",
              "hot oil",
              "seven grain toast",
            ],
          },
          {
            id: "4",
            name: "Fall Greek Yogurt",
            price: "$8",
            ingrediants: [
              "greek yogurt",
              "sweetened citrus rind",
              "toasted almonds",
              "mulberries",
              "honey",
            ],
          },
          {
            id: "5",
            name: "Porridge",
            price: "$10",
            ingrediants: [
              "steel cut oatmeal",
              "quinoa",
              "granola",
              "maple syrup",
              "banana",
              "berries",
              "coconut",
            ],
          },
          {
            id: "6",
            name: "Hummus Avocado Toast",
            price: "$10",
            ingrediants: [
              "seven grain toast ",
              "avocado",
              "hummus",
              "tomato",
              "spicy oil",
              "arugala",
            ],
          },
          {
            id: "7",
            name: "Sweet Potato Avocado Toast",
            price: "$10",
            ingrediants: [
              "seven grain toast",
              "avocado",
              "sweet potato",
              "sprouts",
              "poached eggs",
            ],
          },
          {
            id: "8",
            name: "Feta Avocado Toast",
            price: "$10",
            ingrediants: [
              "seven grain toast",
              "avocado",
              "feta",
              "poached eggs",
              "rosemary",
              "olive oil",
              "lemon",
            ],
          },
          {
            id: "9",
            name: "Almond Butter Toast",
            price: "$10",
            ingrediants: [
              "Sourdough",
              "almond butter",
              "banana",
              "cinnamon",
              "honey",
            ],
          },
      ],
    },     
    {
      type: "Salad",
      items: [
          {
            id: "1",
            name: "Avocado Blue",
            price: "$11.5",
            ingrediants: [
              "avocado",
              "blue cheese",
              "dried apricots",
              "candied pecans",
              "apple",
              "mixed greens",
              "red wine vinaigrette",
            ],
          },
          {
            id: "2",
            name: "Pear Sage",
            price: "$11.5",
            ingrediants: [
              "chicken",
              "fried sage",
              "pear",
              "pecorino",
              "dried cherries",
              "mixed greens",
              "apple cider dressing",
            ],
          },
          {
            id: "3",
            name: "Beet and Apple",
            price: "$11.5",
            ingrediants: [
              "roasted beets",
              "apple",
              "pistachio",
              "goat cheese",
              "arugula",
              "red wine vinaigrette",
            ],
          },
          {
            id: "4",
            name: "Caesar Lyon",
            price: "$11.5",
            ingrediants: [
              "mixed greens",
              "house made croutons",
              "bacon",
              "boiled eggs",
              "pecorino",
              "candied pecans",
              "mustard dressing",
            ],
          },
      ],
    }, 
    {
      type: "Soups",
      items: [
    {
        id: "75",
        name: "Onion Soup",
        price: "$7",
        ingrediants: ["onion soup","croutons","melted gruyere"],
      },
      {
        id: "76",
        name: "Soup of the Day",
        price: ["$5 ","$7"],
        size: [
          "cup ",
          "bowl "
        ]
      },
      ],
    },
    {
      type: "Grain Bowls",
      items: [
          {
        id: "1",
        name: "Harvest",
        price: "$11.5",
        ingrediants: [
          "roasted butternut squash and carrots",
          "green beans",
          "slivered almonds",
          "dried cherries",
          "pepitas",
          "green onions",
          "honey apple dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "2",
        name: "Shroom",
        price: "$11.5",
        ingrediants: [
          "roasted mushrooms",
          "red cabbage",
          "sweet apple",
          "pecorino",
          "hazelnuts",
          "pumpkin dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "3",
        name: "Mediterranean",
        price: "$11.5",
        ingrediants: [
          "red onion",
          "tomato",
          "feta",
          "olives",
          "cucumber",
          "harissa chickpeas",
          "roasted butternut squash and carrots",
          "lemon mint dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "4",
        name: "Moroccan",
        price: "$11.5",
        ingrediants: [
          "chickpeas",
          "green beans",
          "roasted eggplant",
          "roasted squash and carrots",
          "apricots",
          "almonds",
          "spicy tamarind dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "5",
        name: "Spicy Thai",
        price: "$11.5",
        ingrediants: [
          "edamame",
          "red bell pepper",
          "green onion",
          "carrot",
          "jalapeno",
          "basil",
          "avocado",
          "peanuts",
          "currants",
          "sriracha peanut dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "6",
        name: "Asian Garden",
        price: "$11.5",
        ingrediants: [
          "pea shoots",
          "roasted broccoli",
          "shiitake",
          "beets",
          "carrots",
          "6",
          "sesame ginger dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "7",
        name: "Nordic",
        price: "$11.5",
        ingrediants: [
          "roasted fennel",
          "baby potato",
          "mint",
          "peas",
          "caramelized onions",
          "roasted beets",
          "creamy dill dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      {
        id: "8",
        name: "Kimchi",
        price: "$11.5",
        ingrediants: [
          "sauteed spinach and pea shoots",
          "carrots",
          "radish",
          "avocado",
          "rosemary",
          "kimchi",
          "seaweed",
          "sticky rice",
          "poached egg",
          "gochujang dressing",
        ],
        options: [
            {
                type: "protien",
                values: ["chicken", "tofu", "boiled egg"],
                addedPrice: [0, 0, 0],
            },
        ],
      },
      ],
    },
    {
      type: "Sandwiches",
      items: [
        {
            id: "1",
            choice: "Choice of Sourdough or Seven Grain Bread",
            name: "Turkey Bacon",
            price: "$9",
            ingrediants: [
              "turkey",
              "applewood smoked bacon",
              "lettuce",
              "tomato",
              "mayo ",],
                options: [
                    {
                        type: "bread",
                        values: ["whole", "soy", "oat"],
                        addedPrice: [0, 0, 0],
                        formType: "single",
                    },
                    {
                        type: "cheese",
                        values: ["whole", "soy", "oat"],
                        addedPrice: [0, 0, 0],
                    },
                ],
          },
          {
            id: "2",
            name: "Chicken Salad",
            price: "$9",
            ingrediants: [
              "chicken",
              "grapes",
              "walnuts",
              "green onion",
              "mayo",
              "arugula",
            ],
            options: [
                {
                    type: "bread",
                    values: ["whole", "soy", "oat"],
                    addedPrice: [0, 0, 0],
                    formType: "single",
                },
            ],
          },
          {
            id: "3",
            name: "Caprese",
            price: "$9",
            ingrediants: ["fresh mozzarella","tomato","pesto","baguette"],
          },
          {
            id: "4",
            name: "BBQ Veg/Chix Burger",
            price: "$10",
            ingrediants: [
              "bbq sauce",
              "irish cheddar",
              "pickles",
              "red onion",
              "arugula",
              "tomato",
              "vegan mayo",
              "brioche ",
            ],
            options: [
                {
                    type: "patties",
                    values: ["whole", "soy", "oat"],
                    addedPrice: [0, 0, 0],
                },
            ],
          },
          {
            id: "5",
            name: "Shroom Veg/Chix Burger",
            price: "$10",
            ingrediants: [
              "wild mushrooms",
              "swiss",
              "tomato",
              "arugula",
              "vegan mayo",
              "brioche ",
            ],
            options: [
                {
                    type: "patties",
                    values: ["whole", "soy", "oat"],
                    addedPrice: [0, 0, 0],
                },
            ],
          },
          {
            id: "6",
            name: "Avo Basil Veg/Chix Burger",
            price: "$10",
            ingrediants: [
              "basil dressing",
              "avocado",
              "tomato",
              "arugula",
              "vegan mayo",
              "brioche ",
            ],
            options: [
                {
                    type: "patties",
                    values: ["whole", "soy", "oat"],
                    addedPrice: [0, 0, 0],
                },
            ],
          },
      ],
    },
]
  
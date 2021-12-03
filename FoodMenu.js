export const FoodMenu = [
  {
    category: "Breakfast",
    foods: [
      {
        id: "1",
        name: "Breakfast Sandwich",
        basePrice: 8,
        ingrediants: [
          "herbed aioli",
          "irish cheddar",
          "egg",
          "tomato",
          "spinach ",
        ],
        options: {
          bread: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Sourdough", price: 0 },
              { id: 2, name: "Seven Grain", price: 0 },
            ],
          },
          meats: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Ham", price: 0 },
              { id: 2, name: "Bacon", price: 0 },
            ],
          },
        },
      },
      {
        id: "2",
        name: "Green Eggs And Ham",
        basePrice: 10,
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
        options: {
          proteins: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "3",
        name: "Burnt Onion Bowl",
        basePrice: 10,
        ingrediants: [
          "sweet potato",
          "avocado",
          "poached eggs",
          "bacon",
          "burnt onion",
          "hot oil",
          "seven grain toast",
        ],
        options: {
          proteins: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "4",
        name: "Fall Greek Yogurt",
        basePrice: 8,
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
        basePrice: 10,
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
        basePrice: 10,
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
        basePrice: 10,
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
        basePrice: 10,
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
        basePrice: 10,
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
    category: "Salad",
    foods: [
      {
        id: "1",
        name: "Avocado Blue",
        basePrice: 11.5,
        ingrediants: [
          "avocado",
          "blue cheese",
          "dried apricots",
          "candied pecans",
          "apple",
          "mixed greens",
          "red wine vinaigrette",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "2",
        name: "Pear Sage",
        basePrice: 11.5,
        ingrediants: [
          "chicken",
          "fried sage",
          "pear",
          "pecorino",
          "dried cherries",
          "mixed greens",
          "apple cider dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "3",
        name: "Beet and Apple",
        basePrice: 11.5,
        ingrediants: [
          "roasted beets",
          "apple",
          "pistachio",
          "goat cheese",
          "arugula",
          "red wine vinaigrette",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "4",
        name: "Caesar Lyon",
        basePrice: 11.5,
        ingrediants: [
          "mixed greens",
          "house made croutons",
          "bacon",
          "boiled eggs",
          "pecorino",
          "candied pecans",
          "mustard dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
    ],
  },
  {
    category: "Soups",
    foods: [
      {
        id: "75",
        name: "Onion Soup",
        basePrice: 7,
        ingrediants: ["onion soup", "croutons", "melted gruyere"],
      },
      {
        id: "76",
        name: "Soup of the Day",
        basePrice: 5,
        size: ["cup ", "bowl "],
      },
    ],
  },
  {
    category: "Grain Bowls",
    foods: [
      {
        id: "1",
        name: "Harvest",
        basePrice: 11.5,
        ingrediants: [
          "roasted butternut squash and carrots",
          "green beans",
          "slivered almonds",
          "dried cherries",
          "pepitas",
          "green onions",
          "honey apple dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "2",
        name: "Shroom",
        basePrice: 11.5,
        ingrediants: [
          "roasted mushrooms",
          "red cabbage",
          "sweet apple",
          "pecorino",
          "hazelnuts",
          "pumpkin dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "3",
        name: "Mediterranean",
        basePrice: 11.5,
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
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "4",
        name: "Moroccan",
        basePrice: 11.5,
        ingrediants: [
          "chickpeas",
          "green beans",
          "roasted eggplant",
          "roasted squash and carrots",
          "apricots",
          "almonds",
          "spicy tamarind dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "5",
        name: "Spicy Thai",
        basePrice: 11.5,
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
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "6",
        name: "Asian Garden",
        basePrice: 11.5,
        ingrediants: [
          "pea shoots",
          "roasted broccoli",
          "shiitake",
          "beets",
          "carrots",
          "6",
          "sesame ginger dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "7",
        name: "Nordic",
        basePrice: 11.5,
        ingrediants: [
          "roasted fennel",
          "baby potato",
          "mint",
          "peas",
          "caramelized onions",
          "roasted beets",
          "creamy dill dressing",
        ],
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
      {
        id: "8",
        name: "Kimchi",
        basePrice: 11.5,
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
        options: {
          proteins: {
            selectType: "multi",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken", price: 3 },
              { id: 2, name: "Tofu", price: 2 },
              { id: 3, name: "Boiled Egg", price: 1 },
            ],
          },
        },
      },
    ],
  },
  {
    category: "Sandwiches",
    foods: [
      {
        id: "1",
        choice: "Choice of Sourdough or Seven Grain Bread",
        name: "Turkey Bacon",
        basePrice: 9,
        ingrediants: [
          "turkey",
          "applewood smoked bacon",
          "lettuce",
          "tomato",
          "mayo ",
        ],
        options: {
          bread: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Sourdough", price: 0 },
              { id: 2, name: "Seven Grain", price: 0 },
            ],
          },
          cheese: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Swiss", price: 0 },
              { id: 2, name: "Provolone", price: 0 },
            ],
          },
        },
      },
      {
        id: "2",
        name: "Chicken Salad",
        basePrice: 9,
        ingrediants: [
          "chicken",
          "grapes",
          "walnuts",
          "green onion",
          "mayo",
          "arugula",
        ],
        options: {
          bread: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Sourdough", price: 0 },
              { id: 2, name: "Seven Grain", price: 0 },
            ],
          },
          cheese: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Swiss", price: 1 },
              { id: 2, name: "Provolone", price: 1 },
            ],
          },
        },
      },
      {
        id: "3",
        name: "Caprese",
        basePrice: 9,
        ingrediants: ["fresh mozzarella", "tomato", "pesto", "baguette"],
      },
      {
        id: "4",
        name: "BBQ Veg/Chix Burger",
        basePrice: 10,
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
        options: {
          patty: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken Patty", price: 0 },
              { id: 2, name: "Veggie Patty", price: 0 },
            ],
          },
        },
      },
      {
        id: "5",
        name: "Shroom Veg/Chix Burger",
        basePrice: 10,
        ingrediants: [
          "wild mushrooms",
          "swiss",
          "tomato",
          "arugula",
          "vegan mayo",
          "brioche ",
        ],
        options: {
          patty: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken Patty", price: 0 },
              { id: 2, name: "Veggie Patty", price: 0 },
            ],
          },
        },
      },
      {
        id: "6",
        name: "Avo Basil Veg/Chix Burger",
        basePrice: 10,
        ingrediants: [
          "basil dressing",
          "avocado",
          "tomato",
          "arugula",
          "vegan mayo",
          "brioche ",
        ],
        options: {
          patty: {
            selectType: "single",
            selections: [
              { id: null, name: "None", price: 0 },
              { id: 1, name: "Chicken Patty", price: 0 },
              { id: 2, name: "Veggie Patty", price: 0 },
            ],
          },
        },
      },
    ],
  },
]

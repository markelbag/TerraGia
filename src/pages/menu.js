import * as React from "react"
import MenuDrinks from "../components/menu/menuDrinks"
import MenuFood from "../components/menu/menuFood"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/menu/menu.css"
import logo from "../images/logo.svg"

// const items = [
//   drinks
//   [
//       {
//           type: "Pressed Juices",
//           items: [
//               {
//                   name: "sunrise",
//                   price: "$6.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "carrot",
//                       },
//                       {
//                           id: "2",
//                           name: "apple",
//                       },
//                       {
//                           id: "3",
//                           name: "ginger",
//                       },
//                       {
//                           id: "4",
//                           name: "lemon",
//                       },
//                       {
//                           id: "5",
//                           name: "turmeric",
//                       },
//                       {
//                           id: "6",
//                           name: "black pepper",
//                       },
//                   ],
//               },
//               {
//                   name: "detox",
//                   price: "$6.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "fennel",
//                       },
//                       {
//                           id: "2",
//                           name: "romain",
//                       },
//                       {
//                           id: "3",
//                           name: "cucumber",
//                       },
//                       {
//                           id: "4",
//                           name: "lime",
//                       },
//                       {
//                           id: "5",
//                           name: "basil",
//                       },
//                       {
//                           id: "6",
//                           name: "apple",
//                       },
//                       {
//                           id: "7",
//                           name: "spinach",
//                       },
//                   ],
//               },
//               {
//                   name: "kickstart",
//                   price: "$6.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "beet",
//                       },
//                       {
//                           id: "2",
//                           name: "apple",
//                       },
//                       {
//                           id: "3",
//                           name: "cucumber",
//                       },
//                       {
//                           id: "4",
//                           name: "lemon",
//                       },
//                       {
//                           id: "5",
//                           name: "orange",
//                       },
//                       {
//                           id: "6",
//                           name: "cayenne",
//                       },
//                   ],
//               },
//               {
//                   name: "refresh",
//                   price: "$6.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "pineapple",
//                       },
//                       {
//                           id: "2",
//                           name: "mint",
//                       },
//                       {
//                           id: "3",
//                           name: "chard",
//                       },
//                       {
//                           id: "4",
//                           name: "cucumber",
//                       },
//                       {
//                           id: "5",
//                           name: "celery",
//                       },
//                       {
//                           id: "6",
//                           name: "apple",
//                       },
//                   ],
//               },
//               {
//                   name: "celery",
//                   price: "$5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "celery",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Smoothie",
//           items: [
//               {
//                   name: "Strawberry Ginger",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "strawberry",
//                       },
//                       {
//                           id: "2",
//                           name: "mango",
//                       },
//                       {
//                           id: "3",
//                           name: "ginger",
//                       },
//                       {
//                           id: "4",
//                           name: "apple juice",
//                       },
//                       {
//                           id: "5",
//                           name: "cranberry juice",
//                       },
//                   ],
//               },
//               {
//                   name: "acaiPomegranate",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "acai",
//                       },
//                       {
//                           id: "2",
//                           name: "strawberry",
//                       },
//                       {
//                           id: "3",
//                           name: "banana",
//                       },
//                       {
//                           id: "4",
//                           name: "pomegranate juice",
//                       },
//                       {
//                           id: "5",
//                           name: "agave",
//                       },
//                   ],
//               },
//               {
//                   name: "GreensAnd Apples",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "apple",
//                       },
//                       {
//                           id: "2",
//                           name: "spinach",
//                       },
//                       {
//                           id: "3",
//                           name: "mango",
//                       },
//                       {
//                           id: "4",
//                           name: "cinnamon",
//                       },
//                       {
//                           id: "5",
//                           name: "coconut milk",
//                       },
//                       {
//                           id: "6",
//                           name: "agave",
//                       },
//                   ],
//               },
//               {
//                   name: "Aloha Pineapple",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "orange",
//                       },
//                       {
//                           id: "2",
//                           name: "apple",
//                       },
//                       {
//                           id: "3",
//                           name: "pineapple",
//                       },
//                       {
//                           id: "4",
//                           name: "coconut flakes",
//                       },
//                   ],
//               },
//               {
//                   name: "Banana Oat",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "oat milk",
//                       },
//                       {
//                           id: "2",
//                           name: "banana",
//                       },
//                       {
//                           id: "3",
//                           name: "cinnamon",
//                       },
//                       {
//                           id: "4",
//                           name: "turmeric",
//                       },
//                       {
//                           id: "5",
//                           name: "ginger",
//                       },
//                       {
//                           id: "6",
//                           name: "dates",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Elixirs and Tonics",
//           items: [
//               {
//                   name: "Lemon Ginger Tonic",
//                   price: "$5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "lemon",
//                       },
//                       {
//                           id: "2",
//                           name: "ginger",
//                       },
//                       {
//                           id: "3",
//                           name: "honey",
//                       },
//                       {
//                           id: "4",
//                           name: "turmeric",
//                       },
//                       {
//                           id: "5",
//                           name: "black pepper",
//                       },
//                       {
//                           id: "6",
//                           name: "served hot",
//                       },
//                   ],
//               },
//               {
//                   name: "Golden Latte",
//                   price: "$5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "house blend turmeric tea",
//                       },
//                       {
//                           id: "2",
//                           name: "choice of milk",
//                       },
//                   ],
//               },
//               {
//                   name: "Spiced Carob",
//                   price: "$4.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "carob",
//                       },
//                       {
//                           id: "2",
//                           name: "spices",
//                       },
//                       {
//                           id: "3",
//                           name: "agave",
//                       },
//                       {
//                           id: "4",
//                           name: "choice of milk",
//                       },
//                   ],
//               },
//               {
//                   name: "Yerba Mate Latte",
//                   price: "$4.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "yerba mate tea",
//                       },
//                       {
//                           id: "2",
//                           name: "choice of milk",
//                       },
//                   ],
//               },
//               {
//                   name: "Chlorophyll Water",
//                   price: "$3",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "lemon",
//                       },
//                       {
//                           id: "2",
//                           name: "ginger",
//                       },
//                       {
//                           id: "3",
//                           name: "chlorophyll",
//                       },
//                       {
//                           id: "4",
//                           name: "h20",
//                       },
//                   ],
//               },
//               {
//                   name: "Carrot Ginger Elixir",
//                   price: "$5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "carrot",
//                       },
//                       {
//                           id: "2",
//                           name: "ginger shrub",
//                       },
//                       {
//                           id: "3",
//                           name: "mint",
//                       },
//                       {
//                           id: "4",
//                           name: "berries",
//                       },
//                       {
//                           id: "5",
//                           name: "seltzer",
//                       },
//                   ],
//               },
//               {
//                   name: "Spirulina Matcha",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "spirulina",
//                       },
//                       {
//                           id: "2",
//                           name: "matcha",
//                       },
//                       {
//                           id: "3",
//                           name: "oat milk",
//                       },
//                       {
//                           id: "4",
//                           name: "pineapple",
//                       },
//                   ],
//               },
//               {
//                   name: "Yuzu Tea Tonic",
//                   price: "$5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "yuzu",
//                       },
//                       {
//                           id: "2",
//                           name: "white tea",
//                       },
//                       {
//                           id: "3",
//                           name: "mint",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Healing Teas",
//           items: [
//               {
//                   name: "Fortify",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "hibiscus",
//                       },
//                       {
//                           id: "2",
//                           name: "chamomile",
//                       },
//                       {
//                           id: "3",
//                           name: "marshmallow",
//                       },
//                       {
//                           id: "4",
//                           name: "spearmint",
//                       },
//                   ],
//               },
//               {
//                   name: "rejuvenate",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "lemongrass",
//                       },
//                       {
//                           id: "2",
//                           name: "rose petals",
//                       },
//                       {
//                           id: "3",
//                           name: "peppermint",
//                       },
//                       {
//                           id: "4",
//                           name: "candula petals",
//                       },
//                   ],
//               },
//               {
//                   name: "serenitea",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "lemon verbena",
//                       },
//                       {
//                           id: "2",
//                           name: "peppermint",
//                       },
//                       {
//                           id: "3",
//                           name: "lemongrass",
//                       },
//                       {
//                           id: "4",
//                           name: "lavender",
//                       },
//                       {
//                           id: "5",
//                           name: "schisandra",
//                       },
//                       {
//                           id: "6",
//                           name: "cedar berries",
//                       },
//                       {
//                           id: "7",
//                           name: "orange peel",
//                       },
//                       {
//                           id: "8",
//                           name: "st johns wort",
//                       },
//                   ],
//               },
//               {
//                   name: "revive",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "tulsi",
//                       },
//                       {
//                           id: "2",
//                           name: "turmeric",
//                       },
//                       {
//                           id: "3",
//                           name: "cardamom",
//                       },
//                       {
//                           id: "4",
//                           name: "ginger",
//                       },
//                       {
//                           id: "5",
//                           name: "licorice",
//                       },
//                       {
//                           id: "6",
//                           name: "cayenne",
//                       },
//                       {
//                           id: "7",
//                           name: "black pepper",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Hot Chocolate",
//           items: [
//               {
//                   name: "Belgian Hot Chocolate",
//                   price: "$5",
//                   blend: [
//                       {
//                           id: "1",
//                           ratio: "light",
//                       },
//                       {
//                           id: "2",
//                           ratio: "medium",
//                       },
//                       {
//                           id: "1",
//                           ratio: "dark",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Coffee Bar",
//           item: [
//               {
//                   name: "drip coffee",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$2.25",
//                       },
//                       {
//                           id: "lg",
//                           price: "$2.75",
//                       },
//                   ],
//               },
//               {
//                   id: "2",
//                   name: "espresso",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$2.50",
//                       },
//                       {
//                           id: "lg",
//                           price: "$3.25",
//                       },
//                   ],
//               },
//               {
//                   id: "3",
//                   name: "americano",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$2.75",
//                       },
//                       {
//                           id: "lg",
//                           price: "$2.50",
//                       },
//                   ],
//               },
//               {
//                   id: "4",
//                   name: "cappucchino",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$3.75",
//                       },
//                       {
//                           id: "lg",
//                           price: "$4.75",
//                       },
//                   ],
//               },
//               {
//                   id: "5",
//                   name: "latte",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5",
//                       },
//                   ],
//               },
//               {
//                   id: "6",
//                   name: "lavender latte",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4.5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5.5",
//                       },
//                   ],
//               },
//               {
//                   id: "7",
//                   name: "cardamom latte",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4.5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5.5",
//                       },
//                   ],
//               },
//               {
//                   id: "8",
//                   name: "mocha latte",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4.5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5.5",
//                       },
//                   ],
//               },
//               {
//                   id: "9",
//                   name: "dirty chai",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$5.25",
//                       },
//                       {
//                           id: "lg",
//                           price: "$6",
//                       },
//                   ],
//               },
//               {
//                   id: "10",
//                   name: "flavor shot",
//                   price: "$.5",
//                   type: [
//                       {
//                           id: "1",
//                           name: "caramel",
//                       },
//                       {
//                           id: "2",
//                           name: "hazelnut",
//                       },
//                       {
//                           id: "3",
//                           name: "vanilla",
//                       },
//                       {
//                           id: "4",
//                           name: "seasonal",
//                       },
//                   ],
//               },
//               {
//                   id: "11",
//                   name: "any iced drink",
//                   price: "$.5",
//               },
//           ],
//       },

//       {
//           type: "Other Teas",
//           item: [
//               {
//                   name: "Matcha Latte",
//                   sizes: [
//                       {
//                           id: "sm",
//                           price: "$4.5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5.5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "organic match",
//                       },
//                       {
//                           id: "2",
//                           name: "choice of milk",
//                       },
//                   ],
//                   description: "",
//               },
//               {
//                   name: "Chai Latte",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$4.5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$5.5",
//                       },
//                   ],
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "housemade chai base",
//                       },
//                       {
//                           id: "2",
//                           name: "choice of milk",
//                       },
//                   ],
//                   description: "",
//               },
//               {
//                   name: "White Heron Loose Leaf",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$2.25",
//                       },
//                       {
//                           id: "lg",
//                           price: "$2.75",
//                       },
//                   ],
//                   caffeinated: [
//                       {
//                           id: "1",
//                           name: "oolong",
//                       },
//                       {
//                           id: "2",
//                           name: "dubliners",
//                       },
//                       {
//                           id: "3",
//                           name: "earl grey",
//                       },
//                       {
//                           id: "4",
//                           name: "chai",
//                       },
//                       {
//                           id: "5",
//                           name: "white pomegranate",
//                       },
//                       {
//                           id: "6",
//                           name: "green",
//                       },
//                   ],
//                   herbal: [
//                       {
//                           id: "1",
//                           name: "cranberry apple ginger",
//                       },
//                       {
//                           id: "2",
//                           name: "mintology",
//                       },
//                       {
//                           id: "3",
//                           name: "lemon berry",
//                       },
//                       {
//                           id: "4",
//                           name: "chamomile lavender",
//                       },
//                       {
//                           id: "5",
//                           name: "rooibos",
//                       },
//                       {
//                           id: "6",
//                           name: "spicy licorice mint",
//                       },
//                   ],
//                   icedTea: {
//                       id: "1",
//                       name: "any tea iced",
//                       price: [
//                           {
//                               id: "sm",
//                               size: "$2.75",
//                           },
//                           {
//                               id: "lg",
//                               size: "$3.25",
//                           },
//                       ],
//                   },
//               },
//           ],
//       },

//       {
//           name: "Bottled Drinks",
//           price: "$2.5",
//           bottle: [
//               {
//                   id: "1",
//                   name: "smart water",
//               },
//               {
//                   id: "2",
//                   name: "san pellegrino",
//               },
//               {
//                   id: "3",
//                   name: "lemonade",
//               },
//               {
//                   id: "4",
//                   name: "cranberry juice",
//               },
//           ],
//       },
//   ],
// // food
//   [
//       {
//           type: "breakfast",
//           item: [
//               {
//                   name: "Breakfast Sandwich",
//                   price: "$8",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "herbed aioli",
//                       },
//                       {
//                           id: "2",
//                           name: "irish cheddar",
//                       },
//                       {
//                           id: "3",
//                           name: "egg",
//                       },
//                       {
//                           id: "4",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "bacon",
//                               },
//                               {
//                                   id: "2",
//                                   name: "ham",
//                               },
//                           ],
//                       },
//                       {
//                           id: "5",
//                           name: "tomato",
//                       },
//                       {
//                           id: "6",
//                           name: "spinach",
//                       },
//                       {
//                           id: "7",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "sourdough",
//                               },
//                               {
//                                   id: "2",
//                                   name: "seven grain",
//                               },
//                           ],
//                       },
//                   ],
//               },
//               {
//                   name: "Green Eggs And Ham",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "couscous",
//                       },
//                       {
//                           id: "2",
//                           name: "quinoa",
//                       },
//                       {
//                           id: "3",
//                           name: "feta",
//                       },
//                       {
//                           id: "4",
//                           name: "avocado",
//                       },
//                       {
//                           id: "5",
//                           name: "bacon",
//                       },
//                       {
//                           id: "6",
//                           name: "poached eggs",
//                       },
//                       {
//                           id: "7",
//                           name: "chimichurri",
//                       },
//                       {
//                           id: "8",
//                           name: "seven grain toast",
//                       },
//                   ],
//               },
//               {
//                   name: "Burnt Onion Bowl",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "sweet potato",
//                       },
//                       {
//                           id: "2",
//                           name: "avocado",
//                       },
//                       {
//                           id: "3",
//                           name: "poached eggs",
//                       },
//                       {
//                           id: "4",
//                           name: "bacon",
//                       },
//                       {
//                           id: "5",
//                           name: "burnt onion",
//                       },
//                       {
//                           id: "6",
//                           name: "hot oil",
//                       },
//                       {
//                           id: "7",
//                           name: "seven grain toast",
//                       },
//                   ],
//               },
//               {
//                   name: "Fall Greek Yogurt",
//                   price: "$8",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "greek yogurt",
//                       },
//                       {
//                           id: "2",
//                           name: "sweetened citrus rind",
//                       },
//                       {
//                           id: "3",
//                           name: "toasted almonds",
//                       },
//                       {
//                           id: "4",
//                           name: "mulberries",
//                       },
//                       {
//                           id: "5",
//                           name: "honey",
//                       },
//                   ],
//               },
//               {
//                   name: "porridge",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "steel cut oatmeal",
//                       },
//                       {
//                           id: "2",
//                           name: "quinoa",
//                       },
//                       {
//                           id: "3",
//                           name: "granola",
//                       },
//                       {
//                           id: "4",
//                           name: "maple syrup",
//                       },
//                       {
//                           id: "5",
//                           name: "banana",
//                       },
//                       {
//                           id: "6",
//                           name: "berries",
//                       },
//                       {
//                           id: "7",
//                           name: "coconut",
//                       },
//                   ],
//               },
//               {
//                   name: "Hummus Avocado Toast",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "seven grain toast",
//                       },
//                       {
//                           id: "2",
//                           name: "avocado",
//                       },
//                       {
//                           id: "3",
//                           name: "hummus",
//                       },
//                       {
//                           id: "4",
//                           name: "tomato",
//                       },
//                       {
//                           id: "5",
//                           name: "spicy oil",
//                       },
//                       {
//                           id: "6",
//                           name: "arugala",
//                       },
//                   ],
//               },
//               {
//                   name: "Sweet Potato Avocado Toast",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "21",
//                           name: "seven grain toast",
//                       },
//                       {
//                           id: "2",
//                           name: "avocado",
//                       },
//                       {
//                           id: "3",
//                           name: "sweet potato",
//                       },
//                       {
//                           id: "4",
//                           name: "sprouts",
//                       },
//                       {
//                           id: "5",
//                           name: "poached eggs",
//                       },
//                   ],
//               },
//               {
//                   name: "Feta Avocado Toast",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "seven grain toast",
//                       },
//                       {
//                           id: "2",
//                           name: "avocado",
//                       },
//                       {
//                           id: "3",
//                           name: "feta",
//                       },
//                       {
//                           id: "4",
//                           name: "poached eggs",
//                       },
//                       {
//                           id: "5",
//                           name: "rosemary",
//                       },
//                       {
//                           id: "6",
//                           name: "olive oil",
//                       },
//                       {
//                           id: "7",
//                           name: "lemon",
//                       },
//                   ],
//               },
//               {
//                   name: "Almond Butter Toast",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "Sourdough",
//                       },
//                       {
//                           id: "2",
//                           name: "almond butter",
//                       },
//                       {
//                           id: "3",
//                           name: "banana",
//                       },
//                       {
//                           id: "4",
//                           name: "cinnamon",
//                       },
//                       {
//                           id: "5",
//                           name: "honey",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "salad",
//           item: [
//               {
//                   name: "Avocado Blue",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "avocado",
//                       },
//                       {
//                           id: "2",
//                           name: "blue cheese",
//                       },
//                       {
//                           id: "3",
//                           name: "dried apricots",
//                       },
//                       {
//                           id: "4",
//                           name: "candied pecans",
//                       },
//                       {
//                           id: "5",
//                           name: "apple",
//                       },
//                       {
//                           id: "6",
//                           name: "mixed greens",
//                       },
//                       {
//                           id: "7",
//                           name: "red wine vinaigrette",
//                       },
//                   ],
//               },
//               {
//                   name: "Pear Sage",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "chicken",
//                       },
//                       {
//                           id: "2",
//                           name: "fried sage",
//                       },
//                       {
//                           id: "3",
//                           name: "pear",
//                       },
//                       {
//                           id: "4",
//                           name: "pecorino",
//                       },
//                       {
//                           id: "5",
//                           name: "dried cherries",
//                       },
//                       {
//                           id: "6",
//                           name: "mixed greens",
//                       },
//                       {
//                           id: "7",
//                           name: "apple cider dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Beet and Apple",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "roasted beets",
//                       },
//                       {
//                           id: "2",
//                           name: "apple",
//                       },
//                       {
//                           id: "3",
//                           name: "pistachio",
//                       },
//                       {
//                           id: "4",
//                           name: "goat cheese",
//                       },
//                       {
//                           id: "5",
//                           name: "arugula",
//                       },
//                       {
//                           id: "6",
//                           name: "red wine vinaigrette",
//                       },
//                   ],
//               },
//               {
//                   name: "Caesar Lyon",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "mixed greens",
//                       },
//                       {
//                           id: "2",
//                           name: "house made croutons",
//                       },
//                       {
//                           id: "3",
//                           name: "bacon",
//                       },
//                       {
//                           id: "4",
//                           name: "boiled eggs",
//                       },
//                       {
//                           id: "5",
//                           name: "pecorino",
//                       },
//                       {
//                           id: "6",
//                           name: "candied pecans",
//                       },
//                       {
//                           id: "5",
//                           name: "mustard dressing",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "soups",
//           item: [
//               {
//                   name: "Onion Soup",
//                   price: "$7",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "onion soup",
//                       },
//                       {
//                           id: "2",
//                           name: "croutons",
//                       },
//                       {
//                           id: "3",
//                           name: "melted gruyere",
//                       },
//                   ],
//               },
//               {
//                   name: "Soup of the Day",
//                   size: [
//                       {
//                           id: "sm",
//                           price: "$5",
//                       },
//                       {
//                           id: "lg",
//                           price: "$7",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "grain bowls",
//           item: [
//               {
//                   name: "Harvest",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "roasted butternut squash and carrots",
//                       },
//                       {
//                           id: "2",
//                           name: "green beans",
//                       },
//                       {
//                           id: "3",
//                           name: "slivered almonds",
//                       },
//                       {
//                           id: "4",
//                           name: "dried cherries",
//                       },
//                       {
//                           id: "5",
//                           name: "pepitas",
//                       },
//                       {
//                           id: "6",
//                           name: "green onions",
//                       },
//                       {
//                           id: "7",
//                           name: "honey apple dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Shroom",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "roasted mushrooms",
//                       },
//                       {
//                           id: "2",
//                           name: "red cabbage",
//                       },
//                       {
//                           id: "3",
//                           name: "sweet apple",
//                       },
//                       {
//                           id: "4",
//                           name: "pecorino",
//                       },
//                       {
//                           id: "5",
//                           name: "hazelnuts",
//                       },
//                       {
//                           id: "6",
//                           name: "pumpkin dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Mediterranean",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "red onion",
//                       },
//                       {
//                           id: "2",
//                           name: "tomato",
//                       },
//                       {
//                           id: "3",
//                           name: "feta",
//                       },
//                       {
//                           id: "4",
//                           name: "olives",
//                       },
//                       {
//                           id: "5",
//                           name: "cucumber",
//                       },
//                       {
//                           id: "6",
//                           name: "harissa chickpeas",
//                       },
//                       {
//                           id: "7",
//                           name: "roasted butternut squash and carrots",
//                       },
//                       {
//                           id: "8",
//                           name: "lemon mint dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Moroccan",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "chickpeas",
//                       },
//                       {
//                           id: "2",
//                           name: "green beans",
//                       },
//                       {
//                           id: "3",
//                           name: "roasted eggplant",
//                       },
//                       {
//                           id: "4",
//                           name: "roasted squash and carrots",
//                       },
//                       {
//                           id: "5",
//                           name: "apricots",
//                       },
//                       {
//                           id: "6",
//                           name: "almonds",
//                       },
//                       {
//                           id: "7",
//                           name: "spicy tamarind dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "spicy thai",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "edamame",
//                       },
//                       {
//                           id: "2",
//                           name: "red bell pepper",
//                       },
//                       {
//                           id: "3",
//                           name: "green onion",
//                       },
//                       {
//                           id: "4",
//                           name: "carrot",
//                       },
//                       {
//                           id: "5",
//                           name: "jalapeno",
//                       },
//                       {
//                           id: "6",
//                           name: "basil",
//                       },
//                       {
//                           id: "7",
//                           name: "avocado",
//                       },
//                       {
//                           id: "8",
//                           name: "peanuts",
//                       },
//                       {
//                           id: "9",
//                           name: "currants",
//                       },
//                       {
//                           id: "10",
//                           name: "sriracha peanut dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Asian Garden",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "pea shoots",
//                       },
//                       {
//                           id: "2",
//                           name: "roasted broccoli",
//                       },
//                       {
//                           id: "3",
//                           name: "shiitake",
//                       },
//                       {
//                           id: "4",
//                           name: "beets",
//                       },
//                       {
//                           id: "5",
//                           name: "carrots",
//                       },
//                       {
//                           id: "6",
//                           name: "sesame ginger dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Nordic",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "roasted fennel",
//                       },
//                       {
//                           id: "2",
//                           name: "baby potato",
//                       },
//                       {
//                           id: "3",
//                           name: "mint",
//                       },
//                       {
//                           id: "4",
//                           name: "peas",
//                       },
//                       {
//                           id: "5",
//                           name: "caramelized onions",
//                       },
//                       {
//                           id: "6",
//                           name: "roasted beets",
//                       },
//                       {
//                           id: "7",
//                           name: "creamy dill dressing",
//                       },
//                   ],
//               },
//               {
//                   name: "Kimchi",
//                   price: "$11.5",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "sauteed spinach and pea shoots",
//                       },
//                       {
//                           id: "2",
//                           name: "carrots",
//                       },
//                       {
//                           id: "3",
//                           name: "radish",
//                       },
//                       {
//                           id: "4",
//                           name: "avocado",
//                       },
//                       {
//                           id: "5",
//                           name: "rosemary",
//                       },
//                       {
//                           id: "6",
//                           name: "kimchi",
//                       },
//                       {
//                           id: "7",
//                           name: "seaweed",
//                       },
//                       {
//                           id: "8",
//                           name: "sticky rice",
//                       },
//                       {
//                           id: "9",
//                           name: "poached egg",
//                       },
//                       {
//                           id: "10",
//                           name: "gochujang dressing",
//                       },
//                   ],
//               },
//           ],
//       },
//       {
//           type: "Add Protein",
//           item: [
//               {
//                   name: "Boiled Egg",
//                   price: "$1",
//               },
//               {
//                   name: "Tofu",
//                   price: "$2",
//               },
//               {
//                   name: "Roasted Chicken Breast",
//                   price: "$2",
//               },
//           ],
//       },
//       {
//           type: "Sandwiches",
//           item: [
//               {
//                   name: "Turkey Bacon",
//                   price: "$9",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "Turkey",
//                       },
//                       {
//                           id: "2",
//                           name: "Applewood smoked bacon",
//                       },
//                       {
//                           id: "3",
//                           name: "lettuce",
//                       },
//                       {
//                           id: "4",
//                           name: "tomato",
//                       },
//                       {
//                           id: "5",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "swiss",
//                               },
//                               {
//                                   id: "2",
//                                   name: "provolone",
//                               },
//                           ],
//                       },
//                       {
//                           id: "6",
//                           name: "mayo",
//                       },
//                   ],
//               },
//               {
//                   name: "Chicken Salad",
//                   price: "$9",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "chicken",
//                       },
//                       {
//                           id: "2",
//                           name: "grapes",
//                       },
//                       {
//                           id: "3",
//                           name: "walnuts",
//                       },
//                       {
//                           id: "4",
//                           name: "green onion",
//                       },
//                       {
//                           id: "5",
//                           name: "mayo",
//                       },
//                       {
//                           id: "6",
//                           name: "arugula",
//                       },
//                   ],
//               },
//               {
//                   name: "Caprese",
//                   price: "$9",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "fresh mozzarella",
//                       },
//                       {
//                           id: "2",
//                           name: "tomato",
//                       },
//                       {
//                           id: "3",
//                           name: "pesto",
//                       },
//                       {
//                           id: "4",
//                           name: "baguette",
//                       },
//                   ],
//               },
//               {
//                   name: "BBQ Veg/Chix Burger",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "bbq sauce",
//                       },
//                       {
//                           id: "2",
//                           name: "irish cheddar",
//                       },
//                       {
//                           id: "3",
//                           name: "pickles",
//                       },
//                       {
//                           id: "4",
//                           name: "red onion",
//                       },
//                       {
//                           id: "5",
//                           name: "arugula",
//                       },
//                       {
//                           id: "6",
//                           name: "tomato",
//                       },
//                       {
//                           id: "7",
//                           name: "vegan mayo",
//                       },
//                       {
//                           id: "8",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "veggie patty",
//                               },
//                               {
//                                   id: "2",
//                                   name: "chicken breast",
//                               },
//                           ],
//                       },
//                       {
//                           id: "9",
//                           name: "brioche",
//                       },
//                   ],
//               },
//               {
//                   name: "Shroom Veg/Chix Burger",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "wild mushrooms",
//                       },
//                       {
//                           id: "2",
//                           name: "swiss",
//                       },
//                       {
//                           id: "3",
//                           name: "tomato",
//                       },
//                       {
//                           id: "4",
//                           name: "arugula",
//                       },
//                       {
//                           id: "5",
//                           name: "vegan mayo",
//                       },
//                       {
//                           id: "6",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "veggie patty",
//                               },
//                               {
//                                   id: "2",
//                                   name: "chicken breast",
//                               },
//                           ],
//                       },
//                       {
//                           id: "7",
//                           name: "brioche",
//                       },
//                   ],
//               },
//               {
//                   name: "Avo Basil Veg/Chix Burger",
//                   price: "$10",
//                   ingrediants: [
//                       {
//                           id: "1",
//                           name: "basil dressing",
//                       },
//                       {
//                           id: "2",
//                           name: "avocado",
//                       },
//                       {
//                           id: "3",
//                           name: "tomato",
//                       },
//                       {
//                           id: "4",
//                           name: "arugula",
//                       },
//                       {
//                           id: "5",
//                           name: "vegan mayo",
//                       },
//                       {
//                           id: "6",
//                           choice: [
//                               {
//                                   id: "1",
//                                   name: "veggie patty",
//                               },
//                               {
//                                   id: "2",
//                                   name: "chicken breast",
//                               },
//                           ],
//                       },
//                       {
//                           id: "7",
//                           name: "brioche",
//                       },
//                   ],
//               },
//           ],
//       },
//   ],
// ]

const Menu = props => (
  <Layout>
    <Seo title="Menu" />
    <div
      className="absolute flex w-full ht "
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `80%`,
        opacity: `.1`,
      }}
    ></div>
    <div className="relative ">
      <div className="absolute z-10 w-full overflow-scroll ht ">
        <div className="flex w-full justify-evenly">
          <MenuDrinks />
          <MenuFood />
        </div>
      </div>
    </div>
  </Layout>
)

export default Menu

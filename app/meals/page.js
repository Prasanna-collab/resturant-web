import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import Burger from "@/assets/burger.jpg";
import Curry from "@/assets/curry.jpg";
import Dumplings from "@/assets/dumplings.jpg";
import Macncheese from "@/assets/macncheese.jpg";
import Pizza from "@/assets/pizza.jpg"

const Meals = () => {
    const meals = [
        {
            title: "Breakfast Delight",
            slug: "breakfast-delight",
            image:Burger,
            summary: "A delightful breakfast to start your day with energy.",
            creator: "Chef Anna Williams"
        },
        {
            title: "Mediterranean Salad",
            slug: "mediterranean-salad",
            image: Curry,
            summary: "A refreshing and healthy Mediterranean salad.",
            creator: "Chef Mark Thompson"
        },
        {
            title: "Grilled Chicken",
            slug: "grilled-chicken",
            image: Dumplings,
            summary: "Juicy grilled chicken with a touch of herbs.",
            creator: "Chef Susan Lee"
        },
        {
            title: "Pasta Primavera",
            slug: "pasta-primavera",
            image: Macncheese,
            summary: "A classic Italian pasta dish with fresh vegetables.",
            creator: "Chef Giovanni Rossi"
        },
        {
            title: "Chocolate Cake",
            slug: "chocolate-cake",
            image: Pizza,
            summary: "A rich and moist chocolate cake for dessert.",
            creator: "Chef Maria Gonzalez"
        }
    ];
    
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        {/* cta => call to action */}
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
};

export default Meals;
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Prasanna-collab/resturant-web.git
// git push -u origin main
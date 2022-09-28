import React, { useEffect, useState } from "react";
import { getCategories } from "../../../../logic/api";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./Categories.module.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const response = await getCategories();
    await setCategories(response);
  }

  return (
    categories.length && (
      <div className={styles.categoriesContainer}>
        <h2>Categories</h2>
        <div className={styles.mainContainer}>
          {categories.slice(0, 5).map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    )
  );
}

export default Categories;

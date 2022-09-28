import React from 'react'
import styles from './CategoryCard.module.css'

function CategoryCard({category}){
    return (
        <div className={styles.mainContainer}>
            <article
            className={styles.articleImage}
            style={{backgroundImage: `url(${category.image})`}}
            >
                <h2 className={styles.categoryName}>{category.name}</h2>
            </article>
        </div>
    )
}

export default CategoryCard
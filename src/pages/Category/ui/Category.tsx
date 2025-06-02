import { CategoryType } from '@shared/types/categoriesTypes'
import { fetchMockData } from '@shared/utils/fetchData'
import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Category.module.scss'

interface Props {
  category: CategoryType
}

const Category: FC<Props> = ({ category }) => {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData(category)
        setItems(data)
        setLoading(false)
      } catch (error) {
        setError(`${error}`)
        setLoading(false)
        console.log(error)
      }
    }
    fetchData()
  }, [category])

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки данных: {error}</div>

  return (
    <div className={styles.category}>
      <h1 className={styles.title}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className={styles.grid}>
        {items.map(item => (
          <NavLink
            key={item.id}
            to={`/${category}/${item.id}`}
            className={styles.card}
          >
            {category === 'characters' && (
              <>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
                <h2 className={styles.subtitle}>{item.name}</h2>
                <p>Вид: {item.species}</p>
              </>
            )}
            {category === 'episodes' && (
              <>
                <h2 className={styles.subtitle}>{item.name}</h2>
                <p className={styles.text}>Эпизод: {item.episode}</p>
                <p className={styles.text}>Дата выхода: {item.air_date}</p>
              </>
            )}
            {category === 'locations' && (
              <>
                <h2 className={styles.subtitle}>{item.name}</h2>
                <p className={styles.text}>Тип: {item.type}</p>
                <p className={styles.text}>
                  Измерение: {item.dimension || 'Неизвестно'}
                </p>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Category

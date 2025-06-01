import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Добро пожаловать во вселенную Rick & Morty!
      </h1>
      <p className={styles.subtitle}>
        Исследуйте мультивселенную с вашими любимыми персонажами, локациями и
        эпизодами популярного сериала "Рик и Морти".
      </p>
      {/* TODO: добавить ссылки на разные роуты */}
    </div>
  )
}

export default Home

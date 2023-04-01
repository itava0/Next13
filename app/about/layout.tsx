import styles from './styles.module.css'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <main className={styles.main}>
            {children}
        <nav>About Navbar</nav>
        </main>
      </>
    )
  }
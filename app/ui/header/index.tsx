import Link from "next/link"
import styles from "./header.module.css"

export function Header() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.link}>
                        <Link href='/garage' >
                            GARAGE
                        </Link>
                    </div>
                    <div className={styles.link}>

                        <Link href='/winners'>
                            WINNERS
                        </Link>
                    </div>
                </div>
                <h1 className={styles.title}>ASYNC RACE</h1>
            </div>
        </header>
    )
}
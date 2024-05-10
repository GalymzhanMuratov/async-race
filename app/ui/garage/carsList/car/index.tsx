import { StartBtn } from "@/app/lib/StartBtn"
import { StopBtn } from "@/app/lib/StopBtn"
import { SelectBtn } from "@/app/lib/SelectBtn"
import { CarIcon } from "./CarIcon"
import { DeleteBtn } from "@/app/lib/DeleteBtn"
import styles from './car.module.css'


type CarType = {
    id: number;
    name: string;
    color: string;
}

export function Car({ id, name, color }: CarType) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <div className={styles.wrapper}>
                    <div className={styles.btn}>
                        <SelectBtn />
                    </div>
                    <div className={styles.btn}>
                        <DeleteBtn id={id} />
                    </div>
                    <div className={styles.btn}>
                        <StartBtn />
                    </div>
                    <div className={styles.btn}>
                        <StopBtn />
                    </div>
                </div>
                <div>
                    <CarIcon color={color} />
                </div>
            </div>
            <div>
                <h3>
                    {name}
                </h3>
            </div>
        </div>
    )
}
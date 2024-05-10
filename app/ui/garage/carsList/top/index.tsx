'use client'

import { CreateBtn } from "@/app/lib/CreateBtn";
import { RaceBtn } from "@/app/lib/RaceBtn";
import { ResetBtn } from "@/app/lib/ResetBtn";
import { EditBtn } from "@/app/lib/EditBtn";
import styles from './top.module.css'
import { useRef, useState, ChangeEvent } from "react";
import { GenerateBtn } from "@/app/lib/GenerateBtn";

export function Top() {
    const nameRef = useRef<HTMLInputElement>(null)
    const colorRef = useRef<HTMLInputElement>(null)
    const [nameValue, setNameValue] = useState<string>('')
    const [colorValue, setColorValue] = useState<string>('')

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setNameValue(event.target.value)
    }
    function handleChangeColor(event: ChangeEvent<HTMLInputElement>) {
        setColorValue(event.target.value)
    }

    return (
        <div className={styles.container}>
            <span className={styles.btn}>

                <RaceBtn />
            </span>
            <div className={styles.btn}>

                <ResetBtn />
            </div>
            <div className={styles.field}>
                <input type="text" value={nameValue} ref={nameRef} onChange={handleChangeName} />
                <input type="text" value={colorValue} ref={colorRef} onChange={handleChangeColor} />
                <div className={styles.btn}>

                    <CreateBtn
                        name={nameValue}
                        color={colorValue} />
                </div>
            </div>
            <div className={styles.btn}>
                <GenerateBtn />
            </div>

        </div >
    )
}
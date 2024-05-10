'use client'

import getCars, { CarType } from "@/app/lib/getCars";
import { useEffect, useState } from "react";
import { Car } from "./car";

export function CarsList() {
    const [cars, setCars] = useState<CarType[]>([])
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCars = await getCars(page, 10);
            setCars(fetchedCars);

            const totalCount = await getCars();
            const totalPages = Math.ceil(totalCount.length / 10);
            setTotalPages(totalPages);

        };
        fetchData();
    }, [page]);


    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>

            {cars.map((car) => (
                <Car key={car.id} id={car.id} name={car.name} color={car.color} />
            ))}

            <button onClick={handlePrevPage} disabled={page === 1}>
                Previous Page
            </button>
            <button onClick={handleNextPage} disabled={page === totalPages}>
                Next Page
            </button>
        </div>
    )
}
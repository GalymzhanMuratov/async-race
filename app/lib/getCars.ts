export type CarType = {
    id: number;
    name: string;
    color: string;
}

async function getCars(page?: number, limit?: number): Promise<CarType[]> {
    let url = 'http://127.0.0.1:3000/garage';
    if (page !== undefined && limit !== undefined) {
        url += `?_page=${page}&_limit=${limit}`;
    }

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const totalCountHeader = response.headers.get('X-Total-Count');
            const totalCount = totalCountHeader ? parseInt(totalCountHeader) : undefined;

            const cars = await response.json();
            return cars;
        } else {
            console.error('Failed to get cars:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Failed to get cars:', error);
        return [];
    }
}

export default getCars
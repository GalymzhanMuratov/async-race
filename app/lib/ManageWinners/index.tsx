interface Winner {
    id: number;
    wins: number;
    time: number;
}

export async function getWinners(page?: number, limit?: number, sort?: 'id' | 'wins' | 'time', order?: 'ASC' | 'DESC'): Promise<Winner[]> {
    let url = 'http://127.0.0.1:3000/winners';
    if (page !== undefined && limit !== undefined) {
        url += `?_page=${page}&_limit=${limit}`;
        if (sort && order) {
            url += `&_sort=${sort}&_order=${order}`;
        }
    }

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const totalCountHeader = response.headers.get('X-Total-Count');
            const totalCount = totalCountHeader ? parseInt(totalCountHeader) : undefined;

            const winners = await response.json();
            return winners;
        } else {
            console.error('Failed to get winners:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Failed to get winners:', error);
        return [];
    }
}

export async function getWinnerById(id: number): Promise<Winner | null> {
    const url = `http://127.0.0.1:3000/winners/${id}`;

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const winner = await response.json();
            return winner;
        } else if (response.status === 404) {
            console.error('Winner not found');
        } else {
            console.error('Failed to get winner:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to get winner:', error);
    }

    return null;
}

export async function createWinner(id: number, wins: number, time: number): Promise<Winner | null> {
    const url = 'http://127.0.0.1:3000/winners';
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        id: id,
        wins: wins,
        time: time
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.status === 201) {
            const winner = await response.json();
            return winner;
        } else {
            console.error('Failed to create winner:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to create winner:', error);
    }

    return null;
}

export async function deleteWinner(id: number): Promise<void> {
    const url = `http://127.0.0.1:3000/winners/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            console.log('Winner deleted successfully');
        } else if (response.status === 404) {
            console.error('Winner not found');
        } else {
            console.error('Failed to delete winner:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to delete winner:', error);
    }
}

export async function editWinner(id: number, wins: number, time: number): Promise<Winner | null> {
    const url = `http://127.0.0.1:3000/winners/${id}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        wins: wins,
        time: time
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            const winner = await response.json();
            return winner;
        } else if (response.status === 404) {
            console.error('Winner not found');
        } else {
            console.error('Failed to edit winner:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to edit winner:', error);
    }

    return null;
}


async function editCar(id: number, name: string, color: string): Promise<void> {
    const url = `http://127.0.0.1:3000/garage/${id}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        name: name,
        color: color
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            const result = await response.json();
            console.log('Car edited successfully:', result);
        } else if (response.status === 404) {
            console.error('Car not found');
        } else {
            console.error('Failed to edit car:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to edit car:', error);
    }
}

export async function getCar(id: number): Promise<void> {
    const url = `/garage/${id}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (response.status === 200) {
            const result = await response.json();
            console.log('Car edited successfully:', result);
        } else if (response.status === 404) {
            console.error('Car not found');
        } else {
            console.error('Failed to edit car:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to edit car:', error);
    }
}

export function EditBtn({ id, name, color }: { id: number, name: string, color: string }) {

    function handleClick() {
        editCar(id, name, color)
    }

    return (
        <button onClick={handleClick}>
            Edit
        </button>
    )
}
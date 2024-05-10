export async function addToGarage(name: string, color: string): Promise<void> {
    const url = 'http://127.0.0.1:3000/garage';
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        name: name,
        color: color
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.status === 201) {
            const result = await response.json();
            console.log('Car added successfully:', result);
        } else {
            console.error('Failed to add car:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to add car:', error);
    }
}


export function CreateBtn({ name, color }: { name: string, color: string }) {

    function handleClick() {
        addToGarage(name, color)
    }

    return (
        <button onClick={handleClick}>
            CREATE
        </button>
    )
}
async function deleteCar(id: number): Promise<void> {
    const url = `http://127.0.0.1:3000/garage/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (response.status === 200) {
            const result = await response.json();
            console.log('Car deleted successfully:', result);
        } else if (response.status === 404) {
            console.error('Car not found');
        } else {
            console.error('Failed to delete car:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to delete car:', error);
    }
}


export function DeleteBtn({ id }: { id: number }) {

    function handleClick() {
        deleteCar(id)
    }

    return (
        <button onClick={handleClick}>
            Remove
        </button>
    )
}
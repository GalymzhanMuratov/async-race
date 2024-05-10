interface EngineResponse {
    velocity: number;
    distance: number;
}

async function controlEngine(id: number, status: 'started' | 'stopped'): Promise<EngineResponse | null> {
    const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status}`;

    try {
        const response = await fetch(url, {
            method: 'PATCH'
        });

        if (response.status === 200) {
            const result = await response.json();
            return result;
        } else if (response.status === 400) {
            console.error('Wrong parameters:', await response.text());
        } else if (response.status === 404) {
            console.error('Car with such id was not found in the garage.');
        } else {
            console.error('Failed to control engine:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to control engine:', error);
    }

    return null;
}

interface DriveResponse {
    success: boolean;
}

async function startDrive(id: number): Promise<DriveResponse | null> {
    const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;

    try {
        const response = await fetch(url, {
            method: 'PATCH'
        });

        if (response.status === 200) {
            const result = await response.json();
            return result;
        } else if (response.status === 400) {
            console.error('Wrong parameters:', await response.text());
        } else if (response.status === 404) {
            console.error('Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?');
        } else if (response.status === 429) {
            console.error('Drive already in progress. You can\'t run drive for the same car twice while it\'s not stopped.');
        } else if (response.status === 500) {
            console.error('Car has been stopped suddenly. It\'s engine was broken down.');
        } else {
            console.error('Failed to start drive:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to start drive:', error);
    }

    return null;
}

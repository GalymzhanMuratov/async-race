import { generateCar } from "../generateCar";
import { addToGarage } from "../CreateBtn";


export function GenerateBtn() {
    const handleGenerateCars = async () => {
        for (let i = 0; i < 100; i++) {
            const { name, color } = generateCar();
            await addToGarage(name, color);
        }
    }

    return (
        <div>

            <button onClick={handleGenerateCars}>Generate 100 Cars</button>
        </div>
    )
}
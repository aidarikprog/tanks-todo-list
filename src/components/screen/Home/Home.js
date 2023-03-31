// import styles from "./Home.module.css";
import { useState } from "react";
import  CarItem  from "./car-item/CarItem";
import { cars as carsData } from "./cars.data";
import CreateCar from "./create-car/CreateCar";



const Main = () => {

    const [cars, setCars] = useState(carsData)
    return (
        <div>
            <h1>Tanks catalog</h1>
            <CreateCar setCars={setCars}/>
            <div>
                {cars.length ? (
                    cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    )))
                : <p>Увы, машин нет</p>
                }
            </div>
        </div>
    )
};

export default Main;

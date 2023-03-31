import { useState } from "react";
import style from "./CreateCar.module.css";

const CreateCar = ({ setCars }) => {
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState("");
    // const [image, setImage] = useState("");

    const [data, setData] = useState({
        name: '',
        price: '',
        image: ''
    })

    const clearData ={
        name: '',
        price: '',
        image: ''
    }
    const createCar = (e) => {
        e.preventDefault();
        setCars(prev => [{id: prev.length + 1, ...data}, ...prev])


        setData(clearData)
    };

    return (
        <form className={style.form}>
            <input
                placeholder="Tank model"
                type="text"
                onChange={(e) => setData(prev =>({
                    ...prev, name: e.target.value
                }))}
                value={data.name}
            />
            <br />
            <input
                placeholder="Price"
                type="text"
                onChange={(e) => setData(prev =>({
                    ...prev, price: e.target.value
                }))}
                value={data.price}
            />
            <br />
            <input
                placeholder="Image link"
                type="url"
                onChange={(e) => setData(prev =>({
                    ...prev, image: e.target.value
                }))}
                value={data.image}
            />
            <br />
            <button className={style.btn} onClick={createCar}>
                Create
            </button>
        </form>
    );
};

export default CreateCar;

import styles from "../Home.module.css";

const CarItem = ({ car }) => {
    return (
        <div key={car.id} className={styles.item}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url( ${car.image} )`,
                }}
            />
            <div className={styles.info}>
                <h1>{car.name}</h1>
                <p>${car.price}</p>
                <button className={styles.button}>
                    <span className={styles.span}>Read more</span>
                </button>
            </div>
        </div>
    );
};

export default CarItem;

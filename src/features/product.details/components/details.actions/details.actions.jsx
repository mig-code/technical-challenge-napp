import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../core/context/cart.context';

export function DetailsActions({ mobileData }) {
    const { cartCount, handleAddToCart } = useContext(CartContext);

    const initialMobileFormState = {
        id: mobileData.id,
        colorCode: mobileData.options.colors[0].code,
        storageCode: mobileData.options.storages[0].code,
    };

    const [mobileForm, setMobileForm] = useState(initialMobileFormState);

    const handleMobileFormInput = (event) => {
        const { name, value } = event.target;
        setMobileForm({ ...mobileForm, [name]: parseInt(value, 10) });
    };

    const handleSubmitMobileForm = async (event) => {
        event.preventDefault();
        handleAddToCart(mobileForm);
    };

    return (
        <form className="actions" onSubmit={handleSubmitMobileForm}>
            <div>
                <h3>
                    Cart Count <span>{cartCount}</span>
                </h3>
            </div>
            <div className="actions__colors-box">
                <select
                    name="colorCode"
                    value={mobileForm.colorCode}
                    onChange={handleMobileFormInput}
                >
                    {mobileData.options.colors.map((item, index) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <select
                    name="storageCode"
                    value={mobileForm.storageCode}
                    onChange={handleMobileFormInput}
                >
                    {mobileData.options.storages.map((item, index) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="actions__buttons-box">
                <Link to={`/`}>
                    <button className="actions__button actions__button--back">
                        VOLVER
                    </button>
                </Link>
                <button
                    type="submit"
                    className="actions__button actions__button--add"
                >
                    AÑADIR AL CARRITO
                </button>
            </div>
        </form>
    );
}

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../core/context/cart.context';
import {
    checkIfCacheIsExpired,
    setNextCacheRefreshTime,
} from '../../../../utils/cache';

import { notifyError, notifySuccess } from '../../../../utils/toasts';

export function DetailsActions({ mobileData }) {
    const { cartCount, handleAddToCart, resetCartCount } =
        useContext(CartContext);

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
        if (checkIfCacheIsExpired()) {
            notifyError('No se ha podido añadir al carrito, reiniciando caché');
            setNextCacheRefreshTime();
            resetCartCount();

            return;
        }
        const response = await handleAddToCart(mobileForm);

        if (response) {
            notifySuccess(
                `Se ha añadido ${response.count} producto(s) al carrito`
            );
        } else {
            notifyError('Error al añadir al carrito, inténtelo de nuevo');
        }
    };

    return (
        <>
            <form className="actions" onSubmit={handleSubmitMobileForm}>
                <div>
                    <h3>
                        Cart Count <span>{cartCount}</span>
                    </h3>
                </div>
                <div className="actions__colors-box">
                    <select
                        data-testid="color-select"
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
                        data-testid="storage-select"
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
                    {mobileData.price ? (
                        <button
                            type="submit"
                            className="actions__button actions__button--add"
                        >
                            AÑADIR AL CARRITO
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="actions__button actions__button--add"
                            disabled
                        >
                            AÑADIR AL CARRITO
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}

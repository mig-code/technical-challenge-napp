import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../core/context/cart.context';
import {
    checkIfCacheIsExpired,
    setNextCacheRefreshTime,
} from '../../../../utils/cache';

import { notifyError, notifySuccess } from '../../../../utils/toasts';
import './details.actions.scss';

export function DetailsActions({ mobileData }) {
    const { handleAddToCart, resetCartCount } = useContext(CartContext);

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
                `Se ha añadido ${response.count} producto al carrito`
            );
        } else {
            notifyError('Error al añadir al carrito, inténtelo de nuevo');
        }
    };

    return (
        <form className="actions" onSubmit={handleSubmitMobileForm}>
            <div className="actions__select-container">
                <p> Personaliza tu modelo</p>
                <div>
                    <label htmlFor="colorCode"> Color</label>
                    <select
                        className="actions__select"
                        data-testid="color-select"
                        id="colorCode"
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
                </div>
                <div>
                    <label htmlFor="storageCode"> Almacenamiento</label>

                    <select
                        className="actions__select"
                        data-testid="storage-select"
                        id="storageCode"
                        name="storageCode"
                        value={mobileForm.storageCode}
                        onChange={handleMobileFormInput}
                        placeholder="Almacenamiento"
                    >
                        {mobileData.options.storages.map((item, index) => (
                            <option key={item.code} value={item.code}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="actions__buttons-container">
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
                        className="actions__button actions__button--not-available"
                        disabled
                    >
                        NO DISPONIBLE
                    </button>
                )}
                <Link to={`/`}>
                    <button className="actions__button actions__button--back">
                        VOLVER
                    </button>
                </Link>
            </div>
        </form>
    );
}

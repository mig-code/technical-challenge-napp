import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { DetailsCards } from '../components/details.card/details.card';

import { getProductById } from '../../../core/services/products.services';
import { consoleDebug } from '../../../utils/debug';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../../../core/services/local.storage';

export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});
    const mobileId = useParams().id;

    const handleError = (error) => {
        consoleDebug(error);
    };

    const handleLoadProducts = useCallback(async () => {
        let productById = getDataLocalStorage(`${mobileId}`);
        let isCacheTimeExpired = false;

        if (productById && !isCacheTimeExpired) {
            setMobileData(productById);

            return;
        }
        if (isCacheTimeExpired || !productById) {
            try {
                const products = await getProductById(mobileId);
                setMobileData(products);
                persistDataLocalStorage(`${mobileId}`, products);
            } catch (error) {
                handleError(error);
            }
        }
    }, [mobileId]);

    useEffect(() => {
        handleLoadProducts();
    }, [handleLoadProducts]);

    return (
        <div>
            <h2>Product Details Page</h2>
            {mobileData.id && (
                <DetailsCards mobileData={mobileData}></DetailsCards>
            )}
        </div>
    );
}

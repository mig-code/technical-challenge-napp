import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { DetailsCards } from '../components/details.card/details.card';

import { getProductById } from '../../../core/services/products.services';
import { consoleDebug } from '../../../tools/debug';
export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});
    const mobileId = useParams().id;
    console.log('mobileId', mobileId);

    const handleError = (error) => {
        consoleDebug(error);
    };

    const handleLoadProducts = useCallback(async () => {
        try {
            const product = await getProductById(mobileId);
            setMobileData(product);
        } catch (error) {
            handleError(error);
        }
    }, [mobileId]);

    useEffect(() => {
        console.log('ProductDetailsPage useEffect');
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

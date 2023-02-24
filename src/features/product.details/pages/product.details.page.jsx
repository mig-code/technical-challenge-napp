import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCards } from '../components/details.card/details.card';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { getProductById } from '../../../core/services/products.services';

export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});
    const mobileId = useParams().id;

    const handleLoadProducts = useCallback(async () => {
        const storageKey = mobileId;

        const data = await manageLoadDataSource(
            () => getProductById(mobileId),
            storageKey
        );
        setMobileData(data);
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

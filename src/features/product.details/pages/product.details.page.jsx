import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCard } from '../components/details.card/details.card';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { getProductById } from '../../../core/services/products.services';

export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});
    const mobileId = useParams().id;

    const handleLoadProduct = useCallback(async () => {
        const storageKey = mobileId;

        const data = await manageLoadDataSource(
            () => getProductById(mobileId),
            storageKey
        );
        console.log('data', data);
        setMobileData(data);
    }, [mobileId]);

    useEffect(() => {
        handleLoadProduct();
    }, [handleLoadProduct]);

    return (
        <div>
            <h2>Product Details Page</h2>
            {mobileData.id && (
                <DetailsCard mobileData={mobileData}></DetailsCard>
            )}
        </div>
    );
}

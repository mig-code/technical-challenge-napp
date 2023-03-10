import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCard } from '../components/details.card/details.card';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { getProductById } from '../../../core/services/products.services';
import { Loading } from '../../../core/components/loading/loading';

export default function ProductDetailsPage() {
    const mobileId = useParams().id;

    const [mobileData, setMobileData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadProduct = useCallback(async () => {
        const storageKey = mobileId;

        const data = await manageLoadDataSource(
            () => getProductById(mobileId),
            storageKey
        );

        setIsLoading(false);
        setMobileData(data);
    }, [mobileId]);

    useEffect(() => {
        handleLoadProduct();
    }, [handleLoadProduct]);

    return (
        <>
            {isLoading && <Loading></Loading>}

            {mobileData.id && !isLoading && (
                <DetailsCard mobileData={mobileData}></DetailsCard>
            )}
        </>
    );
}

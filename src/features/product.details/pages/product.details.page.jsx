import { useEffect, useState, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsCard } from '../components/details.card/details.card';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { getProductById } from '../../../core/services/products.services';
import { BreadCrumbsContext } from '../../../core/context/breadcrumb.context';

export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});
    const mobileId = useParams().id;
    console.log('rendering product details page');

    const { setBreadcrumbs } = useContext(BreadCrumbsContext);

    const handleLoadProduct = useCallback(async () => {
        const storageKey = mobileId;

        const data = await manageLoadDataSource(
            () => getProductById(mobileId),
            storageKey
        );

        setMobileData(data);
    }, [mobileId]);

    useEffect(() => {
        handleLoadProduct();
        setBreadcrumbs(['Home', 'Mobiles', mobileData.id]);
    }, [handleLoadProduct, mobileData.id, setBreadcrumbs]);

    return (
        <div>
            <h2>Product Details Page</h2>
            {mobileData.id && (
                <DetailsCard mobileData={mobileData}></DetailsCard>
            )}
        </div>
    );
}

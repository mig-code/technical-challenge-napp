import { useEffect, useState } from 'react';
import { getMobileDetailsMock } from '../../../mocks/mobiles';
import { DetailsCards } from '../components/details.card/details.card';
export default function ProductDetailsPage() {
    const [mobileData, setMobileData] = useState({});

    useEffect(() => {
        setMobileData(getMobileDetailsMock());
    }, []);

    return (
        <div>
            <h2>Product Details Page</h2>
            {mobileData.id && (
                <DetailsCards mobileData={mobileData}></DetailsCards>
            )}
        </div>
    );
}

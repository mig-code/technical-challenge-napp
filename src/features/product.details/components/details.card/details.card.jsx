import { MobileImage } from '../../../../core/components/mobile.image/mobile.image';
import { DetailsActions } from '../details.actions/details.actions';
import { DetailsInfo } from '../details.info/details.info';
import './details.card.scss';

export function DetailsCard({ mobileData }) {
   
    return (
        <div className="details-container">
            <div className="details-left">
                <div className="details-left__image">
                    <MobileImage
                        imgUrl={mobileData.imgUrl}
                        altText={mobileData.model}
                    />
                </div>
            </div>
            <div className="details-right">
                <DetailsInfo mobileData={mobileData} />
                <DetailsActions mobileData={mobileData} />
            </div>
        </div>
    );
}

import { DetailsActions } from '../details.actions/details.actions';
import { DetailsInfo } from '../details.info/details.info';

export function DetailsCard({ mobileData }) {
    return (
        <div className="details-container">
            <div className="details-left">
                <img
                    className="details-left__image"
                    src={mobileData.imgUrl}
                    alt={mobileData.model}
                />
            </div>
            <div className="details-right">
                <DetailsInfo mobileData={mobileData} />
                <DetailsActions mobileData={mobileData} />
            </div>
        </div>
    );
}

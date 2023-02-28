import './details.info.scss';
export function DetailsInfo({ mobileData }) {
    return (
        <div className="details-info__properties-box">
            <h1 className="details-info__model">{mobileData.model} </h1>
            <div className="details-info__feature">
                Marca:
                <span className="details-info--textmodifier">
                    {mobileData.brand}
                </span>
            </div>
            {mobileData.price && (
                <p className="details-info__feature">
                    PRECIO:
                    <span className="details-info--textmodifier">
                        {mobileData.price} €
                    </span>
                </p>
            )}
            {mobileData.cpu && (
                <p className="details-info__feature">
                    CPU:
                    <span className="details-info--textmodifier">
                        {mobileData.cpu}
                    </span>
                </p>
            )}

            {mobileData.ram && (
                <p className="details-info__feature">
                    RAM:
                    <span className="details-info--textmodifier">
                        {mobileData.ram}
                    </span>
                </p>
            )}

            {mobileData.os && (
                <p className="details-info__feature">
                    OS:
                    <span className="details-info--textmodifier">
                        {mobileData.os}
                    </span>
                </p>
            )}
            {mobileData.displayResolution && (
                <p className="details-info__feature">
                    Resolución:
                    <span className="details-info--textmodifier">
                        {mobileData.displayResolution}
                    </span>
                </p>
            )}
            {mobileData.battery && (
                <p className="details-info__feature">
                    Batería:
                    <span className="details-info--textmodifier">
                        {mobileData.battery}
                    </span>
                </p>
            )}
            {mobileData.primaryCamera[0] && (
                <p className="details-info__feature">
                    Cámara Principal:
                    <span className="details-info--textmodifier">
                        {mobileData.primaryCamera[0]}
                    </span>
                </p>
            )}
            {mobileData.secondaryCmera && (
                <p className="details-info__feature">
                    Cámara Secundaria:
                    <span className="details-info--textmodifier">
                        {mobileData.secondaryCmera}
                    </span>
                </p>
            )}
            {mobileData.dimention && (
                <p className="details-info__feature">
                    Tamaño:
                    <span className="details-info--textmodifier">
                        {mobileData.dimention}
                    </span>
                </p>
            )}

            {mobileData.weight && (
                <p className="details-info__feature">
                    Peso:
                    <span className="details-info--textmodifier">
                        {mobileData.weight} g
                    </span>
                </p>
            )}
        </div>
    );
}

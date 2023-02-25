export function DetailsInfo({ mobileData }) {
    return (
        <div className="details-right__properties-box">
            <h1 className="details-right__model">{mobileData.model} </h1>
            <div className="details-right__feature">
                Marca:
                <span className="details-right--textmodifier">
                    {mobileData.brand}
                </span>
            </div>

            <p className="details-right__feature">
                PRECIO:
                <span className="details-right--textmodifier">
                    {mobileData.price} €
                </span>
            </p>
            <p className="details-right__feature">
                RAM:
                <span className="details-right--textmodifier">
                    {mobileData.ram}
                </span>
            </p>
            <p className="details-right__feature">
                OS:
                <span className="details-right--textmodifier">
                    {mobileData.os} €
                </span>
            </p>
            <p className="details-right__feature">
                Resolución:
                <span className="details-right--textmodifier">
                    {mobileData.displayResolution}
                </span>
            </p>
            <p className="details-right__feature">
                Batería:
                <span className="details-right--textmodifier">
                    {mobileData.battery}
                </span>
            </p>
            <p className="details-right__feature">
                Cámara Principal:
                <span className="details-right--textmodifier">
                    {mobileData.primaryCamera[0]}
                </span>
            </p>
            <p className="details-right__feature">
                Cámara Secundaria:
                <span className="details-right--textmodifier">
                    {mobileData.secondaryCmera}
                </span>
            </p>
            <p className="details-right__feature">
                Tamaño:
                <span className="details-right--textmodifier">
                    {mobileData.dimentions}
                </span>
            </p>
            <p className="details-right__feature">
                Peso:
                <span className="details-right--textmodifier">
                    {mobileData.weight} g
                </span>
            </p>
        </div>
    );
}

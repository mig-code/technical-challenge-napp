import { Link } from 'react-router-dom';


export function DetailsActions({ mobileData }) {
    return (
        <div className="actions">
            <div className="actions__colors-box">
                {mobileData.options.colors.map((item, index) => (
                    <div key={item.code}>{item.name}</div>
                ))}
            </div>
            <div className="actions__storage-box">
                {mobileData.options.storages.map((item, index) => (
                    <div key={item.code}>{item.name}</div>
                ))}
            </div>
            <div className="actions__buttons-box">
                <Link to={`/`}>
                    <button className="actions__button actions__button--back">
                        VOLVER
                    </button>
                </Link>
                <button className="actions__button actions__button--add">
                    AÑADIR AL CARRITO
                </button>
            </div>
        </div>
    );
}

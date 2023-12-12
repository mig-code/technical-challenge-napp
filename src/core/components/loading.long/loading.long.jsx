import './loading.long.scss';

export function LoadingLong() {
    return (
        <div className="loading-long">
            <h3 className="loading-long__title">
                Si es la primera vez que visita la página puede tardar hasta 30
                segundos en cargarse
            </h3>
            <div className="spinner-long"></div>
        </div>
    );
}

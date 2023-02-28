import './loading.scss';

export function Loading() {
    console.log('RENDER: Loading');
    return (
        <div className="loading">
            <div class="spinner"></div>
        </div>
    );
}

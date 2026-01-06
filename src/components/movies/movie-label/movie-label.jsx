
function MovieLabel({ children }) {
    return (
        <div className="rounded bg-light fw-bold ps-2 pe-2 align-content-center" style={{fontSize: '12px'}}>
            {children}
        </div>
    );
}

export default MovieLabel;
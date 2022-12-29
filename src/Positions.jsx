
const Positions = ({ positions, filterPosition, activePosition }) => {
    return (
        <div className="positions-container">
            {positions.map((position, index) => {
                return (
                    <button
                        type="button"
                        className={activePosition === position ? "active-position position" : "position"}
                        key={index}
                        onClick={() => filterPosition(position)}
                    >
                        {position}
                    </button>
                );
            })}
        </div>
    );
};

export default Positions;

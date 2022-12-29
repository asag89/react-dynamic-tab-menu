
const Employee = ({ items }) => {
    return (
        <div className='employee-container'>
            {items.map(({ id, name, position, img, bio }) => (
                <article key={id} className='employee'>
                    <img src={img} alt={name} className='employee-img' />
                    <div className='employee-info'>
                        <h3 className="employee-name">{name}</h3>
                        <div className='employee-position'>{position}</div>
                        <p className='employee-bio'>{bio}</p>
                    </div>
                </article>
            )
            )}
        </div>
    );
};

export default Employee;

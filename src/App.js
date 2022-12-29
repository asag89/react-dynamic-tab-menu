import { useState } from 'react';

import data from './data';
import Positions from './Positions';
import Employee from './Employee';

const allPositions = ['All', ...new Set(data.map((employee) => employee.position))];

function App() {
  const [employees, setEmployees] = useState(data);
  // eslint-disable-next-line
  const [positions, setPositions] = useState(allPositions);
  const [activePosition, setActivePosition] = useState("All")

  const filterPosition = (position) => {
    setActivePosition(position)
    if (position === 'All') {
      setEmployees(data);
      return;
    }
    const filteredEmloyees = data.filter((employee) => employee.position === position);
    setEmployees(filteredEmloyees);
  };

  return (
    <section className="container">
      <h1>our employees</h1>
      <Positions positions={positions} filterPosition={filterPosition} activePosition={activePosition} />
      <Employee items={employees} />
    </section>
  );
}

export default App;

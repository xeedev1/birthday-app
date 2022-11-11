import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // [value, function] = useState(initial value)
  const [people, setPeople] = useState(data);
  return (<main>
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button onClick={()=>setPeople([])}>Clear The List</button>
    </section>
  </main>);
}

export default App;

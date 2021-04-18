import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  // we set the array from "data.js" as our default state value...
  const [people, setPeople] = useState(data)

  return (<main>
    <section className = "container">
      {/* let's check how many people (items) are in the array... */}
      <h3>{people.length} birthdays today</h3>
    {/* let's set up a property called "people" that is equal to our "people" state value.. */}
      <List people={people}/>
      {/* when you click on the button, we use "setPeople" to pass in an empty array, which "clears all" */}
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
  );
}

export default App;

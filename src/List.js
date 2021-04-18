import React from 'react';

// let's destructure the "people" prop from App.js...
const List = ({people}) => {
  return (
    <>

    {/* we'll map over every item ("person") in the "people" array */}
      {people.map((person) =>{
        // these are all the different properties for each item in the array...
        const {id, name, age, image} = person;
        // for each "person" in the array, we'll return an "article" containing an id, an image, a name, and age...
        return <article key = {id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years old</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;

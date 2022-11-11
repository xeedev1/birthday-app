import React from 'react';

const List = ({people}) => {
  return (
    <>
      {   // to write js code we need inside jsx we need {}
        people.map(   // loop through people array  
          person=>{  // fat arrow function
            const {id, name, age, image} = person;   // destructuring 
            return(    
              //output 
              <article key={id} className='person'>
              <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            )
          }
        )
      }
    </>
  );
};

export default List;

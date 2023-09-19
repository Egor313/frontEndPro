import React from 'react';
import ReactDOM from 'react-dom/client';

const beastsList = ['🐯', '🐻', '🐶', '🐱', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦'];
const animals = [
  { name: '🐯', isMammal: true, lastName: 'Tiger', id: 1 },
  { name: '🐻', isMammal: true, lastName: 'Bear', id: 2 },
  { name: '🐶', isMammal: true, lastName: 'Dog', id: 3 },
  { name: '🐱', isMammal: true, lastName: 'Cat', id: 4 },
  { name: '🐷', isMammal: true, lastName: 'Pig', id: 5 },
  { name: '🐸', isMammal: false, lastName: 'Frog', id: 6 },
  { name: '🐵', isMammal: true, lastName: 'Monkey', id: 7 },
]

const Animal = ({ animal }) => <div><h3>{animal.name} {animal.lastName}</h3></div>;


const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id='lastName' />

      <button type="submit">Submit</button>
    </form>
  )
}

const List = ({ animals }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => {
          <tr key={animal.id}>
            <td>{animal.name}</td>
            <td>{animal.lastName}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Form />

     <List animals={animals} />

     {animals.map(animal => <Animal key={animal.id} animal={animal} />)}
  </>
  );

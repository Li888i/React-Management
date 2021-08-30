import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '장효경',
  'birthday': '991011',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이예안',
  'birthday': '990830',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '박정우',
  'birthday': '970409',
  'gender': '남자',
  'job': '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c=>{
            return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      );
  }
}

export default App;

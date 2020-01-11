import React from 'react';

function App() {
  
  return (
    <div>
      <h1>Welcome to the Shopping Cart !
      </h1>
      });
    </div>
  );
}
class ItemsDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cart:[],
      items:[
        {name:'Item 1', price:'50'},
        {name:'Item 2', price:'100'},
        {name:'Item 3', price:'150'},
        {name:'Item 4', price:'200'},
      ]
    }
  }
}
export default App;

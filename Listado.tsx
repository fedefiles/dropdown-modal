import React from "react";
import avatar from "https://picsum.photos/200/200?random=1";

const userlist = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
        },
  {
    "id": 2,
    "name": "Ervin Howell",
    "street": "Victor Plains",
     "suite": "Suite 879",
     "city": "Wisokyburgh",
          },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
        },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
       },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
      
  }
]

const avatar="https://picsum.photos/200/200?random=1";

const Listado = () => {
  const listitems = userlist.map((item) => <li key={item.id}>
    <img src={avatar} height={50} width={50}/>
  {item.name}
  {item.street}
  {item.suite}
  {item.city}
</li>
); 
  return(
    <div>
    <h1>User Information</h1>
    
    <ul>
      
    {listitems}
    </ul>
   
    </div>
  )

};

export default Listado;
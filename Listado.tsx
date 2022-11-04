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

const logo = () => {<Image src={avatar}/>
};

const avatar="https://picsum.photos/200/200?random=1";

const Listado = () => {
  const listitems = userlist.map((item) => <li key={item.id}>
  {item.name}
  {item.street}
  {item.suite}
  {item.city}
</li>
); 
  return(
    <div>
    <h1>User Information</h1>
    <div>
    <logo/>
    </div>
    <ul>
   
    </ul>
    {listitems}
    </div>
  )

};

export default Listado;
import React from 'react'
import NameListItem from './NameListItem';

function NameList() {
    const nameList = [
      {
        "id":1,
        "name": {
            "title": "Mr",
            "first": "John",
            "last": "Nichols"
          },
          "location": {
            "city": "Michigan",
          },
          "email": "john.nichols@example.com",
          "dob": {
            "date": "1992-03-08T15:13:16.688Z",
            "age": 30
          },
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          },
       },
       {
          "id":2,
          "name": {
            "title": "Miss",
            "first": "Jennie",
            "last": "Nichols"
          },
          "location": {
            "city": "Billings",
          },
          "email": "jennie.nichols@example.com",
          "dob": {
            "date": "1992-08-08T15:13:16.688Z",
            "age": 31
          },
        "picture": {
          "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
        },
        },
        {
            "id":3,
            "name": {
                "title": "Miss",
                "first": "Ann",
                "last": "Nichols"
              },
              "location": {
                "city": "Billings",
              },
              "email": "ann.nichols@example.com",
              "dob": {
                "date": "1994-05-08T15:13:16.688Z",
                "age": 20
              },
              
              "picture": {
                "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
              },
        },
    ];
    const nameListComponent = () =>{
        return (
            nameList.map(aName =>{
                return(
                 <NameListItem
                  key={aName.id}
                  name= {`I'm ${aName.name.first} ${aName.name.last}`} //es6, //  name= {nameList.name.first +" "+ nameList.name.last} //old way 
                  city= {aName.location.city} 
                  email= {aName.email}
                  birthday= {aName.dob.date}    
                  avatar= {aName.picture.medium}
                />
                )
            })
        );
    };
    return (
    <div>
        <div className="container-fluid mt-4">
        <ul className="list-group">
            {nameListComponent()}
        </ul>
        </div>
    </div>
  );
}

export default NameList;
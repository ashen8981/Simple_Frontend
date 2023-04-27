import React from 'react'
import NameListItem from './NameListItem';
import { useState } from 'react';
import { useEffect } from 'react';

function NameList() {
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState(
        [
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
                  "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
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
          ]);
          useEffect(()=>{
            fetch("https://randomuser.me/API/").then(response=>{
                return response.json();
            }).then(responseData =>{
                setNameList((nameList)=>[...nameList, responseData.results[0]]);
            });
          },[loadData]);

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

    const addUserHandler = () =>{
        setLoadData(new Date());
    //    const newUser = {
    //     "id":new Date(),
    //     "name": {
    //         "title": "Miss",
    //         "first": "Jin",
    //         "last": "Nichols"
    //       },
    //       "location": {
    //         "city": "Billings",
    //       },
    //       "email": "ann.nichols@example.com",
    //       "dob": {
    //         "date": "1994-05-08T15:13:16.688Z",
    //         "age": 20
    //       },
          
    //       "picture": {
    //         "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
    //     },
    //   };
    //   setNameList((nameList) => nameList.concat(newUser));
      //or we can use below Spread Operator
      //setNameList((nameList) => [...nameList, newUser]); 
    };

    return (
    <div>
        <div className="container mt-4">
        <button className="btn btn-primary mb-4" onClick={addUserHandler}>Add Name</button>
        <ul className="list-group">
            {nameListComponent()}
        </ul>
        </div>
    </div>
  );
}

export default NameList;
import React from 'react'
import moment from 'moment'
import './NameListItem.css'

function NameListItem(props) {
  return (
    <div>
        <li className="list-group-item">
          <p className='redText'> <img src={props.avatar} alt={props.name}/>{props.name}</p>
          <p className=''>city: {props.city}</p>
          <p>email: {props.email}</p>
          {/* <p>birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
          <p>birthday: {moment(props.birthday).format('DD-MM-YYYY')}</p>
        </li>
    </div>
  );
}

export default NameListItem;
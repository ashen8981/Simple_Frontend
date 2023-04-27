import React from 'react'
import moment from 'moment'
import './NameListItem.css'

function NameListItem(props) {
  return (
    <li className="list-group-item shadow-sm">
        <div className="row align-items-center">
            <div className="col-2">
                <img src={props.avatar} alt={props.name} className='border rounded-circle'/>
            </div>
        <div className="col-9">
            <h4 className='redText'> {props.name}</h4>
            <p className=''>city: {props.city}</p>
            <p>email: {props.email}</p>
            {/* <p>birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
            <p>birthday: {moment(props.birthday).format('DD-MM-YYYY')}</p>
        </div>
        </div>
    </li>
  );
}

export default NameListItem;
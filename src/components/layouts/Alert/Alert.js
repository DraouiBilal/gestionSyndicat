import { connect } from 'react-redux';
import {useEffect} from "react";
import ReactJsAlert from "reactjs-alert"
import { useState } from 'react';
import { removeAlert } from '../../../redux/actions/alertAction';

const Alert = ({ alert }) =>{


 

    return (
    <div className='alert-position'>
        <ReactJsAlert
            status={alert.status}   // true or false
            type={alert.type}   // success, warning, error, info
            title={alert.title}  // title you want to display
            Close={()=> removeAlert()}
        />
    </div>
    )
}


const mapStateToProps = (state) => ({
  alert: state.alertReducer
});

export default connect(mapStateToProps)(Alert);
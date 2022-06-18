import { connect } from 'react-redux';
import {useEffect} from "react";
import ReactJsAlert from "reactjs-alert"

const Alert = ({ alerts }) =>{
    
    return (
    <div className='alert-position'>
        <ReactJsAlert
            status={true}   // true or false
            type="info"   // success, warning, error, info
            title="Hey! this is an alert."   // title you want to display
            Close={() => this.setState({ status: false })}   // callback method for hide
        />
    </div>
    )
}


const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
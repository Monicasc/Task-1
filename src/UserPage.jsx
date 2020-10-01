import { render } from '@testing-library/react';
import React from 'react';

export class Userpage extends React.Component{
    constructor(prpos){
        super(props);
    }

render(){
    return <div className="base-container"> ref={this.props.containerRef}
        <div className="header">Userpage</div>
        <div className="content">
        <div className="form">
            <div className="form-group">
                <label htmlFor="firstname">FirstName</label>
                <input type="text" name="firstname" placeholder="firstname"/>
            </div><div className="form-group">
                <label htmlFor="firstname">FirstName</label>
                <input type="text" name="firstname" placeholder="firstname"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">LastName</label>
                <input type="text" name="lastname" placeholder="lastname"/>
            </div>
            <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" placeholder="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="phonenumber">PhoneNumber</label>
                <input type="phonenumber" name="phonenumber" placeholder="phonenumber"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">ConfirmPassword</label>
                <input type="confirmpassword" name="confirmpassword" placeholder="confirmage} from './userpage'password"/>
            </div>

        <div className="footer">
          <button type="button" className="btn">
              Userpage
              </button>  
        </div>
        </div>
        </div>
    </div>
}
}
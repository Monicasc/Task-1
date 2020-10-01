import { render } from '@testing-library/react';
import React from 'react';

export class Login extends React.Component{
    constructor(prpos){
        super(props);
    }

render(){
    return <div className="base-container"> ref={this.props.containerRef}
        <div className="header">Login</div>
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
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"/>
            </div>

        <div className="footer">
          <button type="button" className="btn">
              Login
              </button>  
        </div>
        </div>
        </div>
    </div>
}
}
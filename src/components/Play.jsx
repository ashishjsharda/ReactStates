import React, { Component } from 'react';
class Play extends Component {
    state = { 
        count:1
     }
    render() { 
        return ( 
            <div>
                <h1>AJ</h1>
                <h2> Shalu</h2>
                <h3>{this.state.count}</h3>
            </div>
         );
    }
}
 
export default Play;

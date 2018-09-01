import React, {Component} from 'react'
import io from "socket.io-client";
var socket = io('http://176.34.158.245:3005');

class Livedata extends Component {

        //state = {livedata: []};

       componentDidMount() {
        //  let itse = this;
         socket.emit('live', "client socket connected");
         socket.on('live', function (data) {
           console.log(data);
          //  itse.setState({livedata:data});
         });
       };

       render() {
         return (
                   <div><p>Livedata is: {}</p>
                   <hr/>
                   </div>
                 );
             }
         };

export default Livedata;

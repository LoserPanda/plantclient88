// import React, {Component} from 'react'
// import io from "socket.io-client";
// var socket = io('http://176.34.158.245:3005');
//
// class Livedata extends Component {
//
//        state = [];
//
//        updatedata = () =>{
//          let itse = this;
//          socket.emit('live', "client socket connected");
//          socket.on('live', function (data) {
//            itse.setState({data});
//          });
//        }
//
//        render() {
//          return (
//                    <div><p>Livedata is: {this.state.livedata}</p>
//                    <hr/>
//                    </div>
//                  );
//              }
//          };
//
// export default Livedata;
//
//
//
//
//
// --------------
//
//
//
// import React, {Component} from 'react'
// import io from "socket.io-client";
//
// class Livedata extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = [];
//
//        this.socket = io('http://176.34.158.245:3005');
//        this.socket.emit('live', "client socket joujou");
//
//        this.socket.on('live', function (data) {
//          return this.setState({data});
//        });
// }
//        render() {
//          return (
//                    <div><p>Livedata is: {this.state.livedata}</p>
//                    <hr/>
//                    </div>
//                  );
//              }
//          };
//
// export default Livedata;

import React from 'react';
import MobileClients from '../components/MobileClients';
import appData from '../appData';
import { Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
import {Page_Client} from './Page_Client';

const FullPageClients = (props) => {
    const {match} = props;
    console.log('match:', match, props);
    return (<div>
            <MobileClients
                name={appData.companyName}
                clients={appData.clientsArr}
            />
        </div>)
};

const PageClients = () => (
    <div>
        <Route path="/clients" component={FullPageClients}/>
        <Route path='/clients/:clid' component={Page_Client}/>
    </div>
);

export default PageClients;

// class Page_Clients extends React.PureComponent {
          
//   render() {
//     return (
//         <div>
//       <MobileClients
//         name={appData.companyName}
//         clients={appData.clientsArr}
//       />
//       <Route path={`${this.props.match.url}/:clid`} component={Page_Client}/>
//       </div>
//     );
    
//   }

// }
    
    
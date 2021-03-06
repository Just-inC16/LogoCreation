import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                   
                    const sortedActivities = data.logos.sort((logo1, logo2) => new Date(logo2.lastUpdate).getTime()- new Date(logo1.lastUpdate).getTime());
                    return (
                        <div id="root_div">
                            <div id="center_home_screen">
                                <div className="container row">
                                    <div id="home_recent_work_container" className="col s4">
                                        <h3 id="recent_work_header">Recent Logos</h3>
                                        {sortedActivities.map((logo, index) => (
                                            <div key={index} className='home_logo_link'
                                                style={{ cursor: "pointer" }}>
                                                
                                                <Link to={`/view/${logo._id}`}><pre>{logo.text.trim()}</pre></Link>
                                            </div>
                                        ))}
                                        
                                    </div>
                                    <div className="col s8"style={{position:"relative",maxWidth: "100%",minWidth: "min-content"}}>
                                        <div id="home_banner_container">
                                             GoLogoLo
                                        </div>
                                        <div>
                                            <Link id="add_logo_button" to="/create"><pre>Create New Logo</pre></Link>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;

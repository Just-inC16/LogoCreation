import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderThickness
            padding
            margin
            lastUpdate
        }
    }
`;

const DELETE_LOGO = gql`
  mutation removeLogo($id: String!) {
    removeLogo(id:$id) {
      _id
    }
  }
`;

class ViewLogoScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    const styles = {
                        container: {
                            
                            borderStyle: "solid",
                            text: data.logo.text,
                            color: data.logo.color,
                            fontSize: data.logo.fontSize + "pt",
                            backgroundColor:data.logo.backgroundColor,
                            borderColor:data.logo.borderColor,
                            borderRadius :data.logo.borderRadius+"pt",
                            borderWidth:data.logo.borderThickness+"pt",
                            padding:data.logo.padding+"pt",
                            margin:data.logo.margin+"pt",
                            whiteSpace: "pre-wrap",
                            maxWidth: "100%",
                            minWidth: "min-content",
                            textAlign: "center"
                        }
                    }
                    return (
                        <div className="container">
                            <div className="panel panel-default"> 
                            
                                <div className="panel-heading">
                                    <div id="nav_home_button" className="panel-heading">                                      
                                        <Link to="/">GoLogoLo Home</Link>
                                    </div>
                                    <div style={{marginLeft: 0}} className="row" >
                                        <div id="logo_props">
                                            <h3 className="panel-title">
                                                View Logo
                                            </h3>
                                        
                                            <div id ="align_view_edit_logo" className="row">
                                                <div className="panel-body">
                                                    <dl>
                                                        <dt>Text:</dt>
                                                        <dd >{data.logo.text.trim()}</dd> 
                                                        <dt>Font Size:</dt>
                                                        <dd>{data.logo.fontSize}</dd>
                                                        <dt>Text Color:</dt>
                                                        <dd>{data.logo.color}</dd>
                                                        <dt>Background Color:</dt>
                                                        <dd>{data.logo.backgroundColor}</dd>
                                                        <dt>Border Color:</dt>
                                                        <dd>{data.logo.borderColor}</dd>
                                                        <dt>Border Radius:</dt>
                                                        <dd>{data.logo.borderRadius}</dd>
                                                        <dt>Border Thickness:</dt>
                                                        <dd>{data.logo.borderThickness}</dd>
                                                        <dt>Padding:</dt>
                                                        <dd>{data.logo.padding}</dd>
                                                        <dt>Marigin:</dt>
                                                        <dd>{data.logo.margin}</dd>
                                                        <dt>Last Updated:</dt>
                                                        <dd>{data.logo.lastUpdate}</dd>
                                                    </dl>
                                                    <Mutation mutation={DELETE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push('/')}>
                                                        {(removeLogo, { loading, error }) => (
                                                            <div>
                                                                <form
                                                                    onSubmit={e => {
                                                                        e.preventDefault();
                                                                        removeLogo({ variables: { id: data.logo._id } });
                                                                    }}>
                                                                    <Link to={`/edit/${data.logo._id}`} className="btn btn-success">Edit</Link>&nbsp;
                                                                <button type="submit" className="btn btn-danger">Delete</button>
                                                                </form>
                                                                {loading && <p>Loading...</p>}
                                                                {error && <p>Error :( Please try again</p>}
                                                            </div>
                                                        )}
                                                    </Mutation>
                                                </div>
                                                
                                            </div>     
                                        </div>
                                        < div className="col s8" style= {{overflow: "auto"}}>
                                            <div style={styles.container}>
                                                    
                                                {data.logo.text.trim()}
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ViewLogoScreen;
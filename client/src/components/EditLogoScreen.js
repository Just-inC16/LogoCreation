import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

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
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderThickness: Int!,
        $padding: Int!,
        $margin: Int!,
        ) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize,
                backgroundColor: $backgroundColor,
                borderColor: $borderColor,
                borderRadius: $borderRadius,
                borderThickness: $borderThickness,
                padding: $padding,
                margin: $margin,
            ) {
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {

    render() {
        let text, color, fontSize,backgroundColor, borderColor,borderRadius,borderThickness,padding,margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
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
                            position:"absolute"
                        }
                    }
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">GoLogoLo Home</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                            </h3>
                                    </div> 
                                         <div id ="align_view_logo" className="panel-heading, row">
                                            <div className="panel-body">                                            
                                                <form onSubmit={e => {
                                                    e.preventDefault();
                                                    updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value), backgroundColor: backgroundColor.value,
                                                                borderColor: borderColor.value,borderRadius: parseInt(borderRadius.value),borderThickness: parseInt(borderThickness.value),padding: parseInt(padding.value),
                                                                margin: parseInt(margin.value) } });
                                                    text.value = "";
                                                    color.value = "";
                                                    fontSize.value = "";
                                                    backgroundColor.value = "";
                                                    borderColor.value = "";
                                                    borderRadius.value = "";
                                                    borderThickness.value = "";
                                                    padding.value = "";
                                                    margin.value = "";
                                                }}>
                                            
                                                    <div className="form-group">
                                                        <label htmlFor="text">Text:</label>
                                                        <input type="text" className="form-control" name="text" ref={node => {
                                                            text = node;
                                                        }} placeholder="Text" defaultValue={data.logo.text} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="fontSize">Font Size:</label>
                                                        <input type="number"min= "0" max= "144" className="form-control" name="fontSize" ref={node => {
                                                            fontSize = node;
                                                        }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="color">Color:</label>
                                                        <input type="color" className="form-control" name="color" ref={node => {
                                                            color = node;
                                                        }} placeholder="Color" defaultValue={data.logo.color} />
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label htmlFor="backgroundColor">Background Color:</label>
                                                        <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                                            backgroundColor = node;
                                                        }} placeholder="Background Color" defaultValue={data.logo.backgroundColor} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="borderColor">Border Color:</label>
                                                        <input type="color" className="form-control" name="borderColor" ref={node => {
                                                            borderColor = node;
                                                        }} placeholder="Border Color"  defaultValue={data.logo.borderColor}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="borderRadius">Border Radius:</label>
                                                        <input type="number"min= "0" max= "144" className="form-control" name="borderRadius" ref={node => {
                                                            borderRadius = node;
                                                        }} placeholder="Border Radius" defaultValue={data.logo.borderRadius} />
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label htmlFor="borderThickness">Border Thickness:</label>
                                                        <input type="number"min= "0" max= "144" className="form-control" name="borderThickness" ref={node => {
                                                            borderThickness = node;
                                                        }} placeholder="Border Thickness" defaultValue={data.logo.borderThickness}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="padding">Padding:</label>
                                                        <input type="number" min= "0" max= "144"className="form-control" name="padding" ref={node => {
                                                            padding = node;
                                                        }} placeholder="Padding" defaultValue={data.logo.padding}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="margin">Margin:</label>
                                                        <input type="number"min= "0" max= "144" className="form-control" name="margin" ref={node => {
                                                            margin = node;
                                                        }} placeholder="Margin" defaultValue={data.logo.margin}/>
                                                    </div> 
                                                    <button type="submit" className="btn btn-success">Submit</button>
                                                </form>
                                                {loading && <p>Loading...</p>}
                                                {error && <p>Error :( Please try again</p>}
                                            </div>
                                            <div className="col s8" style= {{overflow: "auto"}}>
                                                <div style={styles.container}>
                                                        
                                                        {data.logo.text.trim()}
                                            </div>
                                            </div>
                                        </div> 
                                        
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;
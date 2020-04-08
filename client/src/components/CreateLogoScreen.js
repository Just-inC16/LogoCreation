import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor:String!
        $borderColor:String!
        $borderRadius: Int!,
        $borderThickness: Int!,
        $padding: Int!,
        $margin: Int!,
        ) {
        addLogo(
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
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            color: null,
            fontSize: null,
            backgroundColor: null,
            borderColor: null,
            borderRadius: null,
            borderThickness: null,
            padding: null,
            margin: null,
            isInvalidName: false
        }
    }
    render() {
        let text, color, fontSize,backgroundColor,borderColor,borderRadius,borderThickness,padding, margin;
        const styles = {
            container: {
                borderStyle: "solid",
                text: this.state.text,
                color: this.state.color,
                fontSize: this.state.fontSize + "pt",
                backgroundColor:this.state.backgroundColor,
                borderColor:this.state.borderColor,
                borderRadius :this.state.borderRadius+"pt",
                borderWidth:this.state.borderThickness+"pt",
                padding:this.state.padding+"pt",
                margin:this.state.margin+"pt",
                whiteSpace: "pre-wrap",
                maxWidth: "100%",
                minWidth: "min-content",
                textAlign: "center"
            }
        }
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">GoLogoLo Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                                </h3>
                            </div>
                            
                            <div id ="align_view_logo" className="row">
                                <div className="panel-body">
                                    <form onSubmit={e => {
                                        e.preventDefault();
                                        if(text.value.trim().length!=0){
                                            e.preventDefault();
                                            addLogo({ variables: { text: text.value, color: color.value,  fontSize: parseInt(fontSize.value), 
                                                backgroundColor: backgroundColor.value, borderColor: borderColor.value,borderRadius: parseInt(borderRadius.value),
                                                borderThickness: parseInt(borderThickness.value),padding: parseInt(padding.value),margin: parseInt(margin.value)} });
                                        }
                                        
                                        text.value = "";
                                        color.value = "";
                                        fontSize.value = "";
                                        backgroundColor.value="";
                                        borderColor.value="";
                                        borderRadius.value="";
                                        borderThickness.value="";
                                        padding.value="";
                                        margin.value="";

                                    }}>
                                        <div className="form-group">
                                            <label htmlFor="text">Text:</label>
                                            <input type="text" className="form-control" name="text" ref={node => {
                                                text = node;
                                            }} placeholder="Text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fontSize">Font Size:</label>
                                            <input type="number"min= "0" max= "144" className="form-control" name="fontSize" ref={node => {
                                                fontSize = node;
                                            }} placeholder="Font Size" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="color"> Text Color:</label>
                                            <input type="color" className="form-control" name="color" ref={node => {
                                                color = node;
                                            }} placeholder="Color" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="backgroundColor">Background Color:</label>
                                            <input type="color" className="form-control" name="backgroundColor" ref={node => {
                                                backgroundColor = node;
                                            }} placeholder="Background Color" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderColor">Border Color:</label>
                                            <input type="color" className="form-control" name="borderColor" ref={node => {
                                                borderColor = node;
                                            }} placeholder="Border Color" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderRadius">Border Radius:</label>
                                            <input type="number" min= "0" max= "144"className="form-control" name="borderRadius" ref={node => {
                                                borderRadius = node;
                                            }} placeholder="Border Radius" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderThickness">Border Thickness:</label>
                                            <input type="number"min= "0" max= "144" className="form-control" name="borderThickness" ref={node => {
                                                borderThickness = node;
                                            }} placeholder="Border Thickness" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="padding">Padding:</label>
                                            <input type="number"min= "0" max= "144" className="form-control" name="padding" ref={node => {
                                                padding = node;
                                            }} placeholder="Padding" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="margin">Margin:</label>
                                            <input type="number" min= "0" max= "144"className="form-control" name="margin" ref={node => {
                                                margin = node;
                                            }} placeholder="Margin" />
                                        </div>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </form>
                                    {loading && <p>Loading...</p>}
                                    {error && <p>Error :( Please try again</p>}
                                </div>
                                <div className="col s8" style= {{overflow: "auto"}}>
                                    <div style={styles.container}>
                                            {this.state.text.trim()}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;
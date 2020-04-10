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
     handleTextChange = (event) => {
        console.log("handleTextChange to " + event.target.value); 
        this.setState({ text: event.target.value},function(){
            console.log("The update text is " +this.state.text);
            
        });
        if(event.target.value<=0){
            console.log("The string entered is less than normal. ");
            this.setState({isInvalidName:true});
        }
        else
            this.setState({isInvalidName:false});
    };
    //Text Color
    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ color: event.target.value },function(){
            console.log("The update text is " +this.state.color);
            
        });
    }
    //Font Size
    handleFontSizeChange = (event) => {
        console.log("handleSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value },function(){
            console.log("The update text is " +this.state.fontSize);
            
        });
    }
    //Background Color
    handleBackGroundColorChange = (event) => {
        console.log("handleBackGroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value },function(){
            console.log("The update text is " +this.state.backgroundColor);
            
        });
    }
    //Border Color
    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value },function(){
            console.log("The update text is " +this.state.borderColor);
            
        });
    }
    //Border Radius
    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value },function(){
            console.log("The update text is " +this.state.borderRadius);
            
        });
    }
    //Border Thickness
    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChangeComplete to " + event.target.value);
        this.setState({ borderThickness: event.target.value },function(){
            console.log("The update text is " +this.state.borderThickness);
            
        });
    }
    //Padding
    handlePaddingChange = (event) => {
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value },function(){
            console.log("The update text is " +this.state.padding);
            
        });
    }
    //Margin
    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value },function(){
            console.log("The update text is " +this.state.margin);
        });
    }
    render() {
        let text, color, fontSize,backgroundColor, borderColor,borderRadius,borderThickness,padding,margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                   
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    if(this.state.text ===""&& this.state.color ==null &&this.state.fontSize ==null&&
                        this.state.backgroundColor ==null&&this.state.borderColor ==null&&this.state.borderRadius ==null&&
                        this.state.borderThickness ==null&&this.state.padding ==null&&this.state.margin ==null)
                    {
                        this.setState({
                                text: data.logo.text, 
                                color:data.logo.color,
                                fontSize:data.logo.fontSize,
                                backgroundColor:data.logo.backgroundColor,
                                borderColor:data.logo.borderColor,
                                borderRadius:data.logo.borderRadius,
                                borderThickness:data.logo.borderThickness,
                                padding:data.logo.padding,
                                margin:data.logo.margin,
                            })
                    }
                        
                    
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
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div id="nav_home_button" className="panel-heading">                                      
                                            <Link to="/">GoLogoLo Home</Link>
                                        </div>
                                        {/* Edit Logo and Properties */}
                                        <div style={{marginLeft: 0}} className="row" >
                                            <div id="logo_props">
                                                <h3 className="panel-title">
                                                    <span>Edit Logo</span>
                                                </h3>
                                                <div id ="align_view_edit_logo" className=" row">
                                                    <div className="panel-body">                                            
                                                        <form onSubmit={e => {
                                                            e.preventDefault();
                                                            if(text.value.trim().length!==0){
                                                                                                                        
                                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value), backgroundColor: backgroundColor.value,
                                                                        borderColor: borderColor.value,borderRadius: parseInt(borderRadius.value),borderThickness: parseInt(borderThickness.value),padding: parseInt(padding.value),
                                                                        margin: parseInt(margin.value) } });
                                                                
                                                            }
                                                        }}>

                                                    
                                                            <div className="form-group">
                                                                <label htmlFor="text">Text:</label>
                                                                <input type="text"  required="required" className="form-control" onChange={this.handleTextChange} name="text" ref={node => {
                                                                    text = node;
                                                                }} placeholder="Text" defaultValue={data.logo.text} />
                                                            </div>
                                                            {this.state.isInvalidName ? <span  className="red-text">**Text must be non-empty!**</span> : null}
                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="fontSize">Font Size:</label>
                                                                <input type="number"min= "2" max= "144" className="form-control"onChange={this.handleFontSizeChange} name="fontSize" ref={node => {
                                                                    fontSize = node;
                                                                }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="color">Text Color:</label>
                                                                <input type="color" className="form-control" onChange={this.handleTextColorChange}name="color" ref={node => {
                                                                    color = node;
                                                                }} placeholder="Color" defaultValue={data.logo.color} />
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="backgroundColor">Background Color:</label>
                                                                <input type="color" className="form-control" onChange={this.handleBackGroundColorChange}  name="backgroundColor" ref={node => {
                                                                    backgroundColor = node;
                                                                }} placeholder="Background Color" defaultValue={data.logo.backgroundColor} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="borderColor">Border Color:</label>
                                                                <input type="color" className="form-control" onChange={this.handleBorderColorChange} name="borderColor" ref={node => {
                                                                    borderColor = node;
                                                                }} placeholder="Border Color"  defaultValue={data.logo.borderColor}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="borderRadius">Border Radius:</label>
                                                                <input type="number"min= "0" max= "144" className="form-control" onChange={this.handleBorderRadiusChange} name="borderRadius" ref={node => {
                                                                    borderRadius = node;
                                                                }} placeholder="Border Radius" defaultValue={data.logo.borderRadius} />
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="borderThickness">Border Thickness:</label>
                                                                <input type="number"min= "0" max= "144" className="form-control" onChange={this.handleBorderThicknessChange}name="borderThickness" ref={node => {
                                                                    borderThickness = node;
                                                                }} placeholder="Border Thickness" defaultValue={data.logo.borderThickness}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="padding">Padding:</label>
                                                                <input type="number" min= "0" max= "144" className="form-control" onChange={this.handlePaddingChange}name="padding" ref={node => {
                                                                    padding = node;
                                                                }} placeholder="Padding" defaultValue={data.logo.padding}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="margin">Margin:</label>
                                                                <input type="number"min= "0" max= "144" className="form-control"onChange={this.handleMarginChange} name="margin" ref={node => {
                                                                    margin = node;
                                                                }} placeholder="Margin" defaultValue={data.logo.margin}/>
                                                            </div> 
                                                            <button type="submit" className="btn btn-success">Submit</button>
                                                        </form>
                                                        {loading && <p>Loading...</p>}
                                                        {error && <p>Error :( Please try again</p>}
                                                    </div>
                                                   
                                                </div> {/* Properties  */}
                                            </div>  {/* Edit logo  */}
                                            <div className="col s8" style= {{overflow: "auto"}}>
                                                <div style={styles.container}>  
                                                        {this.state.text.trim()}                                                       
                                                </div>
                                            </div>{/* Logo  */}
                                        </div>{/* ROW  */}
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
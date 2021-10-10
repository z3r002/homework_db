import React from "react";
import List from "../App";

class ListItem extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {showChild: false};
    }

    handleCollapse() {
        this.setState({showChild: !this.state.showChild});
    }


    render() {
        let children;
        if (this.state.showChild) {
            children = (<List list={this.props.item.children}/>);
        }

        return (
            <div  style={{marginLeft: 10}} >
                <input value="" type="checkbox"/>
                <a onClick={this.handleCollapse.bind(this)}>
                    {this.props.item.display_name}
                </a>

                {children}
            </div>
        )
    };
}
export default ListItem
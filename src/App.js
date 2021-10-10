import React from "react";
import ListItem from "./Components/ListItem";


class List extends React.Component {

    render() {
        return  this.props.list.map((item) => {
                return (<ListItem key={item.id} item={item}/>);
            }
        );
    }

}

export default List

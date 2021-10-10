import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from "./App";

const data = [
    {
        id: "0",
        get display_name() {
            return _name(this.id, this.children)
        },
        children: [
            {
                id: "0-0",
                get display_name() {
                    return _name(this.id, this.children)
                },
                children: [
                    {
                        id: "0-0-0",
                        get display_name() {
                            return _name(this.id, this.children)
                        },
                        children: []
                    },
                    {
                        id: "0-0-1",
                        get display_name() {
                            return _name(this.id, this.children)
                        },
                        children: []
                    } ,
                    {
                        id: "0-0-2",
                        get display_name() {
                            return _name(this.id, this.children)
                        },
                        children: []
                    }
                ]
            },

            {
                id: "0-1",
                get display_name() {
                    return _name(this.id, this.children)
                },
                children: []
            }
        ]
    },

    {
        id: "1",
        get display_name() {
            return _name(this.id, this.children)
        },
        children: [
            {
                id: "1-0",
                get display_name() {
                    return _name(this.id, this.children)
                },
                children: []
            }
        ]
    },

    {
        id: "2",
        get display_name() {
            return _name(this.id, this.children)
        },
        children: []
    },

    {
        id: "3",
        get display_name() {
            return _name(this.id, this.children)
        },
        children: []
    }

];

function _name(id,child) {
    if(child.length>0)
        //а надо было предохраняться
        return(id + " есть дети (жмакни по тексту)");
    else {
        return(id+ " нет детей");
    }
}

ReactDOM.render(

  <React.StrictMode>
      <List list={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

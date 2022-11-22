import React from "react";
import { useState } from "react";
import Fromtodo from './fromtodo';
import Tasklist from './Tasklist';

const Container = () => { 
    const [list, setList]= useState([]);

    const addItem = addItem =>{
        setList([...list, addItem])
    };
    return(
        <div>
            <Fromtodo addItem={addItem}/>
            <Tasklist list={list} setList={setList}/>
        </div>

    );
}

export default Container;
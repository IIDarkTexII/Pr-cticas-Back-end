import React from "react";
import { useState } from "react";

const Fromtodo = props =>{
    const [description, setDescription] = useState("");

    const {addItem} = props;

    const manejarSubmit= e =>{
        e.preventDefault();
        console.log(description)

        addItem({
            done: false,
            id: (new Date()).toString(),
            description
        });

        setDescription("");

    }

    

    return(
        <form onSubmit={manejarSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input type="text" 
                        className="text" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="button blue"
                        disabled={description ? "" : "disabled"}
                    /*
                    La línea 16 es lo mismo que hacer
                    if (Description==""){
                        disabled="disabled"
                    } else{
                        disabled=""
                    }*/
                    >
                        Agregar tarea
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Fromtodo;
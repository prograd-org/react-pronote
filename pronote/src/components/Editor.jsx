import React from 'react';
import './Editor.css'
    function Editor(props){
        const [state,setState]=React.useState('');
        function handleChange(e){
            setState(e.target.value)
        }
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea onChange={handleChange} className="input-text"/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{state}</div>
                </div>                
            </div>  
        );
    }

export default Editor;
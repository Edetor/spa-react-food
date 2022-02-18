import {useState} from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
      cb(value)
    };

    return <div className="row">
        <div className="input-field cols 12 ">
            <input type="search"
                id = 'search-field'
                   placeholder='Search'
                   onKeyDown = {handleKey}
                   onChange= {(e) => setValue(e.target.value)}
                   value = {value}
            />
            <button
                className='btn cyan lighten-2'
                style = {{
                    position: "absolute",
                    top: '0',
                    right: '0',
                }}

                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    </div>
}

export {Search}
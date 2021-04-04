import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useDispatch } from 'react-redux';
import { setTerm } from '../features/appSlice';
import { useHistory } from 'react-router';

function Search() {

    const [input, setinput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();

        if(input){
            dispatch(
                setTerm({
                    term: input,
                })
            )
        }

        setinput("");

        history.push("./search");

    }

    return (
        <div className="search">
            <div className="search__input">
                <form>
                    <SearchIcon/>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type="text"/>
                    <MicIcon/>
                    <button type="submit" onClick={submit}></button>
                </form>
            </div>
        </div>
    )
}

export default Search

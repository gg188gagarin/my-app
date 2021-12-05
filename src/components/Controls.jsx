import {Search} from './Search';
import {useState, useEffect} from "react";
import {CustomSelect} from "./CustomSelect";

const options =[
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},


];


export const Controls = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <Search search={search} setSearc={setSearch}/>
            <CustomSelect
    options={options}

            />

        </div>
    )
}
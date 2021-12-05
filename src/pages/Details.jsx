import axios from 'axios';
import {useState, useEffect} from 'react';
import {searchByCountry} from '../config';
import {useHistory, useParams} from 'react-router-dom';
import {Button} from '../components/Button';
import {Info} from '../components/Info';

import {IoArrowBack} from 'react-icons/io5';


export const Details = () => {

    const {push, goBack} = useHistory();
    const {name} = useParams();
    const [country, setCountry] = useState(null);

    console.log(country);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]));
    }, [name]);

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack/> Back
            </Button>
            {country && <Info push={push} {...country} />}
        </div>
    );
};
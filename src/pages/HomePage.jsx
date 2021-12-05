import axios from 'axios';
import {ALL_COUNTRIES} from '../config';

import {List} from '../components/List';
import {Card} from '../components/Card';
import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {Controls} from '../components/Controls';


export const HomePage = ({setCountries, countries}) => {
    const {push} = useHistory();
    const [filtredCountries, setFilteredCountries] = useState(countries);


    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((c) => c.region.includes(region));
        }

        if (search) {
            data = data.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filtredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },

                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => push(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
};
import {useState, useEffect} from 'react';
import {Search} from './Search';
import styled from 'styled-components';


import {CustomSelect} from './CustomSelect';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
  align-items: flex-start;

  flex-direction: column;
  display: flex;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({onSearch}) => {
    const [region, setRegion] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);


    }, [search, region]);

    return (
        <Wrapper><Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}/></Wrapper>
    );
};
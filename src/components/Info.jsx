import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {filterByCode} from '../config';
import axios from 'axios';


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100%;
  display: block;


`;

const InfoTitle = styled.h1`
  font-weight: var(--fw-normal);
  margin: 0;

`;

const ListGroup = styled.div`
  display: flex;
  gap: 2.01rem;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4.0001rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  gap: 1.5rem;

  align-items: flex-start;
  flex-direction: column;
  margin-top: 3rem;
  display: flex;


  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`

  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  line-height: 1.5;
  padding: 0 1rem;
  cursor: pointer;


`;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push,
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios
                .get(filterByCode(borders))
                .then(({data}) => setNeighbors(data.map((c) => c.name)));
    }, [borders]);

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>

            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain</b>{' '}
                            {topLevelDomain.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency</b>{' '}
                            {currencies.map((c) => (
                                <span key={c.code}>{c.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Top Level Domain</b>{' '}
                            {languages.map((l) => (
                                <span key={l.name}>{l.name}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map((b) => (
                                <Tag key={b} onClick={() => push(`/country/${b}`)}>
                                    {b}
                                </Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};
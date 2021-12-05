import styled from 'styled-components';

const Wrapper = styled.article`
  box-shadow: var(--shadow); 
  background-color: car(--colors-ui-base);  overflow: hidden;

  cursor: pointer;
  border-radius: var(--radii);
`;

const CardImage = styled.img`

  width: 100%;  object-position: center;
  box-shadow: var(--shadow);
  height: 150px;
  object-fit: cover;
  display: block;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  font-weight: var(--fw-bold);
  margin: 0;
  font-size: var(--fs-md);

`;

const CardList = styled.ul`
  list-style: none;  padding: 1rem 0 0;
  margin: 0;

`;

const CardListItem = styled.li`
  line-height: 1.5;


  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card =  ({ img, name, info = [], onClick }) => {

    return  (
        <Wrapper onClick= {onClick}>
            <CardImage src  ={img} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el)   => (
                        <CardListItem key={el.title}><b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList></CardBody></Wrapper>
    );
};
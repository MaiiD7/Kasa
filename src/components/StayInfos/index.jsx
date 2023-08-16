import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Tab from '../Tab';


const Infos = styled.div`
${(props) => {
  return` 
  width: 90%;
  color: ${props.theme.mainColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  `
}}
${breakpoint('md')`
  flex-direction: row;
  `}
`

const Tag = styled.div`
${(props) => {
  return`
    min-width: 75px;
    width; fit-content;
    padding: 0 10px;
    height: 22px;
    background-color: ${props.theme.mainColor};
    color: white;
    font-size: 9px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
}}
${breakpoint('md')`
    font-size: 12px;
    min-width: 100px;
    `}
`

const HostRatingContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 15px;
  ${breakpoint('md')`
  flex-direction: column;
  margin-top: 22px;
  font-size: 20px;
  `}
`

const HostPicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  ${breakpoint('md')`
    width: 64px;
    height: 64px;
  `}
`
const Rating = styled.div`
  display: flex;
  gap: 5px;
  font-size: 16px;
  align-items: center;
  ${breakpoint('md')`
    font-size: 22px;
    gap: 10px;
  `}
`

const TabContainer = styled.div`
${(props) => {
  return` 
  width: 90%;
  color: ${props.theme.mainColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 30px;
  `
}}
${breakpoint('md')`
  flex-direction: row;
  gap: 30px;
  `}
`

const StayInfos = (props) => {
  const { stay } = props;
  const hostNameArray = stay.host.name.split(" ");
  const rating = Number(stay.rating);
  const equipments = stay.equipments.join(`\n`);

  return (
    <>
      <Infos>
      <div>
        <h2 style={{marginBottom: 0, marginTop: '22px', fontWeight: 500, fontSize: '28px'}}>{stay.title}</h2>
        <p style={{marginTop: '10px', fontSize: '16px'}}>{stay.location}</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap'}}>
          {stay.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <HostRatingContainer>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'right'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'right'}}>
            <p style={{margin: 0}}>{hostNameArray[0]}</p>
            <p style={{margin: 0}}>{hostNameArray[1]}</p>
          </div>
          <HostPicture src={stay.host.picture} alt={stay.host.name}/>
        </div>
        <Rating>
          {[...Array(rating)].map((star,index) => (<FontAwesomeIcon key={index} icon={faStar} />))}
          {[...Array(5-rating)].map((star,index) => (<FontAwesomeIcon key={index+5} icon={faStar} color='rgba(227, 227, 227, 1)'/>))}
        </Rating>
      </HostRatingContainer>
    </Infos>
    <TabContainer>
      <Tab title={'Description'} description={stay.description}/>
      <Tab title={'Equipements'} description={equipments} style={{whiteSpace: 'pre-wrap'}}/>
    </TabContainer>
    </>
    
    
  )
}

export default StayInfos
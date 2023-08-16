import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TabContainer = styled.div`
  width: calc(80% + 60px);
  margin: 0 auto;
  height: fit-content;
  margin-bottom: 40px;
  ${breakpoint('sm')`
  width: 70%;
  `}
  ${breakpoint('lg')`
    width: 80%;
  `}
  ${breakpoint('xl')`
    width: 80%;
  `}
  `

const TabHeader = styled.div`
${(props) => {
  return `
  width: calc(100%-60px);
  margin: 0;
  height: 40px;
  background-color: ${props.theme.mainColor};
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 20px;
  cursor: pointer;
`
}}
`

const TabContent = styled.div`
  ${(props) => {
    return `
    width: calc(100%-60px);
    margin: 0;
    height: fit-content;
    background-color: rgba(246, 246, 246, 1);
    border-radius: 5px;
    color: ${props.theme.mainColor};
    display: flex;
    align-items: center;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 30px;
    display: ${props.openTab ? 'visible' : 'none'};
    white-space: pre-wrap;
  `
  }}
`

const Tab = (props) => {
  const { title, description } = props
  console.log(props.title);
  const [openTab, setOpenTab] = useState(false)

  return (
    <TabContainer>
      <TabHeader onClick={() => setOpenTab(!openTab)}>
        <p>{title}</p>
        {openTab ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </TabHeader>
      <TabContent openTab={openTab}>{description}</TabContent>
    </TabContainer>
    
  )
}

export default Tab;


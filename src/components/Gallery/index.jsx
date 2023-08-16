import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MainBox = styled.div`
  ${(props) => {
    return`
      position: relative;
      &:before {
        content: '';
        border-radius: 20px;
        background-image: url(${props.picture});
        background-color: ;
        filter: brightness(90%);
        background-size: cover;
        background-position: 0 65%;
        position:absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    };
    `
  }}
  height: 250px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpoint('md')`
        height: 380px;
    `}
`

const Gallery = (props) => {
  const { pictures } = props
  const [indexDisplayed, setIndexDisplayed] = useState(0)

  return (
    <MainBox picture={pictures[indexDisplayed]}>
      <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: '15px', fontSize: '5vw', color: 'white', cursor: 'pointer'}} onClick={() => setIndexDisplayed(indexDisplayed-1)}/>
      <FontAwesomeIcon icon={faChevronRight} style={{marginRight: '15px', fontSize: '5vw', color: 'white', cursor: 'pointer'}} onClick={() => setIndexDisplayed(indexDisplayed+1)}/>
    </MainBox>
  )
}

export default Gallery

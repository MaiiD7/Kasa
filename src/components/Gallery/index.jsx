import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MainBox = styled.div`
  position: relative;
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

const ImageContainer = styled.img`
  border-radius: 20px;
  background-position: 0 65%;
  position:absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`

const Counter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  font-size: 4vw;
  font-weight: 500;
  color: white;
  transform: translateX(-50%);
  ${breakpoint('sm')`
        font-size: 3vw;
    `}
  ${breakpoint('md')`
        font-size: 2.5vw;
    `}
  ${breakpoint('lg')`
        font-size: 1.5vw;
    `}
`


const Gallery = (props) => {
  const { pictures } = props
  const [indexDisplayed, setIndexDisplayed] = useState(0)

  const decreaseIndex = (index) => {
    if (index !== 0) {
      setIndexDisplayed(index-1)
    } else {
      setIndexDisplayed(pictures.length-1)
    }
  }

  const increaseIndex = (index) => {
    if (index !== pictures.length-1) {
      setIndexDisplayed(index+1)
    } else {
      setIndexDisplayed(0)
    }
  }

  return (
    <MainBox>
      <ImageContainer src={pictures[indexDisplayed]} alt="" />
      {pictures.length > 1 && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: '15px', fontSize: '5vw', color: 'white', cursor: 'pointer'}} onClick={() => decreaseIndex(indexDisplayed)}/>
          <FontAwesomeIcon icon={faChevronRight} style={{marginRight: '15px', fontSize: '5vw', color: 'white', cursor: 'pointer'}} onClick={() => increaseIndex(indexDisplayed)}/>
          <Counter>{`${indexDisplayed+1}/${pictures.length}`}</Counter>
        </>
      )}
    </MainBox>
  )
}

export default Gallery

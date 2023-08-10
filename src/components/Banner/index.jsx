import styled from 'styled-components';
import bannerBackground from '../../assets/Banner-background.png'
import breakpoint from 'styled-components-breakpoint';

const StyledBanner = styled.div`
    position: relative;
    width: 80%;
    height: 120px;
    margin: 40px auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 24px;
    &:before {
        content: '';
        border-radius: 20px;
        background-image: url(${bannerBackground});
        filter: brightness(75%);
        background-size: cover;
        background-position: 25% 50%;
        position:absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    };
    ${breakpoint('sm')`
        width: 80%;
        height: 150px;
    `}
    ${breakpoint('lg')`
        width: 90%;
        height: 180px;
    `}
    ${breakpoint('xl')`
        width: 90%;
        height: 220px;
    `}
`

const AboveText = styled.h2`
    color: white;
    font-weight: 400;
    font-size: 8vw;
    display: flex;
    flex-wrap: wrap;
    ${breakpoint('md')`
        font-size: 4vw;
    `};
`

const Banner = () => {
    return (
        <StyledBanner>
            <AboveText><span>Chez vous,&nbsp;</span> <span>partout et ailleurs</span></AboveText>
        </StyledBanner>
    )
}

export default Banner
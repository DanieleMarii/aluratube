import styled from "styled-components"
import config from "../../config.json"


const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
    width: 100vw;
    box-sizing: border-box;
    .profile{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner{
        width: 100%;
        height: 230px;
    }
    .banner img{
        /* width: 100%; */
        /* height: 100%; */
        /* object-fit: ; */
    }
`;


export default function Header(props){
    return(
        <StyledHeader>
            <img src={props.banner} alt="" className="banner" />
            <section className="user-info">
                <img className="profile" src={`https://github.com/${config.github}`} alt="" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
                
                
            </section>
           
        </StyledHeader>
    )
}

import styled from "styled-components"


const StyledFavoritos = styled.div`
    width: 100%;
    padding: 16px 32px;
    h2{
        font-size: 16px;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
    }

    .aluraTubesItens{
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
    }

    a{
        row-gap: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span{
        font-family: Helvetica;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }
    

    
`

export default function Favoritos(props) {
    const aluraTubesItens = Object.keys(props.aluraTubes)
    console.log(aluraTubesItens);
    return (
        <StyledFavoritos>
            <h2>AluraTubes Favoritos</h2>
            <div>
                {aluraTubesItens.map((aluraTubesItem) => {
                    const tubes = props.aluraTubes[aluraTubesItem]
                    console.log(tubes);
                    return (
                        <div className="aluraTubesItens">
                            {tubes.map((tube) => {
                                return (
                                    <a target={"_blank"} href={tube.link_canal}>
                                        <img src={tube.url_foto} alt="" />
                                        <span>{tube.nome_aluratube}</span>
                                    </a>
            
                                )
                            })}
                        </div>

                    )
                })}
            </div>

        </StyledFavoritos>
    )
}
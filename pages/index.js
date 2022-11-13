import config from "../config.json"
import { CSSReset } from "../src/Components/CSSReset";
import Menu from "../src/Components/Menu/Menu";
import Timeline from "../src/Components/Timeline";
import Header from "../src/Components/Header";
import Favoritos from "../src/Components/Favoritos";
import React from "react";

const valorDoFiltro = "Time"

function HomePage() {
    console.log(config.playlists);
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")
//    console.log("Search", valorDaBusca);
    return(
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                 }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header banner="https://www.xp-pen.com/Uploads/user/20190320/bf5436cdaa628ace8a14db11a30c0ed1.jpg"/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
                <Favoritos aluraTubes={config.aluratubes}/>
            </div>
        </>
    ) 
}
  
export default HomePage

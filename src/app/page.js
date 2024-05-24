import Image from "next/image";
import Navbar from "./navbar";
import home from "./home.module.css";
import "../app/chain.css"
import a from "./assests/1.png";
import b from "./assests/2.png";
import c from "./assests/3.png";

export default function Home() {
  return (
    <main>
      
      <section className={home.homeMain1}>
      <Navbar />
        <div className={home.sec1}>
          <div className={home.titleSame1}>All Chains, One Solution</div>
          <div className={home.titleSame2}>Smart-Disperse Your Crypto</div>
          <div className={home.titleSame2}>Transactions!</div>
          <div className={home.perabtndiv}>
            <div className={home.peraSame}>
              Smart-Disperse is the most widely used, extensible, secure cross-
              chain communications network. Build truly cross-chain applications
              using the Smart-Disperse Protocol.
            </div>
            <div className={home.hLaunchMain}>
              <button className={home.hLaunch}>Build ➔</button>
              <button className={home.hLaunch}>Bridge ➔</button>
            </div>
          </div>
        </div>
        <div className={home.chainTitle}>
        Supported Chains
        </div>
        <article className={home.wrapper}>
        <div className="marquee">
          <div className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
          </div>

          <div aria-hidden="true" className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", color:"white"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
          </div>
        </div>
      </article>
      </section>
      <section className={home.sec2Main}>
        <div className={home.sec2Div}>
        <div className={home.sec2Title}>
        About SmartDisperse
        </div>
        <div className={home.sec2Pera}>
        Connext is a fast and secure modular interoperability protocol, powered by intents.
        </div>
        </div>
       
        <div className={home.gridContentMain}>
      <div className={home.gridContent}>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={b} alt='none' width={100} height={100}/>
      </div>
      <h6>Fast</h6>
      <div className={home.box1Pera}>Connext’s intent layer enables lightning fast crosschain txs and aim to provide.</div>
      </div>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={c} alt='none' width={100} height={100}/>
      </div>
      <h6>Secure</h6>
      <div className={home.box1Pera}>Connext inherits its security from the canonical bridges themselves to secure data and transactions across chains.</div>
      </div>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={a} alt='none' width={100} height={100}/>
      </div>
      <h6>Developer Friendly</h6>
      <div className={home.box1Pera}>Developers consistently choose Connext for its simplicity, ease of integration, and strong developer support.</div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}

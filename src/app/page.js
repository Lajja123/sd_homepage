import Image from "next/image";
import Navbar from "./navbar";
import home from "./home.module.css";
import "../app/chain.css";
import a from "./assests/1.png";
import b from "./assests/2.png";
import c from "./assests/3.png";
import box1 from "./assests/box1.png";
import box2 from "./assests/box2.png";
import box3 from "./assests/box3.png";
import outer from "./assests/outer.png";
import middle from "./assests/middle.png";
import inner from "./assests/inner.png";
import iconLogo from "./assests/disperse.png";
import base from "./assests/base.png";
import scrolll from "./assests/scroll.png";
import eth from "./assests/ethereum.png";
import mode from "./assests/mode.png";
import optimism from "./assests/optimism.png";
import tron from "./assests/tron.webp";

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
        <div className={home.chainTitle}>Supported Chains</div>
        <article className={home.wrapper}>
          <div className="marquee">
            <div className="marqueegroup">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg"
                  width={80}
                  height={100}
                ></Image>
                Base
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg"
                  width={80}
                  height={100}
                ></Image>
                Mode
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg"
                  width={80}
                  height={100}
                ></Image>
                Scroll
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg"
                  width={80}
                  height={100}
                ></Image>
                Optimism
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg"
                  width={80}
                  height={100}
                ></Image>
                Ethereum
              </div>
            </div>

            <div aria-hidden="true" className="marqueegroup">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg"
                  width={80}
                  height={100}
                ></Image>
                Base
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg"
                  width={80}
                  height={100}
                ></Image>
                Mode
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg"
                  width={80}
                  height={100}
                ></Image>
                Scroll
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg"
                  width={80}
                  height={100}
                ></Image>
                Optimism
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Image
                  src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg"
                  width={80}
                  height={100}
                ></Image>
                Ethereum
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={home.sec2Main}>
        <div className={home.sec2Div}>
          <div className={home.sec2Title}>About SmartDisperse</div>
          <div className={home.sec2Pera}>
            Connext is a fast and secure modular interoperability protocol,
            powered by intents.
          </div>
        </div>

        <div className={home.gridContentMain}>
          <div className={home.gridContent}>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image src={b} alt="none" width={100} height={100} />
              </div>
              <h6>Fast</h6>
              <div className={home.box1Pera}>
                Connext’s intent layer enables lightning fast crosschain txs and
                aim to provide.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image src={c} alt="none" width={100} height={100} />
              </div>
              <h6>Secure</h6>
              <div className={home.box1Pera}>
                Connext inherits its security from the canonical bridges
                themselves to secure data and transactions across chains.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image src={a} alt="none" width={100} height={100} />
              </div>
              <h6>Developer Friendly</h6>
              <div className={home.box1Pera}>
                Developers consistently choose Connext for its simplicity, ease
                of integration, and strong developer support.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={home.sec3Main}>
        <div className={home.sec2Div}>
          <div className={home.sec2Title}>USECASE</div>
        </div>
        <div className={home.outerdivofusecases}>
          <div className={home.cardcontainer}>
            <div className={home.cards}>
              <div className={home.card}>
                <div className={home.cardimage}>
                  <Image src={box1} alt="none" width={90} />
                </div>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Cross-chain exchange</div>
                  <div className={home.cardcontent2}>
                    Swap any asset on any blockchain using Synapse’s token swaps
                  </div>
                </div>
              </div>
              <div className={home.card}>
                <div className={home.cardimage}>
                  <Image src={box2} alt="none" width={90} />
                </div>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>
                    Chain Interoperability
                  </div>
                  <div className={home.cardcontent2}>
                    Send token to multiple recipient on different chains
                    according to their preferences
                  </div>
                </div>
              </div>
              <div className={home.card}>
                <div className={home.cardimage}>
                  <Image src={box3} alt="none" width={90} />
                </div>{" "}
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>
                    Multi-Wallet Transfers
                  </div>
                  <div className={home.cardcontent2}>
                    Send funds to multiple wallets simultaneously, catering to
                    various use cases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className={home.sec21}>
     <div className={home.chainCircle}> 
      <div className={home.outerWrapper}>
        <Image src={outer} style={{width:"100%", height:"100%"}}alt='none'className={home.outercircle}/>
     
      </div>
      <div className={home.logoWrapper}>
      <div className={home.mainlogo}>
      <div className={home.logodiv}>
      <Image src={iconLogo} width={100} height={100} alt='none'/>
        </div>
        </div>
      </div>
      <div className={home.MidWrapper}>
      <Image src={middle} alt='none' className={home.midcircle}/>
      </div>
      <div className={home.innerWrapper}>
      <Image src={inner} alt='none' className={`${home.innercircle} `}/>
      <Image src={base} alt='none' className={`${home.base} ${home.logoinner}`}/>
      <Image src={eth} alt='none' className={`${home.eth} ${home.logoinner}`}/>
      <Image src={optimism} alt='none' className={`${home.optimism} ${home.logoinner}`}/>
      <Image src={mode} alt='none' className={`${home.mode} ${home.logoinner}`}/>
      <Image src={scrolll} alt='none' className={`${home.scrolll} ${home.logoinner}` }/>
      <Image src={tron} alt='none' className={`${home.tron} ${home.logoinner}` }/>
      </div>
    </div>

    <div className={home.flexContent}>
      <h2>Securely connect every blockchain</h2>
      <div className={home.flexpera}>
      Synapse is comprised of a cross-chain messaging framework and an economically secure method to reach consensus on the validity of cross-chain transactions, enabling developers to build truly native cross-chain apps.
      </div>
      <div>
        <button className={home.hApp}>App</button>
      </div>
    </div> 
     
    </div>
      </section>
    </main>
  );
}

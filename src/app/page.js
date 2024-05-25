import Image from "next/image";
import Navbar from "./navbar";
import home from "./home.module.css";
import "../app/chain.css";
import a from "./assests/1.png";
import {
  faLink,
  faMagnifyingGlassChart,
  faRectangleList,
  faShuffle,
  faShare,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import b from "./assests/2.png";
import c from "./assests/3.png";
import box1 from "./assests/box1.png";
import box2 from "./assests/box2.png";
import box3 from "./assests/box3.png";
import outer from "./assests/outer.png";
import middle from "./assests/middle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import inner from "./assests/inner.png";
import iconLogo from "./assests/disperse.png";
import base from "./assests/base.png";
import scrolll from "./assests/scroll.png";
import eth from "./assests/ethereum.png";
import mode from "./assests/mode.png";
import optimism from "./assests/optimism.png";
import tron from "./assests/tron.webp";
import discord from "./assests/discord.png";
import telegram from "./assests/telegram.png";
import twitter from "./assests/twitter.png";
import mirror from "./assests/mirror.svg";

export default function Home() {
  const currentYear = new Date().getFullYear(); // Get the Current Year
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
                <Image src={b} alt="none" width={100} height={100} className={home.aboutBox}/>
              </div>
              <h6>Fast</h6>
              <div className={home.box1Pera}>
                Connext’s intent layer enables lightning fast crosschain txs and
                aim to provide.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image src={c} alt="none" width={100} height={100} className={home.aboutBox} />
              </div>
              <h6>Secure</h6>
              <div className={home.box1Pera}>
                Connext inherits its security from the canonical bridges
                themselves to secure data and transactions across chains.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image src={a} alt="none" width={100} height={100} className={home.aboutBox}/>
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
                  <Image src={box1} alt="none" width={90} className={home.cardImg1}/>
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
                  <Image src={box2} alt="none" width={90} className={home.cardImg1}/>
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
                  <Image src={box3} alt="none" width={90} className={home.cardImg1}/>
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
              <Image
                src={outer}
                style={{ width: "100%", height: "100%" }}
                alt="none"
                className={home.outercircle}
              />
            </div>
            <div className={home.logoWrapper}>
              <div className={home.mainlogo}>
                <div className={home.logodiv}>
                  <Image src={iconLogo} width={100} height={100} alt="none" />
                </div>
              </div>
            </div>
            <div className={home.MidWrapper}>
              <Image src={middle} alt="none" className={home.midcircle} />
            </div>
            <div className={home.innerWrapper}>
              <Image
                src={inner}
                alt="none"
                className={`${home.innercircle} `}
              />
              <Image
                src={base}
                alt="none"
                className={`${home.base} ${home.logoinner}`}
              />
              <Image
                src={eth}
                alt="none"
                className={`${home.eth} ${home.logoinner}`}
              />
              <Image
                src={optimism}
                alt="none"
                className={`${home.optimism} ${home.logoinner}`}
              />
              <Image
                src={mode}
                alt="none"
                className={`${home.mode} ${home.logoinner}`}
              />
              <Image
                src={scrolll}
                alt="none"
                className={`${home.scrolll} ${home.logoinner}`}
              />
              <Image
                src={tron}
                alt="none"
                className={`${home.tron} ${home.logoinner}`}
              />
            </div>
          </div>

          <div className={home.flexContent}>
            <h2>Securely connect every blockchain</h2>
            <div className={home.flexpera}>
              Synapse is comprised of a cross-chain messaging framework and an
              economically secure method to reach consensus on the validity of
              cross-chain transactions, enabling developers to build truly
              native cross-chain apps.
            </div>
            <div>
              <button className={home.hApp}>App</button>
            </div>
          </div>
        </div>
      </section>
      <section className={home.sec4Main}>
        <div className={home.snakeSection}>
          <div className={home.divheadertag}>
            <h3 className={home.chains}>SmartDisperse Walkthrough</h3>
          </div>
          <div className={home.container}>
            <div className={`${home.stepWrapper} ${home.moveLine}`}>
              <article
                className={`${home.lineStep} ${home.lineStep1}`}
                style={{ left: "56%", top: "-2%" }}
              >
                <span className={home.num}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faWallet}
                    style={{ fontSize: "10px" }}
                  />
                </span>
                <p className={home.bottom}>Connect Wallet</p>
              </article>

              <article
                className={`${home.lineStep} ${home.lineStep2}`}
                style={{ right: " -9.5%", top: "17%" }}
              >
                <span className={home.num}>
                  {" "}
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <p className={home.left}>Select Chain</p>
              </article>
              <article
                className={`${home.lineStep} ${home.lineStep3}`}
                style={{ left: "68%", top: "44%" }}
              >
                <span className={home.num}>
                  {" "}
                  <FontAwesomeIcon icon={faShuffle} />
                </span>
                <p className={home.bottom}>
                  Select Transactions Type
                  <div>(same-chain/cross-chain ) </div>
                </p>
              </article>

              <article
                className={`${home.lineStep} ${home.lineStep4}`}
                style={{ left: "32%", top: "44.5%" }}
              >
                <span className={home.num}>
                  <FontAwesomeIcon icon={faRectangleList} />
                </span>
                <p className={home.top}>List your transactions</p>
              </article>

              <article
                className={`${home.lineStep} ${home.lineStep5}`}
                style={{ left: "-10.5%", top: "68%" }}
              >
                <span className={home.num}>
                  {" "}
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <p className={home.right}>
                  Verify the Recipient address & amount
                </p>
              </article>

              <article
                className={`${home.lineStep} ${home.lineStep6}`}
                style={{ left: "21%", top: "93%" }}
              >
                <span className={home.num}>
                  <FontAwesomeIcon icon={faShare} />
                </span>
                <p className={home.bottom}>Send Transactions</p>
              </article>

              <article
                className={`${home.lineStep} ${home.lineStep7}`}
                style={{ left: "53%", top: "93%" }}
              >
                <span className={home.num}>
                  {" "}
                  <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                </span>
                <p className={home.top}>View History of Transactions</p>
              </article>

              <svg
                width="100%"
                viewBox="0 0 1156 608"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={home.path}
                  d="m560.30957,10.588011c0,0 438.0947,1.90476 439.04708,1.90476c0.95238,0 144.57857,-1.02912 143.80934,137.14269c-0.76923,138.17181 -116.81095,142.30859 -131.61967,143.8923c-14.80873,1.58372 -840.41472,-0.71429 -860.5941,0.71429c-20.17938,1.42858 -148.4991,6.80903 -146.83244,147.05973c1.66666,140.2507 129.52365,152.14266 129.33243,151.27321c0.19122,0.86945 815.268425,2.687632 951.42748,0"
                  opacity="0.5"
                  strokeWidth="2"
                  stroke="#2567d1"
                  stroke-dasharray="10 10"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className={home.sec3Main}>
        <div className={home.sec5Title}>Get started now</div>
        <div className={home.outerdivofusecases}>
          <div className={home.cardcontainer}>
            <div className={home.cardGet}>
              <div className={home.cardofgetstart}>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Cross-chain</div>
                  <div className={home.cardcontent2}>
                    Unlocking Cross-Chain Transactions: Seamlessly Connect
                    Blockchain
                  </div>
                  <div className={home.buttongetstart}>
                    <div>
                      <button className={home.getstartbtn}>Start now ➔</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={home.cardofgetstart}>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Same-chain</div>
                  <div className={home.cardcontent2}>
                    Streamlining Same-Chain Transactions: Enhancing Efficiency
                    and Accessibility
                  </div>
                  <div className={home.buttongetstart}>
                    <div>
                      <button className={home.getstartbtn}>Start now ➔</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={home.cardofgetstart}>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Documentation</div>
                  <div className={home.cardcontent2}>
                    Unraveling SmartDisperse: A Comprehensive Guide to Seamless
                    Cross-Chain Communication
                  </div>
                  <div className={home.buttongetstart}>
                    <div>
                      <button className={home.getstartbtn}>Start now ➔</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <div className={home.footerouterdiv}>
      <p className={home.footercopyrightText} style={{ margin: "0px" }}>
        Copyright © {currentYear} Smart-Disperse | All rights reserved
      </p>
      <div
        className={home.footercopyright}
        style={{
          display: "flex",

          margin: "10px 30px",
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <a href="https://discord.gg/W3asyJh7mC" target="blank">
          <Image
            src={discord}
            className={home.footericon}
            alt=""
          ></Image>
        </a>
        <a href="https://t.me/smartdisperse" target="blank">
          <Image
            src={telegram}
            className={home.footericon}
            alt=""
          ></Image>
        </a>
        <a href="https://x.com/smart_disperse?s=21" target="blank">
          <Image
            src={twitter}
            className={home.footericon}
            alt=""
          ></Image>
        </a>
        <Image
          id={home}
          src={mirror}
          className={home.footericon}
          alt=""
        ></Image>
      </div>
    </div>
    </main>
  );
}

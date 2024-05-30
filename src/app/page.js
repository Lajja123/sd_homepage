"use client";
import { useState, useEffect } from "react";
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
import arbitrum from "./assests/arbitrum.png";
import m1 from "../app/assests/m1.png";
import m2 from "../app/assests/m2.png";
import m3 from "../app/assests/m3.png";
import Footer from "./footer";
import Carousel from "./carousel";
import Link from "next/link";
const OPTIONS = { loop: true, duration: 30 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main>
      <section className={home.homeMain1}>
        <Navbar />
        <div className={home.sec1}>
          <div className={home.colLeft}>
            <div className={home.titleSame1}>Cross-Chain Made Simple</div>
            <div className={home.peraSame}>
              Smart-Disperse Powerd by CCIP revolutionizes token transfers with
              advanced features for seamless cross-chain interoperability. Our
              solution reduces gas fees, saves time, and simplifies operations,
              making cross-chain token transfers as effortless as same-chain
              transfers.
            </div>
          </div>
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
                src={arbitrum}
                alt="none"
                className={`${home.tron} ${home.logoinner}`}
              />
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
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
                  className="ChainImg"
                ></Image>
                Ethereum
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={home.sec2Main}>
        <div className={home.sec2Title}>Our Milestones</div>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className={home.sec2Main}>
        <div className={home.sec2Div}>
          <div className={home.sec2Title}>About SmartDisperse</div>
          <div className={home.sec2Pera}>
            SmartDisperse leverages CCIP to enhance cross-chain interoperability
          </div>
        </div>

        <div className={home.gridContentMain}>
          <div className={home.gridContent}>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image
                  src={b}
                  alt="none"
                  width={100}
                  height={100}
                  className={home.aboutBox}
                />
              </div>
              <h6>Fast</h6>
              <div className={home.box1Pera}>
                SmartDisperse prioritizes speed by analyzing the best routes for
                your token transfers across chains.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image
                  src={c}
                  alt="none"
                  width={100}
                  height={100}
                  className={home.aboutBox}
                />
              </div>
              <h6>Secure</h6>
              <div className={home.box1Pera}>
                Built on CCIP, SmartDisperse inherits robust security features,
                ensuring support in case of any issues.
              </div>
            </div>
            <div className={home.gridBox1}>
              <div className={home.gridImg}>
                <Image
                  src={a}
                  alt="none"
                  width={100}
                  height={100}
                  className={home.aboutBox}
                />
              </div>
              <h6>User Friendly</h6>
              <div className={home.box1Pera}>
                You can store your preferred chains and tokens directly on the
                blockchain, reducing effort and ensuring tokens are sent to the
                chains you use most or that are most beneficial to you
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
                  <Image
                    src={box1}
                    alt="none"
                    width={90}
                    className={home.cardImg1}
                  />
                </div>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Dispersing prize </div>
                  <div className={home.cardcontent2}>
                    Send prize amounts to multiple addresses in their preferred
                    tokens and chains. Even if you don’t hold the specific
                    tokens, SmartDisperse will swap them for the recipients’
                    preferred tokens, saving time and gas fees, and enhancing
                    user satisfaction.
                  </div>
                </div>
              </div>
              <div className={home.card}>
                <div className={home.cardimage}>
                  <Image
                    src={box2}
                    alt="none"
                    width={90}
                    className={home.cardImg1}
                  />
                </div>
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>Sending Gas</div>
                  <div className={home.cardcontent2}>
                    If an address holds ERC-20 tokens but lacks gas,
                    SmartDisperse allows you to acquire the needed gas by
                    sending it from a different chain to your preferred chain,
                    facilitating smooth transactions.
                  </div>
                </div>
              </div>
              <div className={home.card}>
                <div className={home.cardimage}>
                  <Image
                    src={box3}
                    alt="none"
                    width={90}
                    className={home.cardImg1}
                  />
                </div>{" "}
                <div className={home.cardcontent}>
                  <div className={home.cardcontent1}>
                    Multi-Wallet Transfers
                  </div>
                  <div className={home.cardcontent2}>
                    Easily send funds to multiple wallets at once, streamlining
                    transactions for a variety of use cases.
                  </div>
                </div>
              </div>
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
                      <Link
                        href="https://smart-disperse.gitbook.io/smart-disperse/"
                        target="blank"
                      >
                        <button className={home.getstartbtn}>
                          Start now ➔
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

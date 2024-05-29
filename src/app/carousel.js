import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./carouselArrowButton";
import { DotButton, useDotButton } from "./carouselDotsButton";
import "./carousel.css";

const TWEEN_FACTOR_BASE = 0.2;

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const autoScrollInterval = useRef(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__parallax">
              <div className="embla__parallax__layer">
                <img
                  className="embla__slide__img embla__parallax__img"
                  src={
                    "https://gateway.lighthouse.storage/ipfs/QmbxDyoyVjgPfgWWVtgX6ortj6ncgvZFM1TZ2RdwUZjjBN"
                  }
                  alt="Your alt text"
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__parallax">
              <div className="embla__parallax__layer">
                <img
                  className="embla__slide__img embla__parallax__img"
                  src={
                    "https://gateway.lighthouse.storage/ipfs/QmTB477sVLaEBQBktpnEEUbTc2hKwpQ5TpwVS2Fsg8b9MJ"
                  }
                  alt="Your alt text"
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__parallax">
              <div className="embla__parallax__layer">
                <img
                  className="embla__slide__img embla__parallax__img"
                  src={
                    "https://gateway.lighthouse.storage/ipfs/Qme5TwV2QFAii4uSq3uRR5R7DagCFvPuNRfVFWacgcznff"
                  }
                  alt="Your alt text"
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__parallax">
              <div className="embla__parallax__layer">
                <img
                  className="embla__slide__img embla__parallax__img"
                  src={
                    "https://gateway.lighthouse.storage/ipfs/Qmau7smoSH7dk5mpyRfuokdWDk7ULFuHUEzbJ5MAXLgh8b"
                  }
                  alt="Your alt text"
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__parallax">
              <div className="embla__parallax__layer">
                <img
                  className="embla__slide__img embla__parallax__img"
                  src={
                    "https://gateway.lighthouse.storage/ipfs/QmY9r67DYCJjKzr76JEnw42jmRatHwCa8F6QHdDukaxdVR"
                  }
                  alt="Your alt text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

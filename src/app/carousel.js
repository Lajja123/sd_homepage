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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
                    "https://gateway.lighthouse.storage/ipfs/QmeULQXdt2Tqd3idNbkpFmzswrNDC638bXz296wTJACm7y"
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
                    "https://gateway.lighthouse.storage/ipfs/QmWkLvUMaSUK2PyW2VA45WnTLbGA6rkZmik5pePUJbi8EL"
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
                    "https://gateway.lighthouse.storage/ipfs/QmXfuEcsuDVVq7yYYBBHc7omxzX7xvzovmG6mjxcznrQfF"
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
                    "https://gateway.lighthouse.storage/ipfs/QmQ76gHK4reHqekSBzBFfoKjt7LzFsSkSc92gEPwx8Eg6p"
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
                    "https://gateway.lighthouse.storage/ipfs/QmYYqRnYbVpGRnocC2taCD11wEdg1Kkx8nUagygBxnnfbh"
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

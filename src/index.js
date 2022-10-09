import initScrollReveal from "./scripts/scrollReveal.js";
import initTiltEffect from "./scripts/tiltAnimation.js";
import initHeroText from "./scripts/heroText.js";
import { targetElements, defaultProps } from "./data/scrollRevealConfig.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initHeroText();
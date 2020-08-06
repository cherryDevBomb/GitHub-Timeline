import {languageColorMap} from "./linguistColors";

const DEFAULT_COLOR = "#aaaaaa";

export const getLanguageColor = (language) => {
  return language ? languageColorMap[language] : DEFAULT_COLOR;
}
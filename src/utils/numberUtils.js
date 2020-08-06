// format stargazers_count to match GitHub style:
// < 1000: display number
// 1000 - 99 999: round thousands to one decimal, eg. 26.6k
// > 100 000: round thousands without decimal, eg. 361k

export const getFormattedStarsCount = count => {
  if (count < 1000) {
    return count;
  } else if (count < 100000) {
    const number = parseFloat(count) / 1000;
    const formattedNumber = Math.round((number + Number.EPSILON) * 10) / 10;
    return formattedNumber + "k";
  } else {
    const number = parseFloat(count) / 1000;
    const formattedNumber = Math.round(number);
    return formattedNumber + "k";
  }
}
const { MESSAGE } = require('./Constants');
const { PRIZE_MONEY } = require('./Constants');

class Money {
  constructor(amount) {
    this.validate(amount);
    this.amount = amount;
    this.numOfLotto = amount / 1000;
  }

  /**
   * 구입 금액이 주어지면 에러를 체크합니다.
   * @param {number} amount - 구입 금액
   */
  validate(amount) {
    if (amount % 1000 !== 0) throw new Error(MESSAGE.ERROR_NO_THOUSAND_WON);
  }

  /**
   * 구입 금액에 따른 로또 개수를 반환합니다.
   * @return {number} numOfLotto - 로또 개수
   */
  getNumOfLotto() {
    return this.numOfLotto;
  }

  /**
   * 로또 성적이 주어지면 당첨금 총액을 반환합니다.
   * @param {Array<number>} matchedLotto - [3개 일치, 4개 일치, 5개 일치, 5개+보너스 일치, 6개 일치] 개수
   * @returns {number} earning - 로또 당첨을 통해 얻은 금액
   */
  getEarning(matchedLotto) {
    let earning = 0;
    matchedLotto.forEach((num, idx) => {
      earning += num * PRIZE_MONEY[idx];
    });
    return earning;
  }
}
module.exports = Money;

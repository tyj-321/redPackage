// 微信红包模拟算法
export const devideRedPackege = (totalAmount, totalPeopleNum) => {
  let MoneyArray = []
  let restAmount = totalAmount
  let restPeopleNum = totalPeopleNum
  for (let i = 0; i < totalPeopleNum - 1; i++) {
    // 根据微信描述的算法获取剩余均值的2倍
    let max = (restAmount/restPeopleNum)*2
    // 该次可抢到的金额是0.01到剩余均值2倍之间的随机值
    let money = (Math.random()*max + 0.01).toFixed(2)
    restAmount -= money
    restPeopleNum--
    MoneyArray.push(money)
  }
  restAmount = restAmount.toFixed(2)
  MoneyArray.push(restAmount)
  return MoneyArray
}
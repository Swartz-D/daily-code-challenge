function queueTime(customers, n) {
  let checkoutTills = Array(n).fill(0);
  for (let customer of customers) {
    let shortestCheckoutTime = Math.min(...checkoutTills);
    let shortestCheckoutIndex = checkoutTills.indexOf(shortestCheckoutTime);
    checkoutTills[shortestCheckoutIndex] += customer;
  }
  return Math.max(...checkoutTills);
}
module.exports = queueTime;

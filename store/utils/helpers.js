export const getDiscountedPricePercentage = (orignalPrice, discountedPrice) => {
    const discount = orignalPrice - discountedPrice
    const percenage = (discount / orignalPrice) * 100;

    return percenage.toFixed(2)
}
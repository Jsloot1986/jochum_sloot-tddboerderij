 
const getYieldForPlant = (crop) => crop.yield * 1;
const getYieldForCrop = (input) => input.numCrops * input.crop.yield;
const getTotalYield = ({crops}) => {
    let yield_total = 0;
    crops.forEach(element => {
        yield_total += element.crop.yield * element.numCrops
    })
    return yield_total
}
const getCostsForCrop = (crop) => crop.numCrops * crop.costs;
const getRevenueForCrop = (crop) => crop.numCrops * getYieldForPlant(crop) * crop.salesPrice;
const getProfitForCrop = (crop) => getRevenueForCrop(crop) - getCostsForCrop(crop);
const getTotalProfit = (crop) => getRevenueForCrop(crop) - getProfitForCrop(crop);

module.exports = {getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit};
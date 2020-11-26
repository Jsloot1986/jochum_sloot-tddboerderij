// functions 
const getYieldForPlant = (crop, environmentFactors) => getYieldFactor(crop, environmentFactors) * crop.yield;
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

// helpers
const getYieldFactor = (crop, environmentFactor)=>{
    let yieldFactor = 1;
    switch (environmentFactor.sun){
        case "low":
            yieldFactor = yieldFactor * (100 + crop.factors.sun.low) / 100;
            break;
        case "medium":
            yieldFactor = yieldFactor * (100 + crop.factors.sun.medium) / 100;
            break;
        case "high":
            yieldFactor = yieldFactor * (100 + crop.factors.sun.high) / 100;
    }
    switch (environmentFactor.wind){
        case "low":
            yieldFactor = yieldFactor * (100 + crop.factors.wind.low) / 100;
            break;
        case "medium":
            yieldFactor = yieldFactor * (100 + crop.factors.wind.medium) / 100;
            break;
        case "high":
            yieldFactor = yieldFactor * (100 + crop.factors.wind.high) / 100;
    }
    switch (environmentFactor.underground){
        case "clay":
            yieldFactor = yieldFactor * (100 + crop.factors.underground.clay) / 100;
            break;
        case "sand":
            yieldFactor = yieldFactor * (100 + crop.factors.underground.sand) / 100;
            break;
        case "garden":
            yieldFactor = yieldFactor * (100 + crop.factors.underground.garden) / 100;
    }
    return yieldFactor;
}

module.exports = {getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit};
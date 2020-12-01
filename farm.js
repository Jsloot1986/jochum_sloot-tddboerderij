// helpers
const getPercentageFactor = (crop, environmentFactor) =>{
    let farmerFactor;
    switch (environmentFactor.sun){
        case "low":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.low);
            break;
        case "medium":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.medium);
            break;
        case "high":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.high);
    };
    switch (environmentFactor.wind){
        case "low":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.wind.low);
            break;
        case "medium":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.wind.medium);
            break;
        case "high":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.wind.high);
    };
    switch (environmentFactor.underground){
        case "clay":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.underground.clay);
            break;
        case "leem":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.underground.leem);
            break;
        case "löss":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.underground.löss);
    };
    return farmerFactor;
};


// functions 
const getYieldForPlant = (crop, environmentFactors) => getPercentageFactor(crop, environmentFactors);
const getYieldForCrop = (crop, input, environmentFactors) => input.numCrops * getYieldForPlant(crop, environmentFactors);

const getTotalYield = ({crops}) => {
    let yield_total = 0;
    crops.forEach(element => {
        yield_total += element.crop.yield * element.numCrops * getYieldForPlant(element.crop, element.environmentFactors);
    })
    return yield_total
}
const getCostsForCrop = (crop) => crop.numCrops * crop.costs;
const getRevenueForCrop = (crop, environmentFactors) => crop.numCrops * getYieldForPlant(crop, environmentFactors) * crop.salesPrice;
const getProfitForCrop = (crop, environmentFactors) => getRevenueForCrop(crop, environmentFactors) - getCostsForCrop(crop, environmentFactors);
const getTotalProfit = (crop, environmentFactors) => getRevenueForCrop(crop, environmentFactors) - getProfitForCrop(crop, environmentFactors);


module.exports = {
    getPercentageFactor,
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop, 
    getProfitForCrop, 
    getTotalProfit};
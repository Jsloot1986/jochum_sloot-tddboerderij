// helpers
const getPercentageFactor = (crop, envirnonmentFactors) =>{
    let farmerFactor;
    switch (envirnonmentFactors.sun){
        case "low":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.low);
            break;
        case "medium":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.medium);
            break;
        case "high":
            farmerFactor = (crop.yield/100) * (100 + crop.factors.sun.high);
    }
}


// functions 
const getYieldForPlant = (corn, envirnonmentFactors) => getPercentageFactor(corn, envirnonmentFactors) * corn.yield;
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


module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop, 
    getProfitForCrop, 
    getTotalProfit};
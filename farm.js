// helpers

const getYieldFactor = (crop, environmentFactor)=>{
    let yieldFactor = 1;
    switch (environmentfactor.sun){
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

// functions 
const getYieldForPlant = (crop, environmentFactors) => getYieldFactor(crop, environmentFactors) * crop.yield ;
const getYieldForCrop = (input, environmentFactors) => input.numCrops * input.crop.yield * getYieldFactor(input, environmentFactors);

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


//vegetables to sale

const corn = {
    name: "corn",
    numberOfPlantsInCrop: 30,
    costs: 2, 
    yield: 3,
    salesPrice: 3,
    factors:{
        sun:{
            low: -50,
            medium: 0,
            high: 50,
        },
        wind:{
            low: 60,
            medium: 0,
            high: -50,
        },
        underground:{
            clay: 20,
            sand: -10,
            garden: 50,
        },
    },
};
let input = {
crop: corn,
numCrops: 10,
}
let environmentFactors = {
sun: "low",
wind: "medium",
underground: "clay"
};

console.log('The profit for the ${input.crop.name} is in euro' + Math.floor(getTotalProfit(input, environmentFactors)));

const pumpkin = {
    name: "pumpkin",
    numberOfPlantsInCrop: 50,
    costs: 2,
    yield: 2,
    salesPrice: 4,
    factors:{
        sun:{
            low: -50,
            medium: 50,
            high: 100,
        },
        wind:{
            low: 50,
            medium: -20,
            high: -50,
        },
        underground:{
            clay: 50,
            sand: -50,
            garden: 10,
        },
    },
};
input = {
crop: pumpkin,
numCrops: 25,
}

environmentFactors = {
sun: "high",
wind: "medium",
underground: "garden"
};

console.log('The profit for the ${input.crop.name} is in euro' + Math.floor(getTotalProfit(input, environmentFactors)));

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop, 
    getProfitForCrop, 
    getTotalProfit};
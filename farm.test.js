const { getPercentageFactor,
        getYieldForPlant, 
        getYieldForCrop, 
        getTotalYield, 
        getCostsForCrop, 
        getRevenueForCrop, 
        getProfitForCrop, 
        getTotalProfit } = require("./farm");


describe("getPercentageFactor", () =>{
    const corn = {
        name: "corn",
        costs: 2,
        yield: 30,
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
                clay: -20,
                leem: 60,
                löss: 50,
            },
        },
    };
    const input = {
        crop: corn,
        numCrops: 10,
    }
   
const environmentFactors = {
    sun: "low",
    wind: "low",
    underground: "clay",
};
    test("Get percentage factor for plant yield", () => {
        expect(getPercentageFactor(corn, environmentFactors)).toBe(24);
    })
});  
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        costs: 2,
        yield: 30,
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
                clay: -20,
                leem: 60,
                löss: 50,
            },
        },
    };
    const input = {
        crop: corn,
        numCrops: 10,
    }
   
const environmentFactors = {
    sun: "low",
    wind: "low",
    underground: "clay",
};
    test("Get yield for plant with environmentfactors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(24);
    })
});

describe("getYieldForCrop", () => {
    test("Get yield for crop with environmentFactors", () => {
        const corn = {
            name: "corn",
            yield: 30,
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
                    clay: -20,
                    leem: 60,
                    löss: 50,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        }
    const environmentFactors = {
        sun: "low",
        wind: "low",
        underground: "clay",
    };
        
        expect(getYieldForCrop(corn, input, environmentFactors)).toBe(240);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () =>{
    test("Calculate the costs for a crop", () =>{
        const crop = {
            name: "corn",
            yield: 3,
            numCrops: 5,
            costs: 2
        };
        expect(getCostsForCrop(crop)).toBe(10);
    });
});
describe("getRevenueForCrop", () =>{
    test("Calculate the revenue for a crop", () =>{
        const crop = {
            name: "corn",
            yield: 3,
            numCrops: 5,
            costs: 2,
            salesPrice: 4
        };
        expect(getRevenueForCrop(crop)).toBe(60);
    });
});
describe("getProfitForCrop", () =>{
    test("Calculate the profit for a crop", () =>{
        const crop = {
            name: "corn",
            yield: 3,
            numCrops: 5,
            costs: 2,
            salesPrice: 4
        };
        expect(getProfitForCrop(crop)).toBe(50);
    });
});

describe("getTotalProfit", () =>{
    test("Calculate the total profit for a crop", () =>{
        const crop = {
            name: "corn",
            yield: 3,
            numCrops: 5,
            costs: 2,
            salesPrice: 4
        };
        expect(getTotalProfit(crop)).toBe(10);
    });
});

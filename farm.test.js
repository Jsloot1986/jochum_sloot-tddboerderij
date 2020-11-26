const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
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
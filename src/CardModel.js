export default class CardModel {
    constructor(name, probability, winPercentage, lossPercentage, ecologyRating, socialRating, governanceRating, priceBought, value) {
        this.name = name;
        this.probability = probability;
        this.winPercentage = winPercentage;
        this.lossPercentage = lossPercentage;
        this.ecologyRating = ecologyRating;
        this.socialRating = socialRating;
        this.governanceRating = governanceRating;
        this.priceBought = priceBought;
        this.value = value;
    }
}

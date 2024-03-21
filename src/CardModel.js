export default class CardModel {
    constructor(name, probability, winPercentage, lossPercentage, ecologyRating, socialRating, governanceRating) {
        this.name = name;
        this.probability = probability;
        this.winPercentage = winPercentage;
        this.lossPercentage = lossPercentage;
        this.ecologyRating = ecologyRating;
        this.socialRating = socialRating;
        this.governanceRating = governanceRating;
    }
}

import CardModel from './CardModel';

const cards = [];

for (let i = 1; i <= 30; i++) {
    const name = `Fund ${i}`;
    const probability = Math.round(Math.random() * 100) / 100;
    const winPercentage = Math.round(Math.random() * 100) / 100;
    const lossPercentage = Math.round(Math.random() * 100) / 100;
    const ecologyRating = Math.round(Math.random() * 100) / 100;
    const socialRating = Math.round(Math.random() * 100) / 100;
    const governanceRating = Math.round(Math.random() * 100) / 100;

    const card = new CardModel(
        name,
        probability,
        winPercentage,
        lossPercentage,
        ecologyRating,
        socialRating,
        governanceRating
    );

    cards.push(card);
}
export default cards;
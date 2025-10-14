export function formatChanceValue(chance: number) {
    const chancePercent = chance * 100;
    const fraction = chancePercent % 1;
    return fraction < 0.0001 || fraction > 0.9999 ? Math.round(chancePercent).toString() : chancePercent.toFixed(2);
}

export function exchangeAmmo(inputPrice: number, outputPrice: number, amount: number) {
    const exchanged = Math.floor(amount * (inputPrice / outputPrice));
    return {
        exchanged,
        remaining: amount - exchanged * (outputPrice / inputPrice)
    };
}

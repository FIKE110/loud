
export function usdToNaira(usdAmount: number): number {
    const exchangeRate = Number(process.env.USD_TO_NGN_EXCHANGE_RATE) || 1450;
    const amount=usdAmount * exchangeRate
    return amount;
}

export function nairaToUsd(nairaAmount: number): number {
    const exchangeRate = Number(process.env.USD_TO_NGN_EXCHANGE_RATE) || 1450;
    return nairaAmount / exchangeRate;
}
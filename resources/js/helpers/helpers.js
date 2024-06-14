export const formatCurrency = (n) => {
    const currencyFormat = Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    n = n ? n : 0 // number NaN = 0
    return  currencyFormat.format(parseFloat(n)) + " €"
}

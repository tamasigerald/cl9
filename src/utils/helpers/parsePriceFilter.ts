const parsePriceFilters = (minFilter: number | undefined, maxFilter: number | undefined) => {
    const priceString = 'Pris';
    const filterString = 'Filtrera';

    if (minFilter && maxFilter) return `${priceString} ${minFilter} - ${maxFilter} kr`;
    if (minFilter) return `${priceString} > ${minFilter} kr`;
    if (maxFilter) return `${priceString} < ${maxFilter} kr`;
    if (!minFilter && !maxFilter) return `${filterString}`;
};

export default parsePriceFilters;

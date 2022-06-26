export const scrollContactWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -240;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}
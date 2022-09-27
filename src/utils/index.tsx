export const cn = (...args: string[]) => args.join(' ');

export const parseDate = (date: Date) => {
    return date.toLocaleString('en-us', {year: "numeric", month: "short", day: "numeric"})
}

export const ellipsisText = (text: String, limit: number) => {
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    } else return text;
}

export const getWebURL = (text: String) => {
    return text.toLowerCase().replace(/ /g, "-");
}
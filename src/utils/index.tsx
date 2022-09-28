export const cn = (...args: string[]) => args.join(' ');

export const parseDateWithYear = (date: Date) => {
    return date.toLocaleString('en-us', {year: "numeric", month: "short", day: "numeric"})
}
export const parseDate = (date: Date) => {
    return date.toLocaleString('en-us', {month: "short", day: "numeric"})
}

export const ellipsisText = (text: String, limit: number) => {
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    } else return text;
}

export const openWebLink = (link: string) => {
    window.open(link, "_blank")
}

export const getWebURL = (text: String) => {
    return text.toLowerCase().replace(/ /g, "-");
}

export const getWebTitle = (text: String) => {
    const title = text.replace(/-/g, " ").split(" ");

    for (let i = 0; i < title.length; i++) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);

    }

    return title.join(" ");
}
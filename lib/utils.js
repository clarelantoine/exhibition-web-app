export const convertDate  = (date, delimiter) => {
    const dateSplitted = date.split(delimiter)
    return [dateSplitted[1], dateSplitted[0], dateSplitted[2]].join(delimiter)
}
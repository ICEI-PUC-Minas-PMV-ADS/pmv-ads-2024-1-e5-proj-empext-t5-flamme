import { IText } from "../../utils/interfaces"

export const Title = ( { text, classes } : IText) => {
    return <h1 className={`font-semibold text-lg ${classes}`}>{text}</h1>
}
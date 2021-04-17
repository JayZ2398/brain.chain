import dayjs, { Dayjs, } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export const dateStringToDayjs = (dateStr: string | undefined): Dayjs | undefined => {
    // check if defined since dayjs(undefined) == dayjs()
    return dateStr ? dayjs(dateStr) : undefined
}

export const dayjsToDateString = (dayjs: Dayjs | null) => {
    return dayjs?.toISOString()
}

export type DateDisplayFormat = 
      "Date"
    | "DateWithYear"
    | "LongDateWithYear"
    | "DayWithDate"
    | "DayWithLongDate"
    | "DateWithTime"

const todayStr = 'Today'

export type DateArg = Date | Dayjs | string
export type DateArgOrUndef = DateArg | undefined | null

export function formatDateDisplay(
    date: DateArgOrUndef, 
    settings?: { format?: DateDisplayFormat, }
) {
    if (!date) return "date(?)"

    if (settings) {
        if (settings.format !== undefined) {
            switch (settings.format) {
                case "Date":
                    return dayjs(date).format('DD/MM')
                case "DateWithYear":
                    return dayjs(date).format('DD/MM/YY')
                case "LongDateWithYear":
                    return dayjs(date).format('Do MMM, YY')
                case "DayWithLongDate":
                    const d1 = dayjs(date)
                    const dateStr1 = d1.format("Do MMM, YY")
                    
                    const dayStr = getDayStr(d1)

                    if (dayStr === todayStr)
                        return `${getDayStr(d1)} - ${dateStr1}`
                    else
                        return `${getDayStr(d1)} ${dateStr1}`
                case "DayWithDate":
                    const d = dayjs(date)
                    const dateStr = d.format("DD/MM/YY")

                    return `${getDayStr(d)}, ${dateStr}`
                case "DateWithTime":
                    const d2 = dayjs(date)
                    const dateStr2 = d2.format("DD MMM YY, h:mma")

                    return `${getDayStr(d2)}, ${dateStr2}`
            }
        }
    }

    return dayjs(date).format('Do MMM, YY')

    function getDayStr(d: Dayjs) {
        let dayStr
        if (isToday(d))
            dayStr = todayStr
        else
            dayStr = d.format('dddd')

        return dayStr
    }
}

export function formatDaterangeDisplay(
    start?: DateArg, 
    finish?: DateArg, 
    format?: { start: string, end: string }
) {
    let startStr = "?"
    let finishStr = "?"
    
    if (start !== undefined) {
        startStr = dayjs(start).format(format ? format.start : 'h:mm')
    }
    if (finish !== undefined) {
        finishStr = dayjs(finish).format(format ? format.end : 'h:mma')
    }

    return startStr + ' - ' + finishStr
}

export const startOfToday = dayjs().startOf('day')

export const isAfterToday = (m: Dayjs) => !m || m.startOf('day') > startOfToday

function getDateFormatStrings() {
    const dateFormatStrings = []
    const formats = {
        day: ["D", "DD"],
        month: ["M", "MM"],
        year: ["YY", "YYYY"]
    }

    for (let dFormat of formats.day) {
        for (let mFormat of formats.month) {
            for (let yFormat of formats.year) {
                dateFormatStrings.push(`${dFormat}-${mFormat}-${yFormat}`)            
            }
        }
    }

    return dateFormatStrings
} 
export const dateFormatStrings = getDateFormatStrings()

export function deserialiseDate(dateStr: string): Dayjs {
    return dayjs(dateStr, dateFormatStrings)
}
export const serialiseDateFormat = 'DD-MM-YY'
export function serialiseDate(d: Dayjs) {
    return d.format(serialiseDateFormat)
}

export const todayDayjs = dayjs().startOf('day')
export function isToday(m: Dayjs) {
    return m.startOf('day').diff(todayDayjs) === 0
}

export function datetimeEqual(d1: string | Dayjs, d2: string | Dayjs) {
    const d1d = typeof d1 === 'string' ? dayjs(d1) : d1
    const d2d = typeof d2 === 'string' ? dayjs(d2) : d2

    return d1d.diff(d2d)
}

export function dayEqual(d1: string | Dayjs, d2: string | Dayjs) {
    const d1d = typeof d1 === 'string' ? dateStringToDayjs(d1) : d1
    const d2d = typeof d2 === 'string' ? dateStringToDayjs(d2) : d2

    return d1d.startOf('day').isSame(d2d.startOf('day'))
}

export function addTimeOfDay(date: Dayjs, timeOfDay: Dayjs) {
    return date
        .add(timeOfDay.hour(), 'hour')
        .add(timeOfDay.minute(), 'minute')
        .add(timeOfDay.second(), 'second')
}
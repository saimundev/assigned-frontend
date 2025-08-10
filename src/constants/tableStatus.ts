
export const TABLE_STATUS = [
    "available",
    "occupied",
    "reserved",
    "unavailable",
] as const

export type TableStatusType = (typeof TABLE_STATUS)[number]

export const tableStatusOptions: { value: TableStatusType; label: string }[] = [
    {
        value: "available",
        label: "Available",
    },
    {
        value: "occupied",
        label: "Occupied",
    },
    {
        value: "reserved",
        label: "Reserved",
    },
    {
        value: "unavailable",
        label: "Unavailable",
    },
]
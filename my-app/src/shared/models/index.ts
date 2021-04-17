export type WithId<TObj = {}, TId = string> = TObj & { id: TId }

export type Subject = WithId & {
    name: string,
    users: User[],
}

export type Squad = WithId & {
    name: string,
    displayPicture?: string,

    users: User[],
    classId?: string,
    class?: Subject,
    tasks: Task[]
}

export type User = WithId & {
    name: string,
    displayPicture?: string,

    subjects: Subject[],
    subjectIds: string[],
    squadIds: string[],
    squads: Squad[],
    commentIds: string[],
    comments: Comment[]
}

export type Task = WithId & {
    name: string,
    text: string,

    squad?: Squad,
    comments: Comment[],
    due?: string,
}

export type Comment = WithId & {
    text: string
}

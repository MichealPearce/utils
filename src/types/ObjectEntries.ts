export type ObjectEntry<Obj extends object> = [keyof Obj, Obj[keyof Obj]]

export type ObjectEntries<Obj extends object> = ObjectEntry<Obj>[]

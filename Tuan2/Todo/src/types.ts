export type Theme = 'light'|'dark'


export type Todo = {
id: string
title: string
desc?: string
done: boolean
createdAt: number
}


export type Filter = 'all'|'open'|'done'
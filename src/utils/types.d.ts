export interface User {
    name: string,
    avatar: string
}

export interface Stats {
    followers: number,
    following: number
}

export type StatsType = keyof Stats

export interface TwitterContextValue {
    user: User,
    stats: Stats,
    changeAvatar: (url: string | null) => void,
    changeName: (name: string | null) => void,
    changeStats: (statsType: StatsType, sum: number) => void,
}
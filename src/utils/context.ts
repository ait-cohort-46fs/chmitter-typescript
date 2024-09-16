import { createContext } from "react";
import { StatsType, TwitterContextValue } from "./types";

export const TwitterContext = createContext<TwitterContextValue>({
    user: {
        name: 'MP',
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: function (url: string) {
        console.log(url);
    },
    changeName: function (name: string) {
        console.log(name);
    },
    changeStats: function(statsType: StatsType, sum: number){
        console.log(statsType, sum);
    }
});
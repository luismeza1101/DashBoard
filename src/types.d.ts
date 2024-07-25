type SocialNetwork = 'Facebook' | 'Instagram' | 'Twitter' | 'YouTube' ;

export interface Overview {
    id: string
    network: SocialNetwork
    user: string
    audienceType: string
    audience: number
    today: number
    isUp: boolean
}

export interface OverviewToday {
    id: string
    network: SocialNetwork
    statsType: string
    stats: number
    porcentage: number
    isUp: boolean
}


export interface AdData {
    id: number;
    first_shown_date: string;
    last_shown_date: string;
    reach: {
        unique_users_seen: string;
    };
    videos: {
        cover_image_url: string;
        url: string;
    }[];
}

export interface TiktokData {
    ad: AdData;
}

export interface TypeTikTok {
    searchValue: string;
}

export interface TiktokData_ {
    ad: {
        reach: {
            unique_users_seen: string;
        };
        videos: {
            url: string;
        }[];
    };
}
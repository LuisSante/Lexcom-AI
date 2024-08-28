export interface RegionData {
    geo: string;
    location: string;
    value: number;
}

export interface RegionDataR {
    geo: string;
    location: string;
    value: number;
    originalValue: number;
}

export interface TypeRegion {
    searchValue: string;
}

export interface TopicsData {
    topic: {
        title: string;
        type: string;
    };
    value: string;
}

export interface TypeTopics {
    searchValue: string;
}

export interface DataType {
    key: React.Key;
    name: string;
    chinese: string;
    math: number;
    english: number;
}

export interface ValueData {
    value: string;
}

export interface TimelineData {
    date: string;
    values: ValueData[];
}


export interface TrendsData {
    timeline_data: TimelineData[];
}

export interface TypeTrends {
    searchValue: string;
    idRegion: string;
}

export interface TypeProduct {
    searchValue: string;
}
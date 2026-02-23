import fetch from './fetch.js';

interface FarmingContestDataResponse {
    timestamp: number;
    crops: number[];
    cropNames: string[];
}

export interface FarmingContestData {
    time: Date;
    crops: [string, string, string];
}

type FarmingContestResponse = FarmingContestDataResponse[];

const mapCrop = (cropId: number, cropName: string): string => {
    const cropIdMap: Record<number, string> = {
        0: 'cactus',
        1: 'carrot',
        2: 'cocoa',
        3: 'melon',
        4: 'mushroom',
        5: 'nether_wart',
        6: 'potato',
        7: 'pumpkin',
        8: 'sugar_cane',
        9: 'wheat',
        11: 'sunflower'
    };

    if (cropIdMap[cropId]) {
        return cropIdMap[cropId];
    }

    const normalizedName = cropName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');

    if (normalizedName === 'cocoa_beans') {
        return 'cocoa';
    }

    return normalizedName;
};

export const getFarmingContestData = async (): Promise<
    FarmingContestData[] | null
> => {
    const response = await fetch<FarmingContestResponse>('/jacobcontests.json');

    if (!response) return null;

    return response.map((contest) => ({
        time: new Date(contest.timestamp),
        crops: contest.crops.map((cropId, index) =>
            mapCrop(cropId, contest.cropNames[index])
        ) as [string, string, string]
    })) as FarmingContestData[];
};

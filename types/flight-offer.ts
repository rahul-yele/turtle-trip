export interface Itinerary {
    duration: string;
    segments: Segment[];
}

export interface CardData {
    type: string;
    id: string;
    price: { total: string; currency: string }
    itineraries: [
        {
            duration: string;
            segments: Segment[]
        },

    ];
};

export interface Response {
    data: CardData[];
    dictionaries: {
        locations: {};
    };
}

export interface Segment {
    departure: {
        iataCode: string;
        terminal: string;
        at: string;
    };
    arrival: {
        iataCode: string;
        terminal: string;
        at: string;
    };
    carrierCode: string;
}
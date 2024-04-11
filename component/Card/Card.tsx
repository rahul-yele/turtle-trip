import { CardData, Itinerary, Response } from "@/types/flight-offer";
interface Props {
  className: string;
  data: CardData;
  dictionary: Response
}


const Card = ({ className, data, dictionary }: Props) => {
  return (
    <div className={`flex ${className}`}>
      <div >
        {data.itineraries.map((itinerary, index) => (
          <div className="flex items-center gap-3 justify-end" key={index}>
            <div className="text-green-800 bg-green-400  rounded-md border-2 p-1">{index === 1 ? "Return" : "Journey "} &rarr;</div>
            <div className="flex items-center mb-4">
              <div className="flex flex-col items-center gap-2">
                <div className="city">{dictionary.locations[itinerary.segments[0].departure.iataCode].cityCode}</div>
                <div className="time">{new Date(itinerary.segments[0].departure.at).toLocaleTimeString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: 'numeric' })}</div>
              </div>
              {itinerary.segments.map((segment, i) => (
                <div key={i} className="flex  gap-2 mx-4">
                  <div className="arrow"> &rarr; </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="city">{dictionary.locations[segment.arrival.iataCode].cityCode}</div>
                    <div className="time">{new Date(segment.arrival.at).toLocaleTimeString('en-US', { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' })}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex text-red-400 "> Price: {data.price.total} {data.price.currency}</div>
      </div>

    </div>

  );
};

export default Card;


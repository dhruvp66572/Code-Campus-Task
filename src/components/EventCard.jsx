import poster from '../assets/poster.png';

export default function EventCard() {
    return (
      <div className="p-4 max-w-sm mx-auto ">
        <img src={poster} alt="Event Poster" className="rounded-lg" />
        <p className="mt-2 text-sm text-gray-600">Hosted By</p>
        <h3 className="font-semibold text-lg">SoarX</h3>
      </div>
    );
  }
  
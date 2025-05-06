export default function SectionBlock({ title, body, list }) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {body && <p className="text-gray-700">{body}</p>}
        {list && (
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {list.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        )}
      </div>
    );
  }
  
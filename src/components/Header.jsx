export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-600">Luma</h1>
        <div className="space-x-4">
          <button className="text-sm text-blue-600">Explore Events</button>
          <button className="text-sm text-blue-600">Sign In</button>
        </div>
      </header>
    );
  }
  
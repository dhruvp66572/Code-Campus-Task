export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <h1 className="text-xl font-bold text-blue-600">Luma</h1>
      <div className="space-x-4 flex items-center text-sm text-gray-600 font-semibold ">
        <p>11:17 PM GMT+5:30</p>
        <a className="space-x-4 flex items-center text-sm text-gray-600 font-semibold cursor-pointer hover:text-blue-600 ">
          Explore Events
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 60 60"
          >
            <path d="M7 17 17 7M7 7h10v10"></path>
          </svg>
        </a>
        <button className="text-sm text-gray-700 rounded-2xl bg-gray-300 px-4 py-1">
          Sign In
        </button>
      </div>
    </header>
  );
}

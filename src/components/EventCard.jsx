import poster from "../assets/poster.png";

export default function EventCard() {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <img src={poster} alt="Event Poster" className="rounded-lg w-full" />
      <p className="mt-2 text-sm text-gray-600">Hosted By</p>
      <h3 className="font-semibold text-lg text-gray-800">SoarX</h3>

      <div className="hidden md:block mt-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Hosted By</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <a
              href="/user/usr-Z3O3PbajvtSWrSA"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <div
                className="w-6 h-6 bg-cover rounded-full"
                style={{
                  backgroundImage:
                    'url("https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=24,height=24/avatars/72/2dba67f7-d5d4-43f2-966e-feaeac7761fd")',
                }}
              ></div>
              <span className="text-gray-800 font-medium">SoarX</span>
            </a>
            <div className="flex gap-2">
              <a
                href="https://chat.whatsapp.com"
                className="text-gray-500 hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                  fill="currentColor"
                ></svg>
              </a>
              <a
                href="https://twitter.com/SoarXNetwork"
                className="text-gray-500 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  class="w-4 h-4"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="m108.783 107.652-38.24-55.748.066.053L105.087 12H93.565L65.478 44.522 43.174 12H12.957l35.7 52.048-.005-.005L11 107.653h11.522L53.748 71.47l24.817 36.182zM38.609 20.696l53.652 78.26h-9.13l-53.696-78.26z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/SoarXNetwork"
                className="text-gray-500 hover:text-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="w-4 h-4"
                  fill="currentColor"
                >
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      d="M13.38 3.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
                    ></path>
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8"></path>
                    <path d="M0 7.68c0-2.688 0-4.032.523-5.06A4.8 4.8 0 0 1 2.621.524C3.648 0 4.99 0 7.68 0h.64c2.688 0 4.032 0 5.06.523a4.8 4.8 0 0 1 2.097 2.098C16 3.648 16 4.99 16 7.68v.64c0 2.688 0 4.032-.523 5.06a4.8 4.8 0 0 1-2.098 2.097C12.352 16 11.01 16 8.32 16h-.64c-2.688 0-4.032 0-5.06-.523a4.8 4.8 0 0 1-2.097-2.098C0 12.352 0 11.01 0 8.32zM7.68 1.6h.64c1.37 0 2.302.001 3.022.06.702.057 1.06.161 1.31.289a3.2 3.2 0 0 1 1.4 1.398c.127.25.23.61.288 1.31.059.72.06 1.652.06 3.023v.64c0 1.37-.001 2.302-.06 3.022-.057.702-.161 1.06-.289 1.31a3.2 3.2 0 0 1-1.398 1.4c-.25.127-.61.23-1.31.288-.72.059-1.652.06-3.023.06h-.64c-1.37 0-2.302-.001-3.022-.06-.702-.057-1.06-.161-1.31-.289a3.2 3.2 0 0 1-1.4-1.398c-.127-.25-.23-.61-.288-1.31-.059-.72-.06-1.652-.06-3.023v-.64c0-1.37.001-2.302.06-3.022.057-.702.161-1.06.289-1.31a3.2 3.2 0 0 1 1.398-1.4c.25-.127.61-.23 1.31-.288.72-.059 1.652-.06 3.023-.06"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">569 Went</span>
          </div>
          <button className="w-full text-left text-gray-800 hover:text-blue-500">
            Dhwani Chauhan, DANGE AMIT and 567 others
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-full py-2 text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
            Contact the Host
          </button>
          <button className="w-full py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white">
            Report Event
          </button>
        </div>
      </div>
    </div>
  );
}

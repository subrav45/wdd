export default function MissionModal({ mission, onClose }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-slate-900 text-white rounded-xl max-w-lg w-full overflow-hidden">
        {/* <img
          src={mission.image}
          alt={mission.name}
          className="h-48 w-full object-cover"
        /> */}

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {mission.name}
          </h2>

          <p className="text-sm text-gray-400 mb-4 capitalize">
            {mission.type} mission by ISRO
          </p>

          <p className="text-red-300">
            {mission.description}
          </p>

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
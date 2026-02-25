const colorMap = {
  scientific: "from-indigo-600 to-purple-600",
  navigation: "from-emerald-600 to-green-600",
  communication: "from-sky-600 to-blue-600",
  default: "from-rose-600 to-pink-600",
};

export default function MissionCard({ mission, onClick }) {
  const gradient = colorMap[mission.type] || colorMap.default;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-white/10 hover:border-white/20 transition bg-slate-900"
    >
      <div className={`p-6 rounded-xl bg-gradient-to-br ${gradient}`}>
        <h3 className="text-xl font-semibold leading-snug">
          {mission.name}
        </h3>

        <p className="mt-2 text-sm uppercase tracking-widest text-white/80">
          {mission.type} mission
        </p>

        {mission.launchYear && (
          <p className="mt-4 text-sm text-white/90">
            Launch Year:{" "}
            <span className="font-medium">{mission.launchYear}</span>
          </p>
        )}

        {mission.description && (
          <p className="mt-3 text-sm text-white/85 leading-relaxed line-clamp-3">
            {mission.description}
          </p>
        )}

        <div className="mt-5 text-sm font-medium text-white/90 group-hover:underline">
          View Details →
        </div>
      </div>
    </div>
  );
}
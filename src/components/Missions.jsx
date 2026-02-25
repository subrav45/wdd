import { useEffect, useState } from "react";
import { fetchSpacecrafts } from "../isroAPI";
import MissionCard from "./Missioncard";
import MissionModal from "./Missionmodel";

function getMissionType(name) {
  const n = name.toLowerCase();
  if (n.includes("chandrayaan") || n.includes("mangal")) return "scientific";
  if (n.includes("navic")) return "navigation";
  if (n.includes("gsat")) return "communication";
  return "default";
}

export default function MissionsSection() {
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchSpacecrafts();

        const enriched = data.map((m) => ({
          id: m.id,
          name: m.name,
          type: getMissionType(m.name),
          launchYear: m.launchYear || "N/A",
          description:
            m.description ||
            "Indian space research and exploration mission by ISRO.",
        }));

        setMissions(enriched);
      } catch (err) {
        console.error("Failed to load missions", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center text-gray-400">
        Loading ISRO missions...
      </section>
    );
  }

  return (
    <section
      id="missions"
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        ISRO Missions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {missions.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            onClick={() => setSelectedMission(mission)}
          />
        ))}
      </div>

      <MissionModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />
    </section>
  );
}
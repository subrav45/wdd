const BASE_URL = "https://isro.vercel.app/api";

async function safeFetch(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s

  try {
    const res = await fetch(url, { signal: controller.signal });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchSpacecrafts() {
  const data = await safeFetch(`${BASE_URL}/spacecrafts`);
  return data.spacecrafts;
}

export async function fetchCentres() {
  const data = await safeFetch(`${BASE_URL}/centres`);
  return data.centres;
}
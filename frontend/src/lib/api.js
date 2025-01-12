const API_URL = "http://localhost:3000/diary";

export async function fetchEntry(date) {
  try {
    const response = await fetch(`${API_URL}?date=${encodeURIComponent(date)}`);
    if (!response.ok) throw new Error("Fehler beim Abrufen des Eintrags");
    return await response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addEntry(date, content) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, content }),
    });
    if (!response.ok) throw new Error("Fehler beim Speichern des Eintrags");
    return await response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
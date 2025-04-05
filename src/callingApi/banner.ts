export async function getPosters() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/poster/getall`
    );
    if (!res.ok) {
      throw new Error(`Error fetching posters. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data.documents ?? [];
  } catch (error) {
    console.error("Failed to fetch posters:", error);
    return [];
  }
}

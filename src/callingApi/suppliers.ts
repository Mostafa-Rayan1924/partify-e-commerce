export async function getSuppliers() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/supplier/getall`
    );
    if (!res.ok) {
      throw new Error(`Error fetching supplier. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data.documents ?? [];
  } catch (error) {
    console.error("Failed to fetch supplier:", error);
    return [];
  }
}

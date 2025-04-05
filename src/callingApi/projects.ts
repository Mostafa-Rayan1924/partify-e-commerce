export async function getAllProjects(category?: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/partify/subCategory/getall`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch projects. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data.documents ?? [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

// get one project by id
// export async function getProjectById(id: string) {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}project/${id}`);

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     return data ?? {};
//   } catch (error) {
//     console.error("Failed to fetch project:", error);
//     return {};
//   }
// }

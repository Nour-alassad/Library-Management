const API_BASE_URL = "http://localhost:3001";

export const getBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getBorrowedBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/borrowedBooks`);
    if (!response.ok) {
      throw new Error("Failed to fetch borrowed books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching borrowed books:", error);
    return [];
  }
};

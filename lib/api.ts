export const API = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher(resource: string, init?: RequestInit) {
  const response = await fetch(`${API}${resource}`, init);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
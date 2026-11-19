const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_KEYS = {
  admin: process.env.ADMIN_API_KEY,
  student: process.env.STUDENT_API_KEY,
};

export async function apiFetch(endpoint, options = {}) {
  const { role = "student", ...fetchOptions } = options;

  const apiKey = API_KEYS[role];

  if (!apiKey) {
    throw new Error(`Invalid role or missing API key: ${role}`);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": apiKey,
      ...fetchOptions.headers,
    },
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || `Request failed: ${response.status}`);
  }

  return data;
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const firebaseLogin = async (
  idToken: string,
): Promise<LoginResponse> => {
  const response = await fetch(`${API_BASE_URL}/auth/firebase-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idToken,
    }),
  });

  const result: ApiResponse<LoginResponse> = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result.data;
};

export interface Product {
  id: number;
  nombre: string;
  precio_unidad: number;
}

export const apiClient = async <T>(
  endpoint: string,
  method: string = "POST",
  dataInput?: unknown
): Promise<T> => {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (dataInput && method !== "GET") {
    options.body = JSON.stringify(dataInput);
  }

  const response = await fetch(`http://localhost:3000/${endpoint}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

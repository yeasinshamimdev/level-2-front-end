export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:5002/api/v1"
  );
};

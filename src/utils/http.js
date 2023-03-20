export const GET = async (endopint) => {
  const res = await fetch(endopint);
  const data = await res.json();
  return data;
};

export type Product = {
  id: string;
  title: string;
};

export const fetchData = async () => {
  const query = `{
    products {
      id
      title
    }
  }`;
  try {
    const res = await fetch(
      "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cln38wj9s1rwg01uohx1h6z42/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

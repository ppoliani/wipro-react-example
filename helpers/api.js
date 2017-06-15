export default async url => {
  try {
    const response = await fetch(url);
    return response.json();
  }
  catch(error) {
    console.error(`Error fetching data from ${url}`)
  }
}

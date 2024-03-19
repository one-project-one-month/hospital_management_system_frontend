
export default class Backend {
  async get() {
    // const res = await fetch("api.example.com/");
    // if (!res.ok) throw new Error("Error occured in users fetching");
    // return res.json();

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return await response.json();
  }
}

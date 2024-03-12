export default class Superbase {
  async get() {
    // const res = await fetch("api.example.com/");
    // if (!res.ok) throw new Error("Error occured in users fetching");
    // return res.json();
    return [
      { id: 0, name: "soe soe" },
      { id: 1, name: "poe poe" },
    ];
  }
}

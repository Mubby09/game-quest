import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e403ac4ec24b41b7a1a0bf36370c1937"
  }
});

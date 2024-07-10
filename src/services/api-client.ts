import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6827b4d3884d440a8fedd8d7981b306c",
  },
});

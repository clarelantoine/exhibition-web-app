export const fetcher = (...args) => fetch(...args).then(res => res.json())

// import axios from "axios";

// export const fetcher = (url, token) =>
//     axios
//       .get(url, { headers: { Authorization: "Bearer " + token,  } })
//       .then((res) => res.data);
import swal from "sweetalert2";

const UpdateHooks = async (url, data, on = false, message = "") => {
  fetch(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        if (on) swal.fire("Success", message, "success");
      } else if (data.status === "fail") {
        swal.fire(
          "Error",
          `${
            data.message
              ? data.message
              : data.error.split(":").slice(2).join(":")
          }`,
          "error"
        );
      }
    })
    .catch((err) => {});
};

export default UpdateHooks;

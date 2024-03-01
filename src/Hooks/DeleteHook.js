import Swal from "sweetalert2";

const DeleteHook = ({ refetch, setRefetch, setAllData = "", url, id }) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`${url}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res, "deleted");
        if (res.status === 200) {
          setRefetch(!refetch);
          setAllData((allData) => {
            let arr = [...allData];

            let updateData = arr.filter((el) => el._id !== id);

            return updateData;
          });

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  });
};

export default DeleteHook;


let trashIcon = document.querySelectorAll(".trashIcon");
let modalDelete = document.querySelector("#modal-delete");
let cancelBtn = document.querySelector(".btn-cancel");
let deleteBtn = document.querySelector(".btn-delete");
  // Mở modal
  trashIcon.forEach(btn => {
    btn.addEventListener("click",function(){
      modalDelete.style.display = "flex";
    })
  });

  // Đóng modal khi bấm nút Hủy
  cancelBtn.addEventListener("click", function () {
    modalDelete.style.display = "none";
  });
  deleteBtn.addEventListener("click", function () {
    modalDelete.style.display = "none";
    showDeleteSuccessToast();
  });
  // Đóng modal khi click ra ngoài modal box
  window.addEventListener("click", function (e) {
    if (e.target === modalDelete) {
      modalDelete.style.display = "none";
    }
  });
  function showDeleteSuccessToast() {
    const toast = document.querySelector("#toast");
    toast.style.display = "flex";
    toast.style.opacity = 1;
  
    // Ẩn sau 3 giây
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => {
        toast.style.display = "none";
      }, 300); // đợi hiệu ứng mờ dần
    }, 2000);
  }
  
  

let btnAddAccount = document.querySelector("#btn-add-account");
let btnEdit = document.querySelectorAll(".btnEdit");
let modalAdd = document.querySelector("#modal-add-account");
let modalEdit = document.querySelector("#modal-edit-account");
btnAddAccount.addEventListener("click", function () {
  modalAdd.style.display = "flex";
});
btnEdit.forEach(btn => {
  btn.addEventListener("click",function(){
    modalEdit.style.display = "flex";
  })
});
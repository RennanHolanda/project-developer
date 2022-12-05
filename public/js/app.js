const btn = document.querySelector("#btn-dager");

btn.addEventListener("click", function () {
  Swal.fire({
    title: "Tem certeza??",
    text: "Você não será capaz de reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, deletar!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deletedo!", "Usuário deletado com sucesso.", "success");
    }
  });
});

const salvar = document.querySelector("#salvar");

salvar.addEventListener("click", function () {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Alterações salvas com sucesso!",
    showConfirmButton: false,
    timer: 1500,
  });
});

export function showUploadImage() {
  /*
   * Exibe a imagem selecionada no upload pelo usuário.
   */

  const imageTag = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();

  reader.onloadend = () => {
    imageTag.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    imageTag.src = "./assets/images/empty_profile.svg";
  }
}

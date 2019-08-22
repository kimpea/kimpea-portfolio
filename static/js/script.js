let today = new Date();
let year = today.getFullYear();

let copyrightYear = document.getElementById('copyright');
copyrightYear.innerHTML = `<p>Copyright &copy; ${year} Kim Pearton</p>`;
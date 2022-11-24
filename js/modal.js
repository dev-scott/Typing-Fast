const openBtn = document.querySelector('.btn_sigIn');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);

function openModal() {

    modal.style.display = 'grid';
    console.log("ffff");

}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

modal.addEventListener('click', function (e) {

    if (e.target.classList.contains('modal')) {
        closeModal();
    }


});
function sidebarFunc() {
  //! home sidebar start
  //! Home sidebar start

  const btnOpenSidebar = document.querySelector('#btn-menu');
  // slider bar ekran kuculunce mobil halindeyken açma tusu

  const sidebar = document.querySelector('#sidebar');
  // komple sidebarı kapsayan id

  const btnCloseSidebar = document.querySelector('#close-sidebar');
  // çarpı kapatma ikonunu sarmalayan id

  btnOpenSidebar.addEventListener('click', function () {
    sidebar.style.left = '0';
  });

  btnCloseSidebar.addEventListener('click', function () {
    sidebar.style.left = '-100%';
  });

  // Click outside start
  document.addEventListener('click', function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = '-100%';
    }
  });

  // Click outside end
  //! Home sidebar end
}

function searchModalFunc() {
  //! search modal start
  const btnOpenSearch = document.querySelector('.search-button');
  // bu arama butonunun clasına erişme durumu ikona tıklama yeri

  const btnCloseSearch = document.getElementById('close-search');
  // modal searchı kapatma butuno

  const modalSearch = document.getElementsByClassName('modal-search');
  // buda arama ikonuna tıkladıktan sonra karşımıza cıkmasını istediğimiz kartı kapsayan modal searchın açılmasını için erişememiz gereken class get elementbyclasname oldugundan nokta koymaya gerek yoktur.

  const modalSearchWrapper = document.getElementsByClassName('modal-wrapper'); // genel modal search kapsayıcı

  btnOpenSearch.addEventListener('click', function () {
    modalSearch[0].style.visibility = 'visible';
    modalSearch[0].style.opacity = 1;
  });
  // bu bir array olarak döndüğü için index olarak 0 belirtmek zorundayız

  btnCloseSearch.addEventListener('click', function () {
    modalSearch[0].style.visibility = 'hidden';
    modalSearch[0].style.opacity = 0;
  });
  // bu bir array olarak döndüğü için index olarak 0 belirtmek zorundayız

  //? click outside start
  document.addEventListener('click', function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) && //kartı kapsayan class modalı komple ! işaret şunları içermiyorsa demek
      !e.composedPath().includes(btnOpenSearch) // kısaca bunların içinde değilse tıklama olayı gizle demek bunların içindeyse gizleme
    ) {
      modalSearch[0].style.visibility = 'hidden';
      modalSearch[0].style.opacity = 0;
    }
  });
  //? click outside start

  //! search modal end
}

function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}

export default headerFunc();

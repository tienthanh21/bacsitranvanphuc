document.addEventListener("DOMContentLoaded", function () {

    // Load Header
    fetch("header.html?v="+Date.now())
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            const btn = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Tự động ẩn menu khi bấm vào một mục chọn trên điện thoại
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
        });

    
    //MENU VITAMIN TONG HOP
     fetch("menu-tong-hop.html?v="+Date.now())
        .then(response => {
            if (!response.ok) {
                throw new Error("Không thể tải menu-tong-hop.html");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("menu-tong-hop").innerHTML = html;
        })
        .catch(error => console.error(error));


    //MENU BO SUNG THEM
     fetch("menu-bo-sung-them.html?v="+Date.now())
        .then(response => {
            if (!response.ok) {
                throw new Error("Không thể tải menu-bo-sung-them.html");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("menu-bo-sung-them").innerHTML = html;
        })
        .catch(error => console.error(error));    

    
    //Footer 1
     fetch("footer-banner.html?v="+Date.now())
        .then(response => {
            if (!response.ok) {
                throw new Error("Không thể tải footer-banner.html");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("footer-banner").innerHTML = html;
        })
        .catch(error => console.error(error));


    //Footer 2
    fetch("footer.html?v="+Date.now())
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});
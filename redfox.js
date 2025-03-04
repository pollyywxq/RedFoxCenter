function toggleInfo(selectedItem) {
    document.querySelectorAll('.service-info').forEach(info => {
        if (info !== selectedItem.querySelector('.service-info')) {
            info.style.display = 'none';
        }
    });

    let infoBlock = selectedItem.querySelector('.service-info');
    if (window.getComputedStyle(infoBlock).display === "none") {
        infoBlock.style.display = "block";
    } else {
        infoBlock.style.display = "none";
    }
}

const headerContainer = document.querySelector("#header-container")

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        headerContainer.style.top = "-600px";
    } else {
        headerContainer.style.top = "0px";
    }

    /*     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            formEmail.style.right = "-100%";
        } else {
            formEmail.style.right = "5%";
        } */
}
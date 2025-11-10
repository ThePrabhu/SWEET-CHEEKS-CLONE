document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.nav_toggle');
    const header = document.querySelector('.navBar');
    const menu = document.querySelector('.nav_links_unorder_list');
    if(!toggle || !menu || !header) return;

    toggle.addEventListener('click', function(){
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        header.classList.toggle('open');
        menu.classList.toggle('open');
    });
});
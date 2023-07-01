document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.switch');
    const body = document.body;
    const nothing = document.querySelector('.nothing');
    const card = document.querySelectorAll('.social, .daily-overview');
    const changetxt = document.querySelectorAll('.change-text');

    toggleSwitch.addEventListener('change', function () {
        body.classList.toggle('light');
        nothing.classList.toggle('background-light');
            
            card.forEach(card => {
                card.classList.toggle('card-light');
                if(!card.classList.contains('dark')) {
                    card.classList.add('dark');
                } else {
                    card.classList.remove('dark');
                }
            });
    
            changetxt.forEach(changetxt => {
                changetxt.classList.toggle('change-text-light')
            });
    });
});
  
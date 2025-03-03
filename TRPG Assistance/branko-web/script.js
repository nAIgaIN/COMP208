function navigateTo(page) {
    window.location.href = page;
}

function goBackToMain() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const featureButtons = document.querySelectorAll('.feature-button');
    
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureText = this.querySelector('.feature-text').textContent;
            
            navigateTo('page1.html');
        });
    });
}); 
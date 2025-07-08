document.querySelectorAll('.solucao-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const problemaItem = this.closest('.problema-item');
        problemaItem.classList.toggle('active');
        
        this.textContent = problemaItem.classList.contains('active') 
            ? 'Ocultar Solução' 
            : 'Mostrar Solução';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const coordBox = document.getElementById('coordDisplay');
    
    document.addEventListener('mousemove', function(event) {
       
        let x = event.clientX;
        let y = event.clientY;
        
        x = x % 100;  
        y = y % 100;
        
        coordBox.textContent = x + ' : ' + y;
        
        if (x > 50) {
            coordBox.style.borderColor = 'gold';
        } else {
            coordBox.style.borderColor = 'cyan';
        }
    });
    
    document.addEventListener('mouseleave', function() {
        coordBox.textContent = '--- : ---';
        coordBox.style.opacity = '0.7';
    });
    
    document.addEventListener('mouseenter', function() {
        coordBox.style.opacity = '1';
    });
    
});
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle && subtitle.textContent.trim() === 'Software Developer') {
        const text = subtitle.textContent;
        subtitle.textContent = ''; // Clear it initially
        subtitle.style.borderRight = '2px solid var(--accent-color)';
        subtitle.style.paddingRight = '5px';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor when done
                setTimeout(() => subtitle.style.borderRight = 'none', 1000);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

const themeToggleBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save the user's preference
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
const skillTags = document.querySelectorAll('.skill-tag');
    
skillTags.forEach(tag => {
    tag.style.cursor = 'pointer';
        
    tag.addEventListener('click', function() {
        this.classList.toggle('active-skill');
        if (this.classList.contains('active-skill')) {
            this.style.backgroundColor = 'var(--accent-color)';
            this.style.color = 'white';
            this.style.transform = 'scale(1.1)';
        } else {
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.transform = '';
         }
    });
  });
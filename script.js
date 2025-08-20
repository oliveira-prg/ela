<script>
        function mostrarPoema() {
            document.getElementById('poema').style.display = 'block';
            document.getElementById('btnVer').style.display = 'none';
            document.getElementById('btnOcultar').style.display = 'inline-block';
        }
        function ocultarPoema() {
            document.getElementById('poema').style.display = 'none';
            document.getElementById('btnVer').style.display = 'inline-block';
            document.getElementById('btnOcultar').style.display = 'none';
        }
        // Corações flutuantes modernos
        function createHeart() {
            const heart = document.createElement('span');
            heart.className = 'heart';
            heart.innerHTML = Math.random() > 0.5 ? '❤' : '💖';
            // Posição horizontal aleatória
            const x = Math.random() * window.innerWidth * 0.8 - window.innerWidth * 0.4;
            heart.style.left = (window.innerWidth / 2 + x) + 'px';
            heart.style.bottom = '-40px';
            heart.style.setProperty('--x', (Math.random() * 120 - 60) + 'px');
            heart.style.setProperty('--size', (1.5 + Math.random() * 1.5) + 'em');
            heart.style.setProperty('--scale', (1 + Math.random() * 0.7));
            heart.style.setProperty('--duration', (5 + Math.random() * 3) + 's');
            heart.style.setProperty('--color', Math.random() > 0.7 ? '#ff69b4' : '#d72660');
            document.body.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
        setInterval(createHeart, 600);
    </script>

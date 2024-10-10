document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const senha = document.getElementById('loginSenha').value;
  const loginError = document.getElementById('loginError');

  try {
      const response = await fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, senha })
      });

      if (response.ok) {
          // Redireciona para a página principal após o login bem-sucedido
          window.location.href = '.html'; 
      } else {
          const errorMessage = await response.text();
          loginError.innerText = errorMessage;
          loginError.style.display = 'block';
      }
  } catch (error) {
      console.error('Erro:', error);
      loginError.innerText = 'Erro de conexão. Tente novamente.';
      loginError.style.display = 'block';
  }
});


/*Cadastrar Usuário*/
document.getElementById('btnCriarConta')
    .addEventListener('click', function () {

        //Pegando valores dos campos email e senha do formulário
        let nome = document.getElementById('inputCadNome').value;
        let sobrenome = document.getElementById('inputCadSobrenome').value;
        let email = document.getElementById('inputCadEmail').value;
        let senha = document.getElementById('inputCadSenha').value;



        //Validando os campos do formulário de cadastro

        //valida o campo email
        if (email == "" || senha == "" || nome == "" || sobrenome == "") {

            Swal.fire('Por favor preencha todos os campos!', '', 'error');

        } else {

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    senha: senha
                })

            };

            fetch('http://localhost:5500/cad-usuario', options)
                .then(response => response.json())
                .then(async response => {

                    if (response.success == false) {

                        Swal.fire('Usuario já cadastrado!', '', 'error');

                    } else {


                        await Swal.fire({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            icon: 'success',
                            title: 'Cadastrado com sucesso!'

                        })


                        //Salvando token no localStorage
                        localStorage.setItem("token", response.token);
                        localStorage.setItem("nome_usuario", response.nome);
                        localStorage.setItem("sobrenome_usuario", response.sobrenome);
                        localStorage.setItem("email_usuario", response.email);
                        localStorage.setItem("id_usuario", response.id_usuario);

                        window.location.href = "/src/views/paginaPrincipal.html";

                    }
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
    });
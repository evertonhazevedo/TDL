document.getElementById('btnEntrar')
    .addEventListener('click', function () {

        //Pegando valores dos campos email e senha do formulário
        let email = document.getElementById('inputEmail').value;
        let senha = document.getElementById('inputSenha').value;

        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        if (email == "" || senha == "") {

            Swal.fire('Por favor preencha todos os campos!', '', 'error');

        } else {

            fetch('http://localhost:5500/validar-login/' + email + '/' + senha)
                .then(response => response.json())
                .then(async response => {

                    if (response.success == false) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Usuário ou senha incorreta!'
                        });
                    } else {

                        await Swal.fire({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            icon: 'success',
                            title: 'Logado com sucesso'
                        })

                        //Salvando token no localStorage
                        localStorage.setItem("token", response.token);
                        localStorage.setItem("nome_usuario", response.nome);
                        localStorage.setItem("sobrenome_usuario", response.sobrenome);
                        localStorage.setItem("email_usuario", response.email);
                        localStorage.setItem("id_usuario", response.id_usuario);

                        window.location.href = "/src/views/paginaPrincipal.html";
                    }
                })
                .catch(err => console.error(err));
        }
    });

document.getElementById('inputCadSenha')
    .addEventListener('keyup', function () {

        let inputSenha = document.getElementById('inputCadSenha').value;
        let forcaSenha = 0;

        if ((inputSenha.length >= 4) && (inputSenha.length <= 7)) {

            forcaSenha += 10;

        } else if (inputSenha.length > 7) {

            forcaSenha += 25;

        }

        if ((inputSenha.length >= 5) && (inputSenha.match(/[a-z]+/))) {

            forcaSenha += 10;

        }

        if ((inputSenha.length >= 6) && (inputSenha.match(/[A-Z]+/))) {

            forcaSenha += 20;

        }

        if ((inputSenha.length >= 7) && (inputSenha.match(/[@#$%&!]/))) {

            forcaSenha += 25;

        }

        if (inputSenha.match(/([1-9]+)\\1{1,}/)) {

            forcaSenha += 25;

        }

        apresentarForca(forcaSenha);


    });

function apresentarForca(forcaSenha) {

    if (forcaSenha < 30) {

        document.getElementById('divForcaSenha').innerHTML = "<span class='progress-bar bg-danger' role='progressbar' style='width: 25%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></span>";

    } else if ((forcaSenha >= 30) && (forcaSenha < 50)) {

        document.getElementById('divForcaSenha').innerHTML = "<span class='progress-bar bg-warning' role='progressbar' style='width: 50%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></span>";

    } else if ((forcaSenha >= 50) && (forcaSenha < 70)) {

        document.getElementById('divForcaSenha').innerHTML = "<span class='progress-bar bg-info' role='progressbar' style='width: 75%' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></span>";;

    } else {

        document.getElementById('divForcaSenha').innerHTML = "<span class='progress-bar bg-success' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></span>";

    }
}
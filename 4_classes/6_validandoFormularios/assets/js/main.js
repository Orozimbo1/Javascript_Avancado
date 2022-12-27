class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')

    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  camposValidos() {
    let valid = true

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
        this.criaErro(campo, `O campo "${label}" não pode ser deixado em branco.`)
        valid = false
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCpf(campo)) valid = false
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false 
      }
    }

    return valid
  }

  validaUsuario(campo) {
    const usuario = campo.value
    let valid = true

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário deve ter entre 3 à 12 carcteres.')
      valid = false
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Usuário deve ter apenas letras e números.')
      valid = false
    }

    return valid
  }

  validaCpf(campo) {
    const cpf = new ValidaCPF(campo.value)

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.')
    }
    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }

  senhasSaoValidas() {
    let valid = true

    const senha = document.querySelector('.senha')
    const repetirSenha = document.querySelector('.repetir-senha')

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false
      this.criaErro(senha, 'A senha precisa ter entre 6 à 12 caracteres.')
    }

    if(senha.value !== repetirSenha.value) {
      valid = false
      this.criaErro(senha, 'Campo "Senha" e "Repetir a senha" precisam ser iguais.')
      this.criaErro(repetirSenha, 'Campo "Senha" e "Repetir a senha" precisam ser iguais.')
    }

    return valid
  }

  handleSubmit(e) {
    e.preventDefault()
    const camposValidos = this.camposValidos()
    const senhasValidas = this.senhasSaoValidas()
    if(camposValidos && senhasValidas) {
      alert('Formulario enviado')
      this.formulario.submit()
    }
  }
}

const valida = new ValidaFormulario()
function Calculadora(){
    this.display = document.querySelector('.display')
    
    this.inicia = () => {
      this.cliqueBotoes() 
      this.pressionaEnter()
    }

    this.pressionaEnter = () => {
      document.addEventListener('keyup', e => {
          if(e.keyCode === 13){
            this.realizaConta()
          }
      })
    }

    this.btnParaDisplay = (valor) => {
      this.display.value += valor
      this.display.focus()
    }

    this.limparDisplay = () => {
      this.display.value = ''
    }

    this.apagaUm = () => {
      this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {
      let conta = this.display.value

      try{
        conta = eval(conta)

        if(!conta){
          alert('Conta inválida!')
          return
        } 
        this.display.value = String(conta)
      } catch(e){
        alert('Conta inválida!') 
      }
    }

    this.cliqueBotoes = () => {
      document.addEventListener('click', e => {
        const el = e.target

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText)
        }
        if(el.classList.contains('btn-limpar')){
          this.limparDisplay()
        }
        if(el.classList.contains('btn-apagar')){
          this.apagaUm()
        }
        if(el.classList.contains('btn-igual')){
          this.realizaConta()
        }
      })
    }
  }
const calculadora = new Calculadora()
calculadora.inicia()
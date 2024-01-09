import Button from '../button';
import Field from '../field';
import './sectionlogin.css'

const Sectionlogin = () => {
    return(
        <section className='section-container'>
            <div className='header-container'>
            Área de Login
            </div>
            <div className='body-container'>
                <p>Olá, fico feliz em ver você novamente! Faça o login para acessar sua conta.</p>

                <Field
                obrigatorio={true}
                placeholder='Digite o seu endereço de e-mail'
                />
                <Field
                obrigatorio={true}
                placeholder='Digite a sua senha de acesso'
                />
                <div className='button-container'>
                <Button>
                    Login
                </Button>
                
                </div><br></br>
                <a href='#'>Esqueceu a sua senha?</a>
                
            </div>
        </section>
    )
}

export default Sectionlogin;
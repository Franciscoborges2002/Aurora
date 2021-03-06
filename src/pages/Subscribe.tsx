import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LogoEvent } from "../components/LogoEvent";

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
     createSubscriber(data: {name: $name, email: $email}) {
      id
     }
    }
`

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(
        CREATE_SUBSCRIBER_MUTATION
      );

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
    
        await createSubscriber({
          variables: {
            name,
            email,
          },
        });

        navigate('/event/ignite-lab/lesson')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <LogoEvent />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-colors-blue-500">aplicação completa</strong>, do zero, com <strong className="text-colors-blue-500">React</strong>.
                    </h1>

                    <p className="mt-4 text-colors-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-colors-gray-700 border border-colors-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratiutamente</strong>
                
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-colors-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo."
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="bg-colors-gray-900 rounded px-5 h-14"
                        type="email" 
                        placeholder="Digite seu email." 
                        onChange={event => setEmail(event.target.value)}
                        />

                        <button
                        disabled={loading}
                        className="mt-4 bg-colors-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-colors-green-700 transition-colors disabled:opacity-50"
                        type="submit">
                            GARANTIR MINHA VAGA
                        </button>
                    </form>
                </div>  
            </div>

            <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
        </div>
    );
}
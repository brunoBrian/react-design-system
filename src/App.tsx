import './styles/global.css'

import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/Input'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'
import ReactLogo from './assets/react-logo.svg'

export function App() {
  return (
    <main className='flex justify-center items-center w-full h-[100vh] flex-col bg-gray-900'>
      <div className='w-[100%] sm:w-[400px] px-4'>
        <header className='flex justify-center items-center flex-col mb-8'>
          <img src={ReactLogo} alt="Logo react" className='mb-4' />
          <Heading size='lg'><h1>Ignite Lab</h1></Heading>
          <Heading size='md'><h2 className='text-gray-400 font-normal'>Faça login e comece a usar</h2></Heading>
        </header>

        <form>
          <div className='flex gap-2 flex-col mb-4'>
            <Text size='md'><label htmlFor='email' className='text-gray-400'>Endereço de e-mail</label></Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id='email' placeholder='Digite seu e-mail' type='email' />
            </TextInput.Root>
          </div>

          <div className='flex gap-2 flex-col'>
            <Text size='md'><label htmlFor='password' className='text-gray-400'>Senha</label></Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id='password' placeholder='**********' type='password' />
            </TextInput.Root>
          </div>

          <div className='flex items-center gap-2 mb-8 mt-3'>
            <Checkbox id='accept' />
            <Text size='sm'><label htmlFor='accept' className='text-gray-200'>Lembrar-me de mim por 30 dias</label></Text>
          </div>

          <Button>Entrar na plataforma</Button>

          <div className='flex flex-col items-center gap-2 mt-8'>
            <Text size='sm'><span className='text-gray-400 underline'>Esqueceu sua senha?</span></Text>
            <Text size='sm'><span className='text-gray-400 underline'>Não possui uma conta? Crie agora!</span></Text>
          </div>
        </form>
      </div>
    </main>
  )
}
import {
  Card,
  Button as ButtonNext,
  CardBody,
  CardHeader,
  Avatar,
} from '@nextui-org/react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { UserCircle2Icon } from 'lucide-react'
import { GitHubIcon } from './icons/GitHubIcon'
import { GoogleIcon } from './icons/GoogleIcon'
import { FacebookIcon } from './icons/FacebookIcon'

function Form() {
  return (
    <Card className='py-4 md:w-1/3   px-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <Avatar
          className='mx-auto'
          isBordered
          size='lg'
          src='https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=626&ext=jpg'
        ></Avatar>
      </CardHeader>
      <CardBody className='overflow-visible mt-3 py-2'>
        <Label className='mb-3' htmlFor='email'>
          Email
        </Label>
        <Input
          id='email'
          className='mb-3'
          type='email'
          placeholder='Email'
        ></Input>
        <Label className='mb-3' htmlFor='password'>
          Password
        </Label>
        <Input type='password' placeholder='Password'></Input>
        <section className='mt-2 flex justify-between items-center'>
          <article className='flex gap-2 items-center'>
            <Input
              id='check'
              type='checkbox'
              className={`w-3 h-3 checked:bg-black`}
            ></Input>
            <Label
              className='font-semibold text-xs text-nowrap text-slate-50'
              htmlFor='check'
            >
              Remember me
            </Label>
          </article>
          <Button
            className='text-xs text-slate-50 font-semibold'
            variant='link'
          >
            Forgot password?
          </Button>
        </section>
        <ButtonNext
          className='mt-3'
          variant='bordered'
          startContent={<UserCircle2Icon />}
        >
          Login
        </ButtonNext>
        <section className=' mt-4 flex justify-around'>
          <Button variant='ghost'>
            <GitHubIcon></GitHubIcon>
          </Button>
          <Button variant='ghost'>
            <GoogleIcon></GoogleIcon>
          </Button>
          <Button variant='ghost'>
            <FacebookIcon></FacebookIcon>
          </Button>
        </section>
      </CardBody>
    </Card>
  )
}
export default Form

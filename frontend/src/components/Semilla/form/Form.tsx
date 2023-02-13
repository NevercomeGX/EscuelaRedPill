import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Container from '../container';
interface Props {
  heading: string;
  message: string;
}

const ContactForm = ({ heading, message }: Props) => {
  const [credentials, setCredentials] = useState({
    name: '',
    lastName: '',
    email: '',
    country: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(e.target.checked);
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent the default form submission behavior

    // create a new user object with the form data
    try {
      axios.post(process.env.NEXT_PUBLIC_HOST + '/api/emails', {
        name: credentials.name,
        lastName: credentials.lastName,
        email: credentials.email,
        selectedOption: credentials.country,
      });
      router.push('/gracias');
    } catch (error) {
      //s
    }
  };

  return (
    <Container>
      <div className='w-full '>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(event);
          }}
        >
          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Nombre'
            type='text'
            id='first-name'
            onChange={(e) =>
              setCredentials({
                ...credentials,
                name: e.target.value,
              })
            }
            required
          />
          <br />

          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Apellido'
            type='text'
            id='last-name'
            onChange={(e) =>
              setCredentials({
                ...credentials,
                lastName: e.target.value,
              })
            }
            required
          />
          <br />
          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Email'
            type='email'
            id='email'
            onChange={(e) =>
              setCredentials({
                ...credentials,
                email: e.target.value,
              })
            }
            required
          />
          <br />

          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Pais'
            type='text'
            onChange={(e) =>
              setCredentials({
                ...credentials,
                country: e.target.value,
              })
            }
            required
          />
          {/* 
          <select
            className='form-control my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            value={selected}
            onChange={handleChange}
          >
            {Country.map((Country) => (
              <option key={Country.name} value={Country.name}>
                {Country.name}
              </option>
            ))}
          </select> */}
          {/* <PhoneInput
					placeholder="Enter phone number"
					value={value}
					onChange={event:Event}
				/> */}

          {/* <div className='form-group'>
          <input
            type='text'
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-black bg-white py-2 px-4 align-middle text-lg leading-normal'
            id='phoneNumber'
            placeholder='Numero de telefono'
          />
        </div> */}
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <br />
          <div className='flex w-full  flex-1 flex-col-reverse items-center justify-center py-10'>
            <input
              className='  min-h-[25px] min-w-[25px] flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white align-middle text-lg leading-normal'
              type='checkbox'
              id='terms'
              onChange={handleCheckboxChange}
              checked={acceptedTerms}
            />
            <label htmlFor='terms' className=' p-2'>
              Acepto la{' '}
              <span className='text-red-500'>
                <a href='' className='items-center justify-center'>
                  Política de Privacidad y Protección de Datos
                </a>
              </span>
            </label>
          </div>
          {acceptedTerms ? (
            // <Link href='/gracias'>
            <button
              type='submit'
              className='my-4 rounded-md border border-[#212121] bg-[#c70039] px-8 py-2 font-bold lg:w-96'
            >
              REGISTRATE GRATIS
            </button>
          ) : // </Link>
          null}
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;

import React from 'react';

import Container from './container';

interface sectiontittle {
  pretitle?: string;
  title?: string;
  children?: string;
  align?: string;
  className?: string;
  Textcolor?: string;
  lista?: boolean;
  listado?: string[];
}

export default function SectionTitle(props: sectiontittle) {
  return (
    <Container
      className={`my-16 flex w-full flex-col bg-[#212121]  ${
        props.align === 'left' ? '' : 'items-center justify-center text-center '
      }`}
    >
      <h2 className='mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-white dark:text-white lg:text-4xl lg:leading-tight'>
        GARANTIA
      </h2>

      <p className='max-w-5xl   py-9 text-lg leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
        ¡No te preocupes! Si no estas a gusto recuerda que contamos con una
        garantía de 7 días para "ABC de la Comunicación", puedes hacerlo
        fácilmente enviando un correo electrónico al equipo de la Escuela Red
        Pill. En el correo electrónico, asegúrate de incluir tu nombre y
        dirección de correo electrónico asociada con la compra, la fecha de la
        compra, la razón por la que deseas una devolución y confirma que
        entiendes los términos y condiciones de la garantía de devolución de 7
        días.
        <br />
        <br />
        El equipo de soporte del curso procesará tu solicitud de devolución y te
        enviará una confirmación una vez que se haya realizado el reembolso. Por
        supuesto, es posible que debas proporcionar información adicional para
        completar el proceso de devolución.
      </p>
    </Container>
  );
}

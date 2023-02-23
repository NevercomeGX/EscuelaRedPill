import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <div className={` xl:px-0 ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}

import React from 'react';

export default function Container(props: any) {
  return (
    <div className={` x xl:px-0 ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}

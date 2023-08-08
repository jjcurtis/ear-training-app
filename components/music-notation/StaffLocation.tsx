import React from 'react';
import {useDroppable} from '@dnd-kit/core'

type Props = {
  id: string;
  type: 'line' | 'space';
  children?: React.ReactNode
};
export function StaffLocation({ id, type, children }: Props) {
  const {isOver, setNodeRef} = useDroppable({ id })

  const className =
    type === 'line'
      ? `${isOver && 'bg-sky-500 outline outline-4 outline-sky-500'} border border-black bg-black h-[2px]`
      : `${isOver && 'bg-sky-500 outline outline-8 outline-sky-500'} border border-transparent`;
  return <div id={id} ref={setNodeRef} className={className}>
    {children}
  </div>;
}

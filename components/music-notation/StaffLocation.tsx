import React from 'react';

type Props = {
  id: string;
  type: 'line' | 'space';
};
export function StaffLocation({ id, type }: Props) {
  const style =
    type === 'line'
      ? 'border-t-2 border-black py-1'
      : 'border border-transparent py-1.5';
  return <div id={id} className={style}></div>;
}

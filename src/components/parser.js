import React from 'react';
import uuid from 'uuid/v1';

export const parseNames = names => {
  const result = names.map(name => {
    if (name.includes(':')) {
      const split = name.split(':');
      return (
        <p key={uuid()}>
          {split[1]} <span>({split[0]})</span>
        </p>
      );
    }
    return <p key={uuid()}>{name}</p>;
  });
  return result;
};

export const parseDates = (created, updated) => {
  const fix = date => {
    return date
      .toLowerCase()
      .replace(' - ', ' às ')
      .replace(':', 'h');
  };
  const result = [];
  if (created) {
    result.push(<p key={uuid()}>{fix(created)}</p>);
  }
  if (created && updated) {
    result.push(<p key={uuid()}>Atualizado: {fix(updated)}</p>);
  } else if (updated) {
    result.push(<p key={uuid()}>Última atualização: {fix(updated)}</p>);
  }

  return result;
};

import React from 'react';
import uuid from 'uuid/v1';

import Video from './video';
import Mosaic from './mosaic';
import FigureCaption from './figure-caption';

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

export const parseOptions = {
  replace: domNode => {
    if (domNode.attribs && domNode.attribs.class === 'video') {
      return <Video title={domNode.attribs.title || 'Vídeo'} id={domNode.attribs['data-video']} />;
    }
    if (domNode.attribs && domNode.attribs.alt) {
      return <FigureCaption attribs={domNode.attribs} />;
    }
    if (domNode.attribs && domNode.attribs.class === 'mosaic') {
      return <Mosaic />;
    }

    return domNode;
  },
};

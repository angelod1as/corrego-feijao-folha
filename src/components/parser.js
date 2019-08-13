import React from 'react';
import uuid from 'uuid/v1';

import Video from './video';
import Mosaic from './mosaic';
import FigureCaption from './figure-caption';

export const parseOptions = props => {
  return {
    replace: domNode => {
      if (domNode.attribs) {
        if (domNode.attribs.alt) {
          return <FigureCaption attribs={domNode.attribs} />;
        }
        if (domNode.attribs.class === 'video') {
          return (
            <Video title={domNode.attribs.title || 'Vídeo'} id={domNode.attribs['data-video']} />
          );
        }
        if (domNode.attribs.class === 'mosaic' && props && props.mosaic) {
          const { mosaic, home } = props;
          return <Mosaic content={mosaic} home={home} />;
        }
        if (domNode.attribs.class === 'infos') {
          return (
            <div className="infos">
              {domNode.children.map(each => {
                if (each.name === 'ul') {
                  return (
                    <ul key={uuid()}>
                      {each.children.map(item => {
                        if (item.name === 'li') {
                          if (item.children[0].data.includes(':')) {
                            const split = item.children[0].data.split(':');
                            return (
                              <li key={uuid()}>
                                <span>{split[0]}</span>
                                {split[1]}
                              </li>
                            );
                          }
                          return <li key={uuid()}>{item.children[0].data}</li>;
                        }
                        return null;
                      })}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          );
        }
        return domNode;
      }
      return domNode;
    },
  };
};

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

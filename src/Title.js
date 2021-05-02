import { h } from './core';

const Title = () => {
  return h('hgroup', null, h('h1', null, 'Hello'), h('h2', null, 'World'));
};

export default Title;

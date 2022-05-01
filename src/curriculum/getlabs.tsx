import React from 'react';

const requireComponent = require.context('./', false, /.mdx$/);

const list: any[] = [];

requireComponent.keys().forEach( (fileName: string) => {
  const componentConfig = requireComponent(fileName)

  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace(/mdx/, '');

  const CompTag = componentConfig.default;

  list.push({
    label: componentName,
    comp: <CompTag />,
    frontM: componentConfig.frontMatter
  });
});

export default list;

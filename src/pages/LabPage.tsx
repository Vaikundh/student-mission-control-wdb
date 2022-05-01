import React, { useEffect, useState } from 'react';
import '../theme/default.scss';
import Content, {
  frontMatter,
} from '!babel-loader!mdx-loader!../curriculum/test.mdx';
import NavBar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar';
import { Button } from '@chakra-ui/react';
// import list from '../curriculum/getlabs';

const LabPage = () => {
  const getNumLabs = () => {
    const requireComponent = require.context('../curriculum', false, /.mdx$/);
    return requireComponent.keys().length;
  };

  const [lab, setLab] = useState<JSX.Element>(<Content></Content>);
  const [frontM, setFrontM] = useState<any>(frontMatter);
  const [numLabs, setNumLabs] = useState<number>(getNumLabs());
  const [labIndex, setLabIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const list: any[] = [];

  useEffect(() => {
    // const requireComponent = require.context('../curriculum', false, /.mdx$/);
    // console.log(requireComponent.keys())

    // requireComponent.keys().forEach((fileName: string) => {
    //   const componentName = fileName
    //     .replace(/^\.\//, '')
    //     .replace(/\.\w+$/, '')
    //     .replace(/mdx/, '');

    //   const file = '../curriculum/' + componentName + '.mdx'
    //   console.log(file)
    //   const componentConfig = requireComponent(fileName);

    //   const CompTag = componentConfig.default;

    //   list.push({
    //     label: componentName,
    //     comp: <CompTag />,
    //     frontM: componentConfig.frontMatter,
    //   });

    //   console.log('hiii', list);
    // });
    // getLabs().then(() => {
    //   console.log(list)
    //   const e = list[0].default
    //   console.log(list[0].default)
    //   console.log(<Content></Content>)
    // })
    console.log(numLabs);
  }, []);

  useEffect(() => {
    // action on update of movies
    setProgress((labIndex / (numLabs - 1)) * 100)
}, [labIndex]);

  const routePrev = async () => {
    if (!frontM.prev) {
      return;
    }
    const stuff = await import(
      `!babel-loader!mdx-loader!../curriculum/${frontM.prev}.mdx`
    );
    setLab(stuff.default);
    setFrontM(stuff.frontMatter);
    setLabIndex(labIndex - 1);
    setProgress((labIndex / (numLabs - 1)) * 100);
  };

  const routeNext = () => {
    if (!frontM.next) {
      return;
    }

    import(`!babel-loader!mdx-loader!../curriculum/${frontM.next}.mdx`).then(
      (stuff) => {
        setLab(stuff.default);
        setFrontM(stuff.frontMatter);
        setLabIndex(labIndex + 1)
      },
    );
  };

  return (
    <>
      <NavBar />
      <ProgressBar progress={progress} />
      {labIndex + 1} / {numLabs}
      <div className="default">{lab}</div>
      <Button variant="secondary" onClick={routePrev}>Back</Button>
      <Button onClick={routeNext}>Next</Button>
    </>
  );
};

export default LabPage;

import React, { useEffect, useState } from 'react';
import '../theme/default.scss';
import Dummy from '!babel-loader!mdx-loader!../curriculum/test.mdx';
import NavBar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar';
import { Button } from '@chakra-ui/react';

interface LabPageProps {
  unit: number;
}

const LabPage = (props: LabPageProps) => {
  const navigate = useNavigate();

  const getNumLabs = () => {
    const requireComponent = require.context('../curriculum', false, /.mdx$/);
    return requireComponent.keys().length;
  };
  const [labs, setLabs] = useState(new Map<number, any[]>());
  const [lab, setLab] = useState<JSX.Element>(<Dummy></Dummy>);
  const numLabs = getNumLabs();
  const [labIndex, setLabIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getLabs();
  }, []);

  useEffect(() => {
    // update progress whenever labIndex changes
    setProgress((labIndex / (numLabs - 1)) * 100);
  }, [labIndex]);

  const getLabs = () => {
    console.log('../curriculum/unit' + props.unit.toString());
    const file = '../curriculum/unit' + props.unit.toString();
    // ugh... can't import based on dynamic path.. path changes based on unit folder... what to dooooo
    const requireComponent = require.context(`../curriculum`, false, /.mdx$/);
    console.log(requireComponent.keys());

    requireComponent.keys().forEach((fileName: string) => {
      const componentName = fileName
        .replace(/^\.\//, '')
        .replace(/\.\w+$/, '')
        .replace(/mdx/, '');

      import(
        `!babel-loader!mdx-loader!../curriculum/${componentName}.mdx`
      ).then((stuff) => {
        const lab_stuff = [stuff.default, stuff.frontMatter];
        const lab_index = stuff.frontMatter.index;
        if (lab_index == 0) {
          setLab(stuff.default);
        }
        labs.set(lab_index, lab_stuff);
        console.log(labs);
      });
    });
    setLabs(labs);
  };

  const routePrev = () => {
    if (labIndex == 0) {
      return;
    }

    const next_lab = labs.get(labIndex - 1);
    if (next_lab) {
      setLab(next_lab[0]);
      setLabIndex(labIndex - 1);
    }
  };

  const routeNext = () => {
    if (labIndex == numLabs - 1) {
      return;
    }

    const next_lab = labs.get(labIndex + 1);
    if (next_lab) {
      setLab(next_lab[0]);
      setLabIndex(labIndex + 1);
    }
  };

  return (
    <>
      <NavBar />
      <ProgressBar progress={progress} />
      {labIndex + 1} / {numLabs}
      <div className="default">{lab}</div>
      <Button
        variant="secondary"
        disabled={labIndex == 0 ? true : false}
        onClick={routePrev}>
        Back
      </Button>
      <Button
        onClick={routeNext}
        disabled={labIndex == numLabs - 1 ? true : false}>
        Next
      </Button>
    </>
  );
};

export default LabPage;

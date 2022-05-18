import React, { useEffect, useState } from 'react';
import '../theme/default.scss';
import Dummy from '!babel-loader!mdx-loader!../curriculum/dummy.mdx';
import NavBar from '../Components/Navbar/Navbar';
import ProgressBar from '../Components/ProgressBar';
import { Button } from '@chakra-ui/react';

interface LabPageProps {
  unit: number;
  lab: number;
}

const LabPage = (props: LabPageProps) => {
  const [labs, setLabs] = useState(new Map<number, any[]>());
  const [lab, setLab] = useState<JSX.Element>(<Dummy></Dummy>);
  const [numLabs, setNumLabs] = useState(0);
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
    const file = '../curriculum/lab' + props.lab.toString();
    // ugh... can't import based on dynamic path.. path changes based on lab folder... what to dooooo
    const requireComponent = require.context(`../curriculum`, true, /.mdx$/);
    console.log(requireComponent.keys());

    let count = 0;
    requireComponent.keys().forEach((fileName: string) => {
      if (fileName.slice(2, 7) === `unit${props.unit}` && fileName.slice(8,12) === `lab${props.lab}`) {
        count++;
        const componentName = fileName
          .replace(/^\.\//, '')
          .replace(/\.\w+$/, '')
          .replace(/mdx/, '');

        import(
          `!babel-loader!mdx-loader!../curriculum/${componentName}.mdx`
        ).then((stuff) => {
          console.log(`../curriculum/${componentName}.mdx'`)
          const lab_stuff = [stuff.default, stuff.frontMatter];
          const lab_index = stuff.frontMatter.index;
          if (lab_index == 0) {
            setLab(stuff.default);
          }
          labs.set(lab_index, lab_stuff);
          console.log(labs);
        });
      }
    });
    setLabs(labs);
    setNumLabs(count);
  };

  const routePrev = () => {
    if (labIndex === 0) {
      return;
    }

    const next_lab = labs.get(labIndex - 1);
    if (next_lab) {
      setLab(next_lab[0]);
      setLabIndex(labIndex - 1);
    }
  };

  const routeNext = () => {
    if (labIndex === numLabs - 1) {
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

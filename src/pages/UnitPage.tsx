import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading } from '@chakra-ui/react';

interface UnitPageProps {
  unit: number;
}

const UnitPage = (props: UnitPageProps) => {
  const [numLabs, setNumLabs] = useState(0);
  const [labsArr, setLabsArr] = useState([] as number[]);

  useEffect(() => {
    getNumLabs();
  }, []);

  const getNumLabs = () => {
    // ugh... can't import based on dynamic path.. path changes based on lab folder... what to dooooo
    const requireComponent = require.context('../curriculum', true, /.mdx$/);
    let count = 0;
    let a: number[] = new Array(numLabs);
    a = [];
    requireComponent.keys().forEach((fileName: string) => {
      if (fileName.slice(2, 7) === `unit${props.unit}` && !a.includes(parseInt(fileName.slice(11, 12)))) {
        count++;
        a.push(parseInt(fileName.slice(11, 12)))
        setNumLabs(count);
      }
    });
    setLabsArr(a);
  };

  return (
    <>
      <NavBar />
      <Heading>Unit {props.unit}</Heading>
      { labsArr.map((val) => {
        return (
          <>
          <Button>
            Lab { val }
          </Button>
          </>
        )
      })
      }
    </>
  );
};

export default UnitPage;

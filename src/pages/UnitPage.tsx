import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface UnitPageProps {
  unit: number;
}

const UnitPage = (props: UnitPageProps) => {
  const navigate = useNavigate();
  const [numLabs, setNumLabs] = useState(0);
  const [labsArr, setLabsArr] = useState([] as number[]);

  useEffect(() => {
    getNumLabs();
  }, []);

  const getNumLabs = () => {
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

  const nav = (lab : number) => {
    const s = '/unit' + props.unit + '/lab' + lab;
    navigate(s);
}

  return (
    <>
      <NavBar />
      <Heading>Unit {props.unit}</Heading>
      { labsArr.map((val) => {
        return (
          <>
          <Button onClick={() => nav(val)}>
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

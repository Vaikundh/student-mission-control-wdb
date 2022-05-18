import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AllUnitsPage = () => {
    const navigate = useNavigate();
    const [numUnits, setNumUnits] = useState(0);
    const [unitsArr, setUnitsArr] = useState([] as number[]);
  
    useEffect(() => {
      getNumUnits();
    }, []);
  
    const getNumUnits = () => {
      const requireComponent = require.context('../curriculum', true, /.mdx$/);
      let count = 0;
      let a: number[] = new Array(numUnits);
      a = [];
      requireComponent.keys().forEach((fileName: string) => {
        if (fileName.slice(2, 6) === `unit` && !a.includes(parseInt(fileName.slice(6, 7)))) {
          count++;
          a.push(parseInt(fileName.slice(6, 7)))
          setNumUnits(count);
        }
      });
      setUnitsArr(a);
    };

    const nav = (unit : number) => {
        const s = '/unit' + unit
        navigate(s);
    }
  
    return (
      <>
        <NavBar />
        <Heading>Units</Heading>
        { unitsArr.map((val) => {
          return (
            <>
            <Button onClick={() => nav(val)}>
              Unit { val }
            </Button>
            </>
          )
        })
        }
      </>
    );
  };

export default AllUnitsPage;
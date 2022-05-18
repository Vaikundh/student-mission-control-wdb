import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading } from '@chakra-ui/react';

const AllUnitsPage = () => {
    const [numUnits, setNumUnits] = useState(0);
    const [unitsArr, setUnitsArr] = useState([] as number[]);
  
    useEffect(() => {
      getNumUnits();
    }, []);
  
    const getNumUnits = () => {
      // ugh... can't import based on dynamic path.. path changes based on lab folder... what to dooooo
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
  
    return (
      <>
        <NavBar />
        <Heading>Units</Heading>
        { unitsArr.map((val) => {
          return (
            <>
            <Button>
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
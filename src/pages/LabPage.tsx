import React from 'react';
import '../theme/default.scss';
import Content from '!babel-loader!@mdx-js/loader!../curriculum/test.mdx';
import NavBar from '../Components/Navbar/Navbar';


const LabPage = () => {
  return (
    <>
      <NavBar />
      <div className="default">
        <Content />
      </div>
    </>
  );
};

export default LabPage;

import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';



//function  function(){} , = () => {}
const HomePage = ({history}) => (
    <div className="homepage">
        <Directory/>
    </div>
)

export default HomePage;
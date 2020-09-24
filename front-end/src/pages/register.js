import React from 'react';
import { RegisterUser } from '../Components';
import BeerCard from '../Components/BeerCard/index';
import beers from '../images/beers.png';

const register = () => <BeerCard productName="Eu" price="10" index="0" imageURL={beers}/>;

export default register;

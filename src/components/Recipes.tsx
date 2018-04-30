import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import Button from './common/Button';

const divider = require('../assets/images/dividers/divider_4.png');
const recipe = require('../assets/images/asset25.png');

const RecipeItem = () => {
    return (
        <div className='recipe-item'>
            <div className='recipe-item-image'>
                <img src={recipe} alt='recipe' />
            </div>
            <div className='recipe-item-text'>
                <Button size={'medium'} type={'primary'} />
            </div>
        </div>
    );
};

const Recipes = () => {
    return (
        <Section sectionClass='recipe'>
            <div className=' recipe-wrapper'>
                <Divider type={'title'} imgSrc={divider} />
                <h2>Recipes For You</h2>
                <div className='recipe-grid'>
                    <RecipeItem />
                </div>
            </div>
        </Section>
    );
};

export default Recipes;

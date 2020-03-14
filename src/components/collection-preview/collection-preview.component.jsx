import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection-preview.styles.scss';


/* A Preview of all items in a collection */
/* This functional components takes the properties of 'title' and 'items' */
const CollectionPreview = ({ title, items }) => (
    
    /* Container Div */
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            { 
                /* Destructure the items and ensure only 4 displays in row */
                items
                .filter((item, idx) => idx < 4)
                .map (( {id, ...otherItemProps}) => (
                <CollectionItem key={ id } { ...otherItemProps } />
                ))
            
            }
        </div>
    </div> 
    /* End Container Div */  
);

export default CollectionPreview;
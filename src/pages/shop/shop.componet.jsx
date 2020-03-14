import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';


/* The main preview shoing showing the collection of shopping items */
/* Since this will carry the state, make it a class */
class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* Collection of items  */
            collections: SHOP_DATA
        }

    }

    render() {
        
        /* Destructure the 'collections' state */
        const { collections } = this.state;

        return <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={ id } { ...otherCollectionProps } />
                ))   
            }
            
            </div>
       
     }

}

export default ShopPage;
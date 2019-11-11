import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import image1 from './images/cr_violet.png';
import image3 from './images/electroperedachi.jpg';
import image2 from './images/cr_red_white.png';
import image4 from './images/synth_blue.jpg';
import image5 from './images/termonator.png';




class Directory extends React.Component {
    constructor(){
        super(); /* Import everuthing from React CLass */

        this.state = {
            sections:[
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/px2tCc3/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Jackets',
                  imageUrl:  'https://i.ibb.co/px2tCc3/jackets.png' ,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({/* title,imageUrl, */id , ...otherSectionProps  /* ,size,linkUrl */}) => (
                        <MenuItem key={id} {...otherSectionProps}/*title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} *//>
                    ))
                }
            </div>
        )
       
    }
}

export default Directory;
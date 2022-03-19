import React from 'react';
import productData from '../utilities/ProductData';
import styleClasses from './productPreview.module.css';

const productPreview = (props) => {

    let today = new Date();
    const currentHour = today.getHours() < 9 ? '0' + today.getHours() : today.getHours();
    const currentMinute = today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes();

    return (

        <div className={styleClasses.productPreview}>
            <img className={styleClasses.displayedProductImage} src={productData.colorOptions[props.currentPreviewImagePos].imageUrl} alt="displayed watch image" />
            <div className={styleClasses.featureBox}>
                {props.currentFeaturePos === 0 ?
                    <h2 className={styleClasses.timeContainer}>{`${currentHour}:${currentMinute}`}</h2>
                    :
                    <div className={styleClasses.heartbeatContainer}>
                        <i className="fa-solid fa-heart-pulse"></i>
                        <p>77</p>
                    </div>
                }
            </div>
        </div>
    );
};


export default productPreview;
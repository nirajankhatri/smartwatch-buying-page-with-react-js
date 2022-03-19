import React from 'react';
import productData from '../utilities/ProductData';
import styleClasses from './productInfo.module.css';

const productInfo = (props) => {
    
    const selectColor = props.data.colorOptions.map((color, pos) => {
        const classArr = [styleClasses.colorSelectionProductImage];
        if (pos === props.currentPreviewImagePos) {
                classArr.push(styleClasses.selectedProductImage);
        }
        return (
            <img key={pos}  className={classArr.join(' ')} src={color.imageUrl} alt='{color.styleName}' onClick={() => {props.onColorOptionClick(pos)}}/>
        );
    });

    const featureBtns = props.data.featureList.map((btn, pos) => {
        const classArr = [styleClasses.featureBtn];
        if(pos === props.currentFeaturePos){
            classArr.push(styleClasses.selectedFeature);
        }
        return (
            <button key={pos} className={classArr.join(' ')} onClick={() => {props.onFeatureOptionClick(pos)}}>{btn}</button>
        );
    });


    return (
        <div className={styleClasses.infoContainer}>
            <h1 className={styleClasses.productHeading}>{productData.title}</h1>
            <p className={styleClasses.productDescription}>{productData.description}</p>
            <h3 className={styleClasses.colorSelectionHeading}>Select Color</h3>
            <div className={styleClasses.colorSelectionContainer}>
                {selectColor}
            </div>
            <h3 className={styleClasses.featureSelectionHeading}>Features</h3>
            <div className={styleClasses.featureContainer}>
                {featureBtns}
            </div>
            <button className={styleClasses.buyBtn}>Buy Now</button>
        </div>
    );
};

export default productInfo;
import styleClasses from './App.module.css';
import ProductPreview from './productPreview/productPreview';
import ProductInfo from './productInfo/productInfo';
import TopBar from './topBar/topBar';
import ProductData from './utilities/ProductData';
import { Component } from 'react';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentFeaturePos: 0
  };

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos}); 
  };

  onFeatureOptionClick = (pos) => {
    this.setState({currentFeaturePos: pos})
  };

  render() {
    console.log('App rendered');
    return (
      <div className="App">
        <TopBar />
        <main>
          <div className={styleClasses.mainContainer}>
            <ProductPreview currentPreviewImagePos={this.state.currentPreviewImagePos} currentFeaturePos={this.state.currentFeaturePos} />
            <ProductInfo data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} currentFeaturePos={this.state.currentFeaturePos} onFeatureOptionClick={this.onFeatureOptionClick} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

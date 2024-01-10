import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class Test extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(6), // Generate 6 images
      });
    }, 100);
  }

  createChildren = (n) => {
    const imageInfo = [
      { name: 'HOUSE OF CARDS', description: 'Beautiful natural scenery' },
      { name: 'REAL ESTATE', description: 'Urban landscape with skyscrapers' },
      { name: 'BRIDGE DESIGNING', description: 'Abstract art' },
      { name: 'SHIPWRECK COVE', description: 'Cute animals in their habitat' },
      { name: 'SHIPWRECK COVE', description: 'Innovative and modern technology' },
      { name: 'SHIPWRECK COVE', description: 'Astronomy and celestial bodies' },
    ];

    return range(n).map((i) => (
      <div key={i} className="flex flex-col items-center justify-center text-center md:mx-2">
        <img
          src={this.getImageUrl(i + 1)} // Replace with your image URLs
          alt={imageInfo[i].name}
          className="md:h-[432px] h-[200px] w-[192px]"
        />
        <p className="flex justify-center mt-5 text-white">{imageInfo[i].name}</p>
        {/* {this.props.showImageDescriptions && (
          <p className="mt-5 italic">{imageInfo[i].description}</p>
        )} */}
      </div>
    ));
  };

  getImageUrl = (index) => {
    // Replace these placeholder URLs with the actual URLs of your images
    const imageUrls = [
      'img2.png',
      'img2.png',
      'img2.png',
      'img2.png',
      'img2.png',
      'img2.png',
      'img2.png',
      'img2.png',
    ];

    // Ensure the index is within bounds
    const actualIndex = (index - 1) % imageUrls.length;
    return imageUrls[actualIndex];
  };

  handleRightChevronClick = () => {
    this.setState((prevState) => ({
      activeItemIndex: (prevState.activeItemIndex + 1) % this.state.children.length,
    }));
  };

  handleLeftChevronClick = () => {
    this.setState((prevState) => ({
      activeItemIndex:
        (prevState.activeItemIndex - 1 + this.state.children.length) % this.state.children.length,
    }));
  };

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <div className='flex flex-row'>
        <div className='md:w-[5vw] w-[3vw] flex items-center '><button onClick={this.handleLeftChevronClick} className="flex mx-2 text-3xl">&#9665;</button></div>
       <div className='md:w-[90vw] w-[94vw]'> <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={
            <div className="items-center justify-center text-center">Placeholder</div>
          }
          numberOfCards={4}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          requestToChangeActive={(index) => this.setState({ activeItemIndex: index })}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={32}
          rightChevron={null} // Remove default right chevron
          leftChevron={null} // Remove default left chevron
          outsideChevron={false}
        >
          {children}
        </ItemsCarousel></div>
        <div className='md:w-[5vw] w-[3vw]  flex items-center'><button onClick={this.handleRightChevronClick} className="mx-2 text-3xl">&#9655;</button></div>
      </div>
    );
  }
}

Test.defaultProps = {
  showImageDescriptions: true, // Default to showing image descriptions
};

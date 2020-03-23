import * as React from 'react';
import PickerModal from 'react-native-picker-modal-view';

const categories = [{id: 1, name: 'Shoes'}, {id: 2, name: 'Automobile'}, {id: 3, name: 'Electronics'}]

const CategoryPicker = () => {
    const [selectedItem, setSelectedItem] = React.useState({});

        return (
		<PickerModal
			onSelected={(selected) => setSelectedItem(selected)}
			onRequestClosed={()=> console.warn('closed...')}
			onBackRequest={()=> console.warn('back key pressed')}
			list={categories}
			sortingLanguage={'tr'}
			showToTopButton={true}
			defaultSelected={selectedItem}
			autoCorrect={false}
			autoGenerateAlphabet={true}
			chooseText={'Choose one'}
			searchText={'Search...'} 
			forceSelect={false}
			autoSort={true}
		/>
        )
    
}

export default CategoryPicker;

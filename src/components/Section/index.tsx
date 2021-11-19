import React from 'react';
import {View} from 'react-native';
import {useState} from 'react';

import SectionHeader from '../SectionHeader';
import SectionPartitionLine from '../SectionPartitionLine';
import ReadMore from '../ReadMore';

interface Props {
	isFoldable?: boolean;
	hasReadMore?: boolean;
	title: string;
	titleNum?: number | null;
	contents: any;
}

const Section = ({isFoldable, hasReadMore, title, titleNum, contents}: Props) => {
	const [isFolded, setIsFolded] = useState(false);
	const body = (
		<View>
			<SectionPartitionLine />
			{contents}
			{hasReadMore && <ReadMore sectionTitle={title} onPress={() => console.log('ReadMore Click')} />}
		</View>
	);
	return (
		<View>
			<SectionPartitionLine />
			<SectionHeader isFordable={isFoldable} isFolded={isFolded} onPress={() => setIsFolded(!isFolded)} title={title} titleNum={titleNum} />
			{isFolded && body}
		</View>
	);
};

Section.defaultProps = {
	isFoldable: true,
	hasReadMore: true,
	title: '',
	titleNum: null,
	contents: {},
};

export default Section;

import React from 'react';
import Plotly from 'react-native-plotly';
import {palette} from '~/style/base';

interface Props {
	category: string[];
	value: number[];
}
const RadarChart = ({category, value}: Props) => {
	const data = [
		{
			name: 'taste',
			type: 'scatterpolar', // chart type
			r: [...value, value[0]], // data
			theta: [...category, category[0]], // data category
			fill: 'toself', // fill option (toself)
			mode: 'lines',
			line: {
				color: palette.pointGreen,
			},
		},
	];
	const layout = {
		polar: {
			radialaxis: {
				visible: true,
				range: [0, 100],
				color: palette.gray,
				showticklabels: false,
				showline: false,
				ticklen: 0,
			},
			angularaxis: {
				rotation: 90,
				color: palette.gray,
				ticklen: 0,
				tickfont: {
					color: palette.gray,
					size: 15,
				},
			},
			gridshape: 'linear',
			showlegend: false,
		},
	};
	return <Plotly data={data} layout={layout} debug enableFullPlotly />;
};

export default RadarChart;

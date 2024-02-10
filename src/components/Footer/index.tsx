import React from 'react';
import InfoLinkComponent from '../InfoLink';

type Props = {
	bgColor: string;
};

const Footer = (props: Props) => {
	return (
		<div>
			<InfoLinkComponent bgColor={props.bgColor} />
		</div>
	);
};

export default Footer;

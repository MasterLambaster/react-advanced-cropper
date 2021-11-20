import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';
import './CropperFade.scss';

interface Props {
	visible?: boolean;
	className?: string;
	style?: CSSProperties;
}

export const CropperFade: FC<Props> = ({ visible, className, style, children }) => {
	return (
		<div style={style} className={cn(className, 'react-cropper-fade', visible && 'react-cropper-fade--visible')}>
			{children}
		</div>
	);
};

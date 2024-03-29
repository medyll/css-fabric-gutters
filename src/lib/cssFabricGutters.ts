import { selector } from '@medyll/htmludom';

function cssFabricGutters() {
	if (typeof window === 'undefined') return;

	window.document.addEventListener('DOMContentLoaded', () => {
		const style = window.document.createElement('style');
		style.innerHTML = `
            .ms-Fabric {
                margin: 0 auto;
                max-width: 100%;
                padding: 0 16px;
                width: 100%;
            }
        `;
		window.document.head.appendChild(style);

		selector('[data-gutter]', (element: Element) => {
			console.log(element);
		});
	});
	return {
		config: () => {}
	};
}

export default cssFabricGutters;

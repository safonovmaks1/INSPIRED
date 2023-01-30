import { createElement } from '../utils/createElement';
import { getUrl } from '../utils/getUrl';

export const renderPagination = (wrapperPagination, page, pages, count) => {
	wrapperPagination.textContent = '';

	const paginationList = createElement(
		'ul',
		{
			className: 'pagination__list',
		},
		{
			parent: wrapperPagination,
		}
	);

	const isNotStart = page - Math.floor(count / 2) > 1;
	const isEnd = page + Math.floor(count / 2) >= pages;

	if (count > pages) {
		count = pages;
	}

	for (let i = 0; i < count; i++) {
		let n = i + 1;

		if (isNotStart) {
			if (isEnd) {
				n = pages - count + i + 1;
			} else {
				n = pages - Math.floor(count / 2) + i;
			}
		}

		createElement(
			'li',
			{
				className: 'pagination__item',
			},
			{
				parent: paginationList,
				append: createElement('a', {
					textContent: n,
					href: getUrl({ page: n }),
					className: `pagination__link
					${page === n ? 'pagination__link_active' : ''}`,
				}),
			}
		);
	}

	if (pages > count) {
		createElement(
			'a',
			{
				className: `pagination__arrow pagination__arrow_start
					${!isNotStart ? 'pagination__arrow_disabled' : ''}`,
				href: getUrl({ page: 1 }),
				tabIndex: !isNotStart ? '-1' : '0',
				innerHTML: `
					<svg class="pagination__icon" width="5" height="8" viewBox="0 0 5 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 7.06L1.90958 4L5 0.94L4.04858 0L-1.19209e-07 4L4.04858 8L5 7.06Z" />
					</svg>
					`,
				ariaLabel: 'In start',
			},
			{
				parent: wrapperPagination,
				cb(link) {
					wrapperPagination.prepend(link);
				},
			}
		),
			createElement(
				'a',
				{
					className: `pagination__arrow pagination__arrow_end
						${isEnd ? 'pagination__arrow_disabled' : ''}`,
					href: getUrl({ page: pages }),
					tabIndex: isEnd ? '-1' : '0',
					innerHTML: `
						<svg class="pagination__icon"  width="5" height="8" viewBox="0 0 5 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 7.06L3.09042 4L0 0.94L0.951417 0L5 4L0.951417 8L0 7.06Z" />
						</svg>
					`,
					ariaLabel: 'In end',
				},
				{
					parent: wrapperPagination,
				}
			);
	}
};
